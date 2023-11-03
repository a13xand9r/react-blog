import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/config';
import { buildResolvers } from './buildResolvers';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { isDev, mode, paths, apiBaseUrl } = options;

    return {
        mode,
        entry: paths.entry,
        devtool: isDev ? 'eval-cheap-module-source-map' : false,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
            publicPath: '/',
        },
        devServer: buildDevServer(options),
        plugins: buildPlugins(paths, isDev, apiBaseUrl),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
    };
};
