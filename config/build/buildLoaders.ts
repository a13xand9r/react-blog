import { getSvgLoader } from './../loaders/svgLoader';
import { getScssLoader } from './../loaders/scssLoader';
import { BuildOptions } from './types/config';
import webpack from 'webpack';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const svgLoader = getSvgLoader();
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const scssLoader = getScssLoader(options.isDev);

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    return [
        fileLoader,
        svgLoader,
        scssLoader,
        babelLoader,
        tsLoader,
    ];
};
