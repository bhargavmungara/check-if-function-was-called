/**
 * @fileoverview This rules helps for finding if statement has block
 * @author bhargav
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/if-block"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("if-block", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "if(e) console.log(2)",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
