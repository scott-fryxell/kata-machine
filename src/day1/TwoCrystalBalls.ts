// Given two crystal balls that will break if dropped
// from high enough distance, determine the exact spot
// in which crystal ball will break in the most optimized way
// breaks list could represent each floor of a building.
export default function two_crystal_balls(breaks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breaks.length))

  let i = jump
  // go until first crystall ball breaks
  for (; i < breaks.length; i += jump) {
    if (breaks[i]) break
  }
  // go back one step
  i -= jump

  for (let j = 0; j < jump && i < breaks.length; ++j, ++i) {
    if (breaks[i]) return i // found where it first breaks
  }

  return -1 // return sentinal ie it breaks from the get go
}  
