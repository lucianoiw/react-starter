const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
];

const plugins = [
  // [
  //   'babel-plugin-styled-components',
  //   {
  //     displayName: process.env.NODE_ENV === 'development',
  //   },
  // ],
  // [
  //   '@babel/plugin-proposal-class-properties',
  //   {
  //     loose: true,
  //   },
  // ],
  // '@babel/plugin-transform-runtime',
  '@babel/plugin-syntax-dynamic-import',
  'react-loadable/babel',
];

module.exports = {
  presets,
  plugins,
};
