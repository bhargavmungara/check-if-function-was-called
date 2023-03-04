/* eslint-disable eslint-plugin/prefer-message-ids */
/**
 * @fileoverview This helps you to check if the function defined was called or not
 * @author bhargav
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    // eslint-disable-next-line eslint-plugin/require-meta-type
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description:
        "This helps you to check if the function declared was called or not",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    let functionUsages = [];
    let functionUsagesNodes = [];
    let everyNodes = [];

    let ca = [];

    return {
      FunctionDeclaration(node) {
        functionUsagesNodes.push(node);
        functionUsages.push(node.id.name);
      },

      CallExpression(node) {
        ca.push(node.callee.name);
      },
      Program(node) {
        everyNodes.push(node.body);
      },

      "Program:exit"() {
        everyNodes[0].forEach((node) => {
          if (
            looksLike(node, {
              expression: {
                type: "CallExpression",
                callee: {
                  type: "Identifier",
                  name: (val) => functionUsages.includes(val),
                },
              },
            })
          ) {
            return;
          } else {
            if (
              looksLike(node, {
                type: "FunctionDeclaration",
                id: {
                  type: "Identifier",
                },
              })
            ) {
              if (!ca.includes(node.id.name)) {
                context.report({
                  node: node.id,
                  message: "function was declared but never called",
                });
              }
            }
          }
        });
      },
    };
  },
};

function looksLike(a, b) {
  return (
    a &&
    b &&
    Object.keys(b).every((bKey) => {
      const bVal = b[bKey];
      const aVal = a[bKey];
      if (typeof bVal === "function") {
        return bVal(aVal);
      }
      return isPrimitive(bVal) ? bVal === aVal : looksLike(aVal, bVal);
    })
  );
}

function isPrimitive(val) {
  return val == null || /^[sbn]/.test(typeof val);
}
