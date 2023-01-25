module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json'],
    },
    plugins: ['react', 'i18next', 'react-hooks'],
    rules: {
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'react/react-in-jsx-scope': 'off',
        semi: [2, 'always'],
        '@typescript-eslint/semi': [2, 'always'],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: false,
            },
            multilineDetection: 'brackets',
        }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
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
    },
    globals: {
        __IS_DEV__: true,
        __API_BASE_URL__: true,
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
