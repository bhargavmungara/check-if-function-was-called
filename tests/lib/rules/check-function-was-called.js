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
    {
      code: "function add(){return 1;} add()",
    },
  ],

  invalid: [
    {
      code: "function add(){return 1;}",
      errors: [{ message: `function was declared but never called` }],
    },
  ],
});
