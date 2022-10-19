const fs = require('fs');
const globby = require('globby');
const { SimpleDate } = require('@gdi/language');
const path = require('path');
const prettier = require('prettier');
const { concat } = require('lodash');

const now = new SimpleDate();
const year = now.toInfo().year;
const week = now.toInfo().week;
const dayOfWeek = now.toInfo().dayOfWeek;

const start = now.addWeeks(-2);
const startYear = start.toInfo().year;
const startWeek = start.toInfo().week;

const run = async () => {
    const files = globby.sync('**/state*.ts');

    files.forEach((file) => {
        const content = fs
            .readFileSync(file, 'utf8')
            .split('\n')
            .filter((i) => !i.match(/^import/) && i.length > 0)
            .join('\n')
            .replace(/export const state: [a-z]+ = /gi, '');

        const { dir } = path.parse(file);

        try {
            const json = new Function(`return ${content}`)();

            Object.keys(json).forEach((key) => {
                fs.writeFileSync(
                    `${dir}/node.${key}.ts`,
                    formatCode(
                        `export const ${key} = ${JSON.stringify(
                            json[key],
                            null,
                            4
                        )}`
                    )
                );
            });
        } catch (err) {
            console.log('problem with', file);
        }
    });
};

const formatCode = (code) => {
    return prettier.format(code, {
        parser: 'babel-ts',
        trailingComma: 'es5',
        tabWidth: 4,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        endOfLine: 'auto',
        useTabs: false,
    });
};

run();
