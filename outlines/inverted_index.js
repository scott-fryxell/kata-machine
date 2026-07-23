/**
 * @typedef {Object} inverted_index
 * @description Maps each term to the list of documents (or locations) it
 * appears in - the reverse of a forward index (doc -> terms). This is the
 * core data structure behind full text search.
 *
 * ### How it works
 * - Tokenize each document into terms
 * - For each term, append the document id (and optionally its positions)
 *   to that term's postings list
 * - A query looks up each term's postings list and intersects/unions them
 *
 * ### Common uses
 * - Full text search (term -> location lookups)
 * - Search engines, log search, autocomplete
 */

/**
 * @typedef {Object} Posting
 * @property {number} doc_id
 * @property {number[]} positions
 */

export const Inverted_Index = class {
  constructor() {
    /** @type {Map<string, Posting[]>} */
    this.index = new Map()
  }

  /**
   * Tokenizes and indexes a document.
   * @param {number} doc_id
   * @param {string} text
   * @returns {void}
   */
  add_document(doc_id, text) {
    console.log(doc_id, text)
  }

  /**
   * Returns the doc ids containing every term in the query.
   * @param {string} query
   * @returns {number[]}
   */
  search(query) {
    console.log(query)
    return []
  }
}
