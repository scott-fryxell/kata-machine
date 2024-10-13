// Given two crystal balls that will break if dropped
// from high enough distance, determine the exact spot
// in which crystal ball will break in the most optimized way
// breaks list could represent each floor of a building.
/**
 * Given two crystal balls that will break if dropped from high enough distance,
 * determine the exact spot in which crystal ball will break in the most optimized way.
 * The breaks list could represent each floor of a building.
 *
 * @param {boolean[]} breaks - An array of boolean values representing whether the ball breaks at each floor.
 * @returns {number} The index where the ball first breaks, or -1 if it never breaks.
 */
export const two_crystal_balls = (breaks) => {
  const jump = Math.floor(Math.sqrt(breaks.length));

  let i = jump;
  // go until first crystal ball breaks
  for (; i < breaks.length; i += jump) {
    if (breaks[i]) break;
  }
  // go back one step
  i -= jump;

  for (let j = 0; j < jump && i < breaks.length; ++j, ++i) {
    if (breaks[i]) return i; // found where it first breaks
  }

  return -1; // return sentinel i.e., it breaks from the get-go
};

export default two_crystal_balls;
