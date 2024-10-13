This project was forked from:
[ThePrimeagen](https://github.com/ThePrimeagen/kata-machine)

### Supported Algorithm

All the Agorithms are defined in `./src/interface.js`

#### need to work out what to do with

- Prim's MST (Adjacency List)
- Dijkstra's Shortest Path (Adjacency List)

### How It Works

Make sure you have [deno](https://deno.com).

clone the repo and install the dependencies.

```bash
deno task generate
```

this will progressively create folders named

```
src/day1
src/day2
...
```

#### Testing

```bash
deno test
```

### Help wanted

A simple way to specify test, thinking something like `tests.json` and
`cat
test.json 2> /dev/null` to specify the tests to run. tests.json wouldn't be
committed.
