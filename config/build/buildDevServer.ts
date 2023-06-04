import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    return {
        port: options.port,
        open: true,
        hot: true,
        // проксирование через index.html для react-router-dom
        historyApiFallback: true,
    };
};
