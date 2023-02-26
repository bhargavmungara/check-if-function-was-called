# eslint-plugin-bhargavmungara

custom rules for bhargav

## Installation

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
