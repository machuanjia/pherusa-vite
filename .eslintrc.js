/*
 * @Author: D.Y
 * @Date: 2021-08-06 19:09:56
 * @LastEditTime: 2021-08-06 19:12:20
 * @LastEditors: D.Y
 * @FilePath: /pherusa-vite/.eslintrc.js
 * @Description: 
 */
module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],

    // in antd-design-pro
    globals: {
        ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
        page: true,
    },

    rules: {
        // your rules
        'new-cap': ['error', { newIsCap: false }],
        'no-underscore-dangle': ['error', { allow: ['_id', '_viewport'] }],
        'no-console': 0,
        'no-underscore-dangle': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-shadow': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-continue': 0,
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', ['parent', 'sibling'], 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ]
    },
};