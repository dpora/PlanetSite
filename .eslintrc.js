module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/no-unknown-property': [
      'error',
      {
        ignore: [
          // React Three Fiber properties
          'attach',
          'args',
          'position',
          'rotation',
          'scale',
          'intensity',
          'color',
          'wireframe',
          'material',
          'geometry',
          'object',
          'dispose',
          'userData',
          'colliders',
          'type',
          'makeDefault',
          'maxDistance',
          'minDistance',
          'far',
          'luminanceThreshold',
          'luminanceSmoothing',
          'height',
          'gravity'
        ]
      }
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}