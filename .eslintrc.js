const OFF = 0,
  WARN = 1,
  ERROR = 2;

module.exports = {
  extends: ['prettier', 'airbnb'],
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'react/jsx-filename-extension': [
      WARN,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-indent': [OFF],
    'react/forbid-prop-types': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', '.'], ['@', './src'], ['@Common', './src/components/Common']],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  globals: {
    document: true,
    document: true,
    window: true,
  },
};
