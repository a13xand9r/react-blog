const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
    const componentName = firstCharUpperCase(sliceName);
    const schemaName = `${sliceName}Schema`;

    try {
        await fs.writeFile(
            resolveRoot('src', layer, sliceName, 'index.ts'),
            `import { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';
import { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${firstCharUpperCase(schemaName)}, ${componentName} };
`
        );
    } catch (e) {
        console.log('Не удалось создать PUBLIC API');
    }
};