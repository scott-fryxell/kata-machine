/**
 * @type {number[]}
 */
const a = [];

/**
 * Measures the execution time of a given function.
 * @param {Function} fn - The function to be timed.
 * @returns {number} The execution time in milliseconds.
 */
const time = (fn) => {
  const now = Date.now();
  fn();
  return Date.now() - now;
};

/**
 * @param {number} number
 */
const unshift = (number) => {
  for (let i = 0; i < number; ++i) {
    a.unshift(Math.random());
  }
};

/**
 * @param {number} number
 */
const shift = (number) => {
  for (let i = 0; i < number; ++i) {
    a.shift();
  }
};

/**
 * @param {number} number
 */
const push = (number) => {
  for (let i = 0; i < number; ++i) {
    a.push(Math.random());
  }
};

/**
 * @param {number} number
 */
const pop = (number) => {
  for (let i = 0; i < number; ++i) {
    a.pop();
  }
};

/**
 * @param {number} idx
 * @returns {function(): number}
 */
const get = (idx) => () => a[idx];

/**
 * @param {number} count
 * @returns {function(): void}
 */
const push_arr = (count) => () => push(count);

/**
 * @param {number} count
 * @returns {function(): void}
 */
const pop_arr = (count) => () => pop(count);

/**
 * @param {number} count
 * @returns {function(): void}
 */
const unshift_arr = (count) => () => unshift(count);

/**
 * @param {number} count
 * @returns {function(): void}
 */
const shift_arr = (count) => () => shift(count);

const tests = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000];
console.log("Testing get");
tests.forEach((t) => {
  a.length = 0;
  push(t);
  console.log(t, time(get(t - 1)));
});

console.log("push");
tests.forEach((t) => {
  a.length = 0;
  push(t);
  console.log(t, time(push_arr(1000)));
});

console.log("pop");
tests.forEach((t) => {
  a.length = 0;
  push(t);
  console.log(t, time(pop_arr(1000)));
});

console.log("unshift");
tests.forEach((t) => {
  a.length = 0;
  push(t);
  console.log(t, time(unshift_arr(1000)));
});

console.log("shift");
tests.forEach((t) => {
  a.length = 0;
  push(t);
  console.log(t, time(shift_arr(1000)));
});
