import { describe, expect, test } from "vitest";

import { InformativeDocsOptions, areDocsInformative } from "./index.js";

describe("areDocsInformative", () => {
	test.each([
		["", "", false, undefined],
		[[""], "", false, {}],
		[["", "  "], "", false, {}],
		["word", "", true, {}],
		["word", "word", false, {}],
		["word", ["word"], false, {}],
		["abc def", "abc", true, {}],
		["abc def", "abc, def", false, {}],
		["abc def", ["abc", "def"], false, {}],
		[["abc", "def"], ["abc", "def"], false, {}],
		[["word"], ["word"], false, {}],
		["   word  \n", ["word"], false, {}],
		["abc def", "abc", false, { aliases: { abc: ["def"] } }],
		["abc def", "abc", true, { aliases: { abc: ["ghi"] } }],
		["abc def", "abc", false, { uselessWords: ["def"] }],
		["abc def ghi", "abc", true, { uselessWords: ["def"] }],
		[
			"abc def ghi",
			"abc",
			false,
			{ aliases: { abc: ["ghi"] }, uselessWords: ["def"] },
		],
		[
			"abc def ghi jkl",
			"abc",
			true,
			{ aliases: { abc: ["ghi"] }, uselessWords: ["def"] },
		],
	] satisfies [
		string | string[],
		string | string[],
		boolean,
		InformativeDocsOptions | undefined,
	][])("'%s' returns %s with options %j", (docs, name, expected, options) => {
		const actual = areDocsInformative(docs, name, options);

		expect(actual).toBe(expected);
	});
});
