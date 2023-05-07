import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { EnvVariables } from './config/build/types/config';

const getConfig = (env: EnvVariables) => {
    const mode = env.MODE ?? 'development';

    return buildWebpackConfig({
        mode,
        apiBaseUrl: env.API_BASE_URL ?? 'http://localhost:8000',
        isDev: mode === 'development',
        paths: {
            build: path.resolve(__dirname, 'build'),
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
            locales: path.resolve(__dirname, 'public', 'locales'),
            buildLocales: path.resolve(__dirname, 'build', 'locales'),
        },
        port: env.PORT ?? 3000,
    });
};

export default getConfig;
