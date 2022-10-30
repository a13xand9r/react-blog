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
    port: number;
};

export interface EnvVariables {
    MODE?: BuildMode;
    PORT?: number;
}
