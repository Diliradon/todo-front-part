import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { files: ['**/*.{js,jsx}'] },
  { ignores: ['dist/**'] },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  js.configs.recommended,
  reactPlugin.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'prettier/prettier': 'error',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
