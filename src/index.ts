import { InformativeDocsOptions } from "./types.js";

export * from "./types.js";

const defaultAliases: Record<string, string[]> = {
	a: ["an", "our"],
};

const defaultUselessWords = ["a", "an", "i", "in", "of", "s", "the"];

/**
 * @param docs Any amount of docs text, such as from a JSDoc description.
 * @param name Name of the entity the docs text is describing.
 * @param options Additional options to customize informativity checking.
 * @returns Whether the docs include at least one word with new information.
 * @example
 * ```js
 * areDocsInformative("The user id.", "userId"); // false
 * ```
 * @example
 * ```js
 * areDocsInformative("Retrieved user id.", "userId"); // true
 * ```
 */
export function areDocsInformative(
	docs: string | string[],
	name: string | string[],
	options: InformativeDocsOptions = {},
) {
	const { aliases = defaultAliases, uselessWords = defaultUselessWords } =
		options;
	const docsWords = new Set(splitTextIntoWords(docs));
	const nameWords = splitTextIntoWords(name);

	for (const nameWord of nameWords) {
		docsWords.delete(nameWord);
	}

	for (const uselessWord of uselessWords) {
		docsWords.delete(uselessWord);
	}

	return !!docsWords.size;

	function normalizeWord(word: string) {
		const wordLower = word.toLowerCase();

		return aliases[wordLower] ?? wordLower;
	}

	function splitTextIntoWords(text: string | string[]) {
		return (typeof text === "string" ? [text] : text)
			.flatMap((name) => {
				return name
					.replace(/\W+/gu, " ")
					.replace(/([a-z])([A-Z])/gu, "$1 $2")
					.trim()
					.split(" ");
			})
			.flatMap(normalizeWord)
			.filter(Boolean);
	}
}
