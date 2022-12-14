import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    return {
        port: options.port,
        open: true,
        hot: true,
        // проксирование через index.html для react-router-dom
        historyApiFallback: true,
    };
};
