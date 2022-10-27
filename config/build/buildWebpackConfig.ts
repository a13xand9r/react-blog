import { buildDevServer } from './buildDevServer';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/config';
import { buildResolvers } from './buildResolvers';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { isDev, mode, paths } = options;

    return {
        mode: mode,
        entry: paths.entry,
        devtool: isDev ? 'inline-source-map' : false,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        devServer: buildDevServer(options),
        plugins: buildPlugins(paths, isDev),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
    }
}