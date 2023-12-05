module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'airbnb-base',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'import/extensions': 'off',
        'no-undef': 'off',
        'no-underscore-dangle': 'off',
        'no-new': 'off',
        'import/no-unresolved': 'off'
    }
};
