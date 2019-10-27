module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propWhiteList: [],
      replace: true,
      minPixelValue: 2
    }
  }
};
