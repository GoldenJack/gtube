console.log('babel.config.js: ✓');
module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/syntax-dynamic-import',
    '@babel/plugin-transform-runtime'
  ]
};
