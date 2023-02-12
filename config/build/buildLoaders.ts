import { getSvgLoader } from './../loaders/svgLoader';
import { getScssLoader } from './../loaders/scssLoader';
import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { getBabelLoader } from '../loaders/babelLoader';

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
        use: [
            {
                loader: 'ts-loader',
                options: {
                    // чтоб ошибки тайпскрипта не фейлили полностью сборку
                    // transpileOnly: options.isDev,
                },
            },
        ],
        exclude: /node_modules/,
    };

    const babelLoader = getBabelLoader(options);

    return [
        fileLoader,
        svgLoader,
        scssLoader,
        babelLoader,
        tsLoader,
    ];
};
