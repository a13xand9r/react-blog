export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    html: string;
    build: string;
    src: string;
};

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    apiBaseUrl: string;
    port: number;
};

export interface EnvVariables {
    MODE?: BuildMode;
    PORT?: number;
    API_BASE_URL?: string;
}
