/* eslint-disable @typescript-eslint/no-unsafe-argument */

import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

import love from 'eslint-config-love'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['node_modules', 'public', '.netlify', '.cache'] },
  { files: ['src/**/*.ts', 'src/**/*.tsx', 'eslint.config.mjs'] },
  { settings: { react: { version: 'detect' } } },
  jsxA11y.flatConfigs.recommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  love,
  {
    plugins: { 'react-hooks': reactHooks },
    rules: reactHooks.configs.recommended.rules
  }
)
