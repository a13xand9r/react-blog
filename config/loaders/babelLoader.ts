import removePropsBabelPlugin from '../babelPlugins/removePropsBabelPlugin';

import { BuildOptions } from './../build/types/config';

interface GetBabelLoaderParams extends BuildOptions {
    isTSX?: boolean;
}

export const getBabelLoader = ({ isDev, isTSX }: GetBabelLoaderParams) => {
    return {
        test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTSX,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    isDev && require.resolve('react-refresh/babel'),
                    !isDev &&
                        isTSX && [
                            removePropsBabelPlugin(),
                            {
                                props: ['data-testid'],
                            },
                        ],
                ],
            },
        },
    };
};
