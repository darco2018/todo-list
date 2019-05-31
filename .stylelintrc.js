
  module.exports = {
    "extends": "stylelint-config-recommended",
    "rules": { "at-rule-no-unknown": [ true, {
      ignoreAtRules: ['extend', 'at-root', 'debug', 'warn', 'error', 'if', 'else', 
      'for', 'each', 'while', 'mixin', 'include', 'content', 'return', 'function', 'return']
    }]}
   
   /*  "rules": {
      "indentation": "tab", << overwrite rule
      "number-leading-zero": null  << turn off rule
    } */
  };