import { format } from 'prettier';
import * as fs from 'fs';
import chalk from 'chalk';

export const formatCode = (code: string) => {
    return format(code, {
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

export const writeCode = (path: string, code: string) => {
    fs.writeFileSync(path, formatCode(code));
};

export const writeData = (variableName: string, json: Json, path: string) => {
    process.stdout.write(
        chalk.cyan(`Writing data to ${chalk.yellow(path)}... `)
    );
    const code = formatCode(
        `export const ${variableName} = ` + JSON.stringify(json, null, 4)
    );

    writeCode(path, code);
    console.log(chalk.green('done'));
};
