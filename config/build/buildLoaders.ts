import webpack from 'webpack';

import { getBabelLoader } from '../loaders/babelLoader';

import { getSvgLoader } from './../loaders/svgLoader';
import { getScssLoader } from './../loaders/scssLoader';
import { BuildOptions } from './types/config';

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

    const babelLoader = getBabelLoader(options);
    const tsxBabelLoader = getBabelLoader({ ...options, isTSX: true });

    return [
        fileLoader,
        svgLoader,
        scssLoader,
        babelLoader,
        tsxBabelLoader,
    ];
};
