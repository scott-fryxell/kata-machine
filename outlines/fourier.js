/**
 * @typedef {Object} fourier_transform
 * @description Given a signal (e.g. a song's waveform) in the time domain,
 * the Fourier transform decomposes it into the frequencies that compose it,
 * along with how much each frequency contributes.
 *
 * ### How it works
 * - Any signal can be written as a sum of sine/cosine waves at different
 *   frequencies
 * - The DFT computes, for each candidate frequency, how strongly that
 *   frequency is present in the signal
 * - The Fast Fourier Transform (FFT) computes the same result in
 *   O(n log n) instead of the naive O(n^2)
 *
 * ### Common uses
 * - Audio compression (MP3 drops frequencies the ear can't hear)
 * - Image compression (JPEG transforms blocks of pixels into frequencies)
 * - General DSP: filtering, pitch detection, noise reduction
 */

/**
 * @typedef {Object} Complex
 * @property {number} re
 * @property {number} im
 */

/**
 * Naive O(n^2) discrete Fourier transform.
 * @param {number[]} signal - real-valued samples in the time domain
 * @returns {Complex[]} one complex value per frequency bin
 */
export const discrete_fourier_transform = (signal) => {
  console.log(signal)
  return []
}

/**
 * Magnitude (contribution) of each frequency bin.
 * @param {Complex[]} frequencies
 * @returns {number[]}
 */
export const fourier_magnitudes = (frequencies) => {
  console.log(frequencies)
  return []
}
