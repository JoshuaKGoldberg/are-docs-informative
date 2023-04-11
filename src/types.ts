export interface InformativeDocsOptions {
	/**
	 * Words that can be considered synonyms (aliases) of each other.
	 *
	 * @default
	 * ```json
	 * {
	 *   "a": ["an", "our"]
	 * }
	 * ```
	 *
	 * @example
	 * With `{ aliases: { emoji: ["smiley", "winkey"] } }`,
	 * the following comment would be considered uninformative:
	 * ```js
	 * /** Default smiley/winkey. *\/
	 * export const defaultSmiley = "🙂";
	 * ```
	 */
	aliases?: Record<string, string[]>;

	/**
	 * Words that are ignored when searching for one that adds meaning.
	 *
	 * @default
	 * ```json
	 * ["a", "an", "i", "in", "of", "s", "the"]
	 * ```
	 *
	 * @example
	 * With `{ uselessWords: ["our"] }`, the following comment would
	 * be considered uninformative:
	 * ```js
	 * /** Our text. *\/
	 * export const text = ":)";
	 * ```
	 */
	existingName?: string | string[];
	uselessWords?: string[];
}
