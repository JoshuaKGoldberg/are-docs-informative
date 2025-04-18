<h1 align="center">Are Docs Informative</h1>

<p align="center">
	Checks whether a documentation description introduces any new information.
	ℹ️
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 1" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-1-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/are-docs-informative/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/are-docs-informative" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/are-docs-informative?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/are-docs-informative/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/are-docs-informative" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/are-docs-informative?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

> See this in action in [`jsdoc/informative-docs`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md)!

```shell
npm i are-docs-informative
```

```ts
import { areDocsInformative } from "are-docs-informative";

areDocsInformative("The user id.", "userId"); // false
areDocsInformative("Retrieved user id.", "userId"); // true
```

### Options

The `areDocsInformative` function can receive a third, optional object parameter.
It can contain any of the following properties.

#### `aliases`

The `aliases` option allows indicating words as synonyms (aliases) of each other.

For example, with `{ aliases: { emoji: ["smiley", "winkey"] } }`, the following comment would be considered uninformative:

```ts
/** Default smiley/winkey. */
export const defaultSmiley = "🙂";
```

The default `aliases` option is:

```json
{
	"a": ["an", "our"]
}
```

#### `uselessWords`

Words that are ignored when searching for one that adds meaning.

For example, with `{ uselessWords: ["our"] }`, the following comment would be considered uninformative:

```ts
/** Our text. */
export const text = ":)";
```

The default `uselessWords` option is:

```json
["a", "an", "i", "in", "of", "s", "the"]
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! ℹ

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a> <a href="https://github.com/JoshuaKGoldberg/are-docs-informative/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/JoshuaKGoldberg/are-docs-informative/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo engine](https://create.bingo).
