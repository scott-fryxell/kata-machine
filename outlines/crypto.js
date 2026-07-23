/**
 * @typedef {Object} sha_family
 * @description A cryptographic hash function: a one-way function that
 * turns an arbitrary-length message into a fixed-length digest. The same
 * input always produces the same digest, a tiny change in input produces a
 * wildly different digest (avalanche effect), and going from digest back to
 * message is (believed to be) computationally infeasible.
 *
 * ### Common uses
 * - Verifying file/message integrity (does this download match what was
 *   published?)
 * - Storing password hashes (never the password itself)
 * - Git commit ids, blockchain block hashes
 */

/**
 * @param {string} message
 * @returns {Promise<string>} the SHA-256 digest of the message, as lowercase hex
 */
export const sha256 = async (message) => {
  console.log(message)
  return ''
}

/**
 * @typedef {Object} diffie_hellman
 * @description Lets two parties agree on a shared secret over a public
 * channel without ever transmitting the secret itself - only public values
 * are exchanged, so an eavesdropper who sees all the traffic still can't
 * (efficiently) recover the shared secret.
 *
 * ### How it works
 * - Both parties agree on a public prime `p` and base `g`
 * - Each party picks a private random exponent (a, b) and never shares it
 * - Each computes and sends a public value: A = g^a mod p, B = g^b mod p
 * - Each combines the *other* party's public value with their own private
 *   exponent: shared = B^a mod p = A^b mod p = g^(ab) mod p
 * - Both sides land on the same shared secret despite never sending a or b
 */

/**
 * Computes the public value to broadcast for a given private exponent.
 * @param {number} prime
 * @param {number} base
 * @param {number} private_key
 * @returns {number}
 */
export const diffie_hellman_public_value = (prime, base, private_key) => {
  console.log(prime, base, private_key)
  return 0
}

/**
 * Combines the other party's public value with this party's own private
 * key to derive the shared secret.
 * @param {number} prime
 * @param {number} their_public_value
 * @param {number} private_key
 * @returns {number}
 */
export const diffie_hellman_shared_secret = (
  prime,
  their_public_value,
  private_key,
) => {
  console.log(prime, their_public_value, private_key)
  return 0
}
