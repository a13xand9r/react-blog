import { BuildPaths } from './types/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = ({ html }: BuildPaths, isDev: boolean): webpack.WebpackPluginInstance[] => ([
    new HtmlWebpackPlugin({
        template: html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
        '__IS_DEV__': isDev
    }),
])