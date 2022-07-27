module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeature: {
      impliedStrict: false,
    },
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  env: {
    node: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  rules: {
    'prefer-promise-reject-errors': 'off',
    'prefer-spread': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'func-names': 'off',
    'no-multi-spaces': 'off',
    'spaced-comment': ['error', 'always', {
      markers: ['/'],
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'padded-blocks': 'off',
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    indent: ['error', 2],
    'max-len': ['error', 141, 2, {
      ignoreComments: true,
    }],
    'no-unused-vars': ['error', {
      vars: 'local',
      args: 'after-used',
    }],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1,
    }],
    'no-nested-ternary': 'off',
    'no-underscore-dangle': ['error', {
      allow: ['_super', '_lookupFactory', '_id'],
    }],
    'object-shorthand': ['error', 'methods'],
    'arrow-parens': ['error', 'as-needed'],
  },
};
