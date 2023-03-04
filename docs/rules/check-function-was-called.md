# This helps you to check if the function declared was called or not (`check-function-was-called`)

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
function add(a, b) {
  return a + b;
}

function init() {
  document.querySelector(".buttons").addEventListener("click", function (e) {
    console.log(e.target.textContent);
  });
}
```

Examples of **correct** code for this rule:

```js
function add(a, b) {
  return a + b;
}

add();

function init() {
  document.querySelector(".buttons").addEventListener("click", function (e) {
    console.log(e.target.textContent);
  });
}

init();
```

## When Not To Use It

When you have no functions declared within your program.
