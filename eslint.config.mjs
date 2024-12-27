import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   // import.meta.dirname is available after Node.js v20.11.0
//   baseDirectory: import.meta.dirname,
// });
// const eslintConfig = [
//   ...compat.config({
//     extends: ['next/core-web-vitals', 'next/typescript'],
//     rules: {
//       'react/no-unescaped-entities': 'off',
//       '@next/next/no-page-custom-font': 'off',
//       '@typescript-eslint/ban-ts-comment': [
//         'error',
//         {
//           'ts-ignore': false, // Разрешить использование @ts-ignore
//         },
//       ],
//     },
//   }),
// ];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Исправление: используем __dirname вместо import.meta.dirname
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': false, // Запретить использование @ts-ignore
        },
      ],
    },
  }),
];

export default eslintConfig;
