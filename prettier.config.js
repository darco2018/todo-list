/** @format */
// dont pass options to Prettier via your ESLint configuration file - VS can't read it then
module.exports = {
  insertPragma: false, // not working with eslint-loader
  quoteProps: "consistent",

  // tabWidth: 4  >> change for testing purposes
};
