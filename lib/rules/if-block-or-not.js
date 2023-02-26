/* eslint-disable eslint-plugin/prefer-message-ids */
/**
 * @fileoverview This rule helps if the if block is having a block or not
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
      description: "This rule helps if the if block is having a block or not",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      IfStatement(node) {
        if (isBlock(node.consequent) && isBlock(node.alternate)) {
          return;
        }

        if (!isBlock(node.consequent)) {
          context.report({
            node: node.consequent,
            message: "block is missing",
            fix: function (fixer) {
              return [
                fixer.insertTextAfterRange(
                  [node.test.start, node.test.end + 1],
                  "{"
                ),
                fixer.insertTextAfter(node.consequent, "\n}"),
              ];
            },
          });
        } else if (!isBlock(node.alternate)) {
          context.report({
            node: node.alternate,
            message: "block is missing",
            fix: function (fixer) {
              return [
                fixer.insertTextAfterRange(
                  [node.alternate.start, node.alternate.range[0] - 4],
                  "{"
                ),
                fixer.insertTextAfter(node.alternate, "\n}"),
              ];
            },
          });
        }
      },
    };
  },
};

function isBlock(node) {
  return !node || node.type === "BlockStatement";
}
