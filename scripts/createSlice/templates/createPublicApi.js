const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName, isJustUI) => {
    const componentName = firstCharUpperCase(sliceName);
    const schemaName = `${sliceName}Schema`;

    const modelImport = isJustUI
        ? ''
        : `import { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';\n`;

    const modelExport = isJustUI ? '' : `${firstCharUpperCase(schemaName)}, `;

    try {
        await fs.writeFile(
            resolveRoot('src', layer, sliceName, 'index.ts'),
            `${modelImport}import { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${modelExport}${componentName} };
`
        );
    } catch (e) {
        console.log('Не удалось создать PUBLIC API');
    }
};
