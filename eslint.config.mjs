import globals from 'globals'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended })

export default [
  ...compat.extends('standard-with-typescript'),
  ...compat.extends('plugin:prettier/recommended'),
  { 
    languageOptions: { globals: globals.browser },  
    files: ["src/**/*.{ts,tsx}"],
    ignores:["src/**/*.spec.tsx"],
    rules:{
      "@typescript-eslint/strict-boolean-expressions": "off"
    }
  },
  pluginReactConfig,
]
