function choice<T>(seq: readonly T[]): T {
  return seq[Math.floor(Math.random() * seq.length)];
};

function randint(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function random() {
  return Math.random();
}

function shuffle(x: unknown[]): void {
  const shuffled = x.map((a) => { return { weight: Math.random(), value: a } })
    .sort((a, b) => a.weight - b.weight)
    .map((a) => a.value);
  x.splice(0, x.length, ...shuffled);
}

function sample<T>(population: readonly T[], k: number): T[] {
  const shuffled = population.map((a) => { return { weight: Math.random(), value: a } })
    .sort((a, b) => a.weight - b.weight)
    .map((a) => a.value);
  return shuffled.slice(0, k);
}

export { choice, randint, random, shuffle, sample };