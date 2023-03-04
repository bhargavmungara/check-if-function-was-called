<div align="center">
 <h1>eslint-plugin-bhargavmungara</h1>

 <p>Custom rules for Bhargav</p>
</div>

## Installation

This module is distributed via [npm](https://www.npmjs.com) which is bundled with [node](https://nodejs.org/en/) and should be installed as one of your project's `devDependencies`:

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-bhargavmungara`:

```sh
npm install eslint-plugin-bhargavmungara --save-dev
```

## Usage

Add `bhargavmungara` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["bhargavmungara"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "bhargavmungara/rule-name": 2
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

In the rules, change the rule-name to check-function-was-called

```json
{
  "rules": {
    "bhargavmungara/check-function-was-called": 2
  }
}
```

## Docs

- [`bhargavmungara/check-function-was-called`](docs/rules/check-function-was-called.md)

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.
