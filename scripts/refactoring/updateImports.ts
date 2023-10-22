import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*{.ts,.tsx}');

const files = project.getSourceFiles();

const layers = ['shared', 'entities', 'features', 'widgets', 'pages', 'app'];

const isAbsoluteImport = (value: string) => layers.some((layer) => value.startsWith(layer));

files.forEach((file) => {
    const importDeclarations = file.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const importValue = importDeclaration.getModuleSpecifierValue();

        if (isAbsoluteImport(importValue)) {
            importDeclaration.setModuleSpecifier(`@/${importValue}`);
        }
    });
});

project.save();
