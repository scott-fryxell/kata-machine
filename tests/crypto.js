import {
  diffie_hellman_public_value,
  diffie_hellman_shared_secret,
  sha256,
} from '@/crypto.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

/**
 * Computes the expected digest via the platform's audited implementation,
 * so the kata's from-scratch implementation has a trustworthy oracle to
 * check itself against instead of a hardcoded hex string.
 * @param {string} message
 * @returns {Promise<string>}
 */
const expected_sha256 = async (message) => {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(message),
  )
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

describe('sha256', () => {
  it('matches the platform digest for a few messages', async () => {
    for (const message of ['', 'abc', 'the quick brown fox']) {
      expect(await sha256(message)).toEqual(await expected_sha256(message))
    }
  })

  it('produces different digests for different messages', async () => {
    expect(await sha256('abc')).not.toEqual(await sha256('abd'))
  })
})

describe('diffie hellman key exchange', () => {
  it('both parties derive the same shared secret without sharing their private keys', () => {
    const prime = 23
    const base = 5
    const alice_private = 6
    const bob_private = 15

    const alice_public = diffie_hellman_public_value(prime, base, alice_private)
    const bob_public = diffie_hellman_public_value(prime, base, bob_private)

    expect(alice_public).toEqual(8)
    expect(bob_public).toEqual(19)

    const alice_shared = diffie_hellman_shared_secret(
      prime,
      bob_public,
      alice_private,
    )
    const bob_shared = diffie_hellman_shared_secret(
      prime,
      alice_public,
      bob_private,
    )

    expect(alice_shared).toEqual(bob_shared)
    expect(alice_shared).toEqual(2)
  })
})
