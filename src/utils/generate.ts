import chalk from 'chalk';

type Json = Record<string, any>;

type Item = Json & {
    id: string;
};

export const generateMany = <T extends Item>(
    count: number,
    generateOne: (index: number) => T
) => {
    process.stdout.write(
        chalk.cyan(`Generating ${chalk.magenta(count)} items... `)
    );
    const items: Record<string, any> = {};

    [...new Array(count)].map((_i, index) => {
        const item = generateOne(index);
        items[item.id] = item;
    });

    console.log(chalk.green('done'));

    return items;
};
