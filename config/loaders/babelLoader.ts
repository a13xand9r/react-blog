import { BuildOptions } from './../build/types/config';

export const getBabelLoader = ({isDev}: BuildOptions) => {
    return {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
        },
    };
};
