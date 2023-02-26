/**
 * @fileoverview This helps you to check if the function defined was called or not
 * @author bhargav
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/check-function-was-called"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("check-function-was-called", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "function add(){return 1;}",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
