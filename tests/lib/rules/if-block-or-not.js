/**
 * @fileoverview This rule helps if the if block is having a block or not
 * @author bhargav
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/if-block-or-not"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("if-block-or-not", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "if(2) console.log('2')",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
