import removePropsBabelPlugin from '../babelPlugins/removePropsBabelPlugin';

import { BuildOptions } from './../build/types/config';

interface GetBabelLoaderParams extends BuildOptions {
    isTSX?: boolean;
}

export const getBabelLoader = ({ isDev, isTSX }: GetBabelLoaderParams) => {
    const plugins: unknown[] = [
        [
            '@babel/plugin-transform-typescript',
            {
                isTSX,
            },
        ],
        '@babel/plugin-transform-runtime',
    ];

    if (isDev) {
        plugins.push(require.resolve('react-refresh/babel'));
    }
    if (!isDev && isTSX) {
        plugins.push([
            removePropsBabelPlugin(),
            {
                props: ['data-testid'],
            },
        ]);
    }

    return {
        test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins,
            },
        },
    };
};
