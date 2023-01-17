import { getSvgLoader } from './../loaders/svgLoader';
import { getScssLoader } from '../loaders/scssLoader';
import path from 'path';
import webpack, { DefinePlugin } from 'webpack';

module.exports = async ({ config }: { config: webpack.Configuration }) => {
    const srcFolderPath = path.resolve(__dirname, '..', '..', 'src');
    config.resolve?.modules?.push(srcFolderPath);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module?.rules?.push(getScssLoader(true));

    // Отключаем дефолтный лоадер svg
    config.module.rules = config.module.rules.map(rule => {
        if (typeof rule !== 'string' && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push(getSvgLoader());

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
        __API_BASE_URL__: '',
    }));

    return config;
};
