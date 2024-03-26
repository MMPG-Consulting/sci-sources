import Books from "../interfaces/Books";
import BooksPart from "../interfaces/BooksParts";
import ConferencePapers from "../interfaces/ConferencePapers";
import ConferenceProceedings from "../interfaces/ConferenceProceedings";
import JournalArticles from "../interfaces/JournalArticles";
import Websites from "../interfaces/Websites";
import { genKey } from "../utils";

/**
 * Get a scientific book source citation.
 *
 * @remarks
 * This method returns a citation according to the format highlighted in the
 * following webpage: https://library.bu.edu/csestyle
 *
 * @param source - The book source to format.
 * @param key - The key of the source in the list.
 * @returns The formatted citation string.
 */
export function formatBookSource(source: Books, key?: number) {
  const keyString = genKey(key);
  return `${keyString}${source.author}. ${source.year}. ${source.title}. ${source.edition} ${source.placePublication}: ${source.publisher}. ${source.pages}`;
}

/**
 * Get a scientific book part source citation.
 *
 * @remarks
 * This method returns a citation according to the format highlighted in the
 * following webpage: https://library.bu.edu/csestyle
 *
 * @param source - The book part source to format.
 * @param key - The key of the source in the list.
 * @returns The formatted citation string.
 */
export function formatBookPartSource(source: BooksPart, key?: number) {
  const keyString = genKey(key);
  return `${keyString}${source.author}. ${source.year}. ${source.title}. ${source.in.edition} ${source.in.placePublication}: ${source.publisher}. ${source.pages}`;
}

/**
 * Get a scientific conference papers source citation.
 *
 * @remarks
 * This method returns a citation according to the format highlighted in the
 * following webpage: https://library.bu.edu/csestyle
 *
 * @param source - The conference papers source to format.
 * @param key - The key of the source in the list.
 * @returns The formatted citation string.
 */
export function formatConferencePapersSource(
  source: ConferencePapers,
  key?: number
) {
  const keyString = genKey(key);
  return `${keyString}${source.author}. ${source.date}. ${source.title}. In: ${source.connectivePhrase}, editor. ${source.nameConference}; ${source.datesConference}; ${source.placeConference}. ${source.placePublication}: ${source.publisher}. ${source.pages}`;
}

/**
 * Get a scientific conference proceedings source citation.
 *
 * @remarks
 * This method returns a citation according to the format highlighted in the
 * following webpage: https://library.bu.edu/csestyle
 *
 * @param source - The conference proceedings source to format.
 * @param key - The key of the source in the list.
 * @returns The formatted citation string.
 */
export function formatConferenceproceedingsSource(
  source: ConferenceProceedings,
  key?: number
) {
  const keyString = genKey(key);
  return `${keyString}${source.editor}, editor. ${source.year}. ${source.title}. ${source.nameConference}; ${source.datesConference}; ${source.placeConference}. ${source.placePublication}: ${source.publisher}. ${source.pages}`;
}

/**
 * Get a scientific journal article source citation.
 *
 * @remarks
 * This method returns a citation according to the format highlighted in the
 * following webpage: https://library.bu.edu/csestyle
 *
 * @param source - The journal article source to format.
 * @param key - The key of the source in the list.
 * @returns The formatted citation string.
 */
export function formatJournalArticleSource(
  source: JournalArticles,
  key?: number
) {
  const keyString = genKey(key);
  const urlString = source.url
    ? ` {${source.url}}. Accessed ${source.dateAccessed}.`
    : "";
  return `${keyString}${source.author} (${source.date}). ${source.titleArticle}. ${source.titleJournal}. ${source.volumeIssueNumber}: ${source.pages}.${urlString}`;
}

/**
 * Get a scientific web source citation.
 *
 * @remarks
 * This method returns a citation according to the format highlighted in the
 * following webpage: https://library.bu.edu/csestyle
 *
 * @param source - The web source to format.
 * @param key - The key of the source in the list.
 * @returns The formatted citation string.
 */
export function formatWebSource(source: Websites, key?: number) {
  const keyString = genKey(key);
  const urlString = source.url ? ` Available from ${source.url}.` : "";
  return `${keyString}${source.author} [${source.availableFrom}]. ${source.placePublication}: ${source.publisher}; [${source.year}].${urlString}`;
}
