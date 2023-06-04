import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],

        // поля ниже для абсолютных импортов
        preferAbsolute: true,
        modules: ['node_modules', options.paths.src],
        mainFiles: ['index'],
        alias: {},
    };
};
