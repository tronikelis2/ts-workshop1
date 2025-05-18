// Generics

// our own array type
type Array<T> = T[];

function foo<T>(arg: T) {}

// generic filter array function
function filter<T>(arr: T[], predicate: (arg: T) => boolean): T[] {
  const filtered: T[] = [];
  for (const item of arr) {
    if (predicate(item)) {
      filtered.push(item);
    }
  }
  return filtered;
}

filter(["foo", "bar"], (arg) => arg !== "foo");
// specify generics yourself
filter<number>([1, 2, 3], (arg) => arg !== 1);

// adding constraints

// T has to be BIGGER or EQUAL to { foobar: string }
function objThatHasSpecific<T extends { foobar: string }>(foobar: T) {
  return foobar.foobar;
}

// must have foobar: string, otherwise everything is accepted
objThatHasSpecific({
  foobar: "foo",
  nice: 1,
  nice2: 3,
});
