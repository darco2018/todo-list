module.exports = {
  "extends": [  "airbnb",
  "plugin:prettier/recommended",
  "prettier/react",
  "plugin:import/errors", 
  "plugin:import/warnings"],  

  "parserOptions": {
    // ecma 6 ( 2015 ) is the default
    // just adds support for ecmaVersion 2018 syntax
    "ecmaVersion": 2018,
    // Can I remove these now?
    "ecmaFeatures": {
      "impliedStrict": true // enable global strict mode
    },
    "sourceType": "module" //  if your code is in ECMAScript modules.  "script" (default)
  },
  "env": {
    "browser": true, // browser global variables.
    "es6": true, // this automatically sets the ecmaVersion parser option to 6
    "node": true, //  Node.js global variables and Node.js scoping
    "jquery": true, //  jQuery global variables.
    "mocha": true //  adds all of the Mocha testing global variables.
  },
  "rules": {
    // 1 - "warn", 0 -"off" , 2 "error"
    /* "no-debugger": 0, 
    "no-alert": 0,
    "no-console": 0,
    "no-plusplus": 0,
    "no-unused-vars": 0 */
    /* "prefer-template": 0,
    "max-len": 0,
    "padded-blocks": 0,
    "no-trailing-spaces": 0,
    "no-multiple-empty-lines": 0,    */
  },
  "plugins": [
      "mocha",
      "html",
      "prettier",
      "react-hooks"
    ]
}
