import path from 'path';

import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*{.ts,.tsx}');

const files = project.getSourceFiles();

const layers = ['shared', 'entities', 'features', 'widgets', 'pages', 'app'];

const isAbsoluteImport = (value: string) => layers.some((layer) => value.startsWith(layer));

const uiDirPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiDirPath);
const uiComponentsDir = sharedUiDirectory?.getDirectories();

uiComponentsDir?.forEach((directory) => {
    const indexFilePath = directory.getPath() + '/index.ts';
    const indexFile = directory.getSourceFile(indexFilePath);

    if (indexFile) {
        return;
    }

    const newFileSource = `export * from './${directory.getBaseName()}'`;
    const newFile = directory.createSourceFile(indexFilePath, newFileSource, { overwrite: true });

    newFile.save();
});

files.forEach((file) => {
    const importDeclarations = file.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const importValue = importDeclaration.getModuleSpecifierValue();
        const importValueWithoutAlias = importValue.replace('@/', '');

        const isSharedLayerImport = importValueWithoutAlias.split('/')[0] === 'shared';
        const isUiSliceImport = importValueWithoutAlias.split('/')[1] === 'ui';

        if (isAbsoluteImport(importValueWithoutAlias) && isSharedLayerImport && isUiSliceImport) {
            const resultImportValue = importValueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${resultImportValue}`);
        }
    });
});

project.save();
