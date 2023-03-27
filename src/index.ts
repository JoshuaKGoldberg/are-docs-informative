import { InformativeDocsOptions } from "./types.js";

export * from "./types.js";

const defaultAliases: Record<string, string[]> = {
	a: ["an", "our"],
};

const defaultUselessWords = ["a", "an", "i", "in", "of", "s", "the"];

export function areDocsInformative(
	docs: string | string[],
	name: string | string[],
	{
		aliases = defaultAliases,
		uselessWords = defaultUselessWords,
	}: InformativeDocsOptions = {}
) {
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

		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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
