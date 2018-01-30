module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:jest/recommended'],
    parserOptions: {
        ecmaVersion: 8, // async-await
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
    },
};
