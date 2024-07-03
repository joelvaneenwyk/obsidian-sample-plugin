// @ts-check

import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['**/node_modules/']
  },
  js.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier: eslintPluginPrettier
    },
    languageOptions: {
      globals: {
        ...globals.node
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none'
        }
      ],

      '@typescript-eslint/ban-ts-comment': 'off',
      'no-prototype-builtins': 'off',
      '@typescript-eslint/no-empty-function': 'off',

      'prettier/prettier': 'error'
    }
  },
  {
    files: ['dist/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      ecmaVersion: 5,
      sourceType: 'module'
    }
  },
  eslintConfigPrettier
];
