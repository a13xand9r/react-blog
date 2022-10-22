export type BuildMode = 'production' | 'development'

export type BuildPaths = {
    entry: string;
    html: string;
    build: string;
}

export type BuildOptions = {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number,
}

export type EnvVariables = {
    MODE?: BuildMode,
    PORT?: number,
}