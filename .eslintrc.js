module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json'],
    },
    plugins: [
        'react',
        'i18next',
        'react-hooks',
        'prettier',
        'fsd-imports-plugin',
        'unused-imports',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'n/handle-callback-err': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        'space-before-function-paren': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        'n/no-callback-literal': 'off',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'no-useless-return': 'off',
        'unused-imports/no-unused-imports': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
            },
        ],
        'fsd-imports-plugin/absolute-relative-imports-checker': ['error', { alias: '@' }],
        'fsd-imports-plugin/public-api-imports': ['error', { alias: '@' }],
        'fsd-imports-plugin/layer-imports': [
            'error',
            { alias: '@', ignoreImportPatterns: ['**/StoreProvider'] },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API_BASE_URL__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
