module.exports = {
  plugins: ['import', 'unused-imports'],
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  env: {
    browser: true,
  },
  rules: {
    // Basic
    curly: ['error', 'multi-line'],
    eqeqeq: 'error',
    'no-eq-null': 'error',
    'no-nested-ternary': 'error',
    'no-console': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-param-reassign': 'warn',

    // Style
    'max-len': [
      'error',
      {
        // hard limit for line length. preferred line length is controlled by
        // prettier. this is only for cases when prettier cannot reformat
        // code to preferred length
        code: 160,
        // prettier does not control line length in comments, so enforce it
        // with eslint
        comments: 100,
        // urls in comments cannot be wrapped, so we need to ignore them
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'prefer-template': 'error',
    'key-spacing': 'error',
    'eol-last': ['error', 'always'],

    // Imports
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'no-duplicate-imports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'class-methods-use-this': 'off',
    'consistent-return': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
  },
};
