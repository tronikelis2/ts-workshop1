// PRIMITIVE TYPES

let str: string = "string"; // immutable
let num: number = 20; // float64 actually
let bool: boolean = false;
// god why are there 2 types for "empty" type
// tbh pick one and use one
let und: undefined = undefined;
let nul: null = null;

// ARRAYS

let strArr: string[] = ["foo", "bar"];
let numArr: number[] = [1, 2, 3, 4];

// but we use the Array<T> syntax which is exactly the same
// type Array<T> = T[];

let strArr2: Array<string> = strArr;
let numArr2: Array<number> = numArr;

// ANY

// skip typescript entirely, sometimes you will want to use this as a last resort

let any1: any = str;
any1 = num;
any1 = bool;

// I can assign anything if I cast it as any
let any2: string = num as any;

// UNKNOWN, tbh almost the same as any just a bit safer I guess

let unknown1: unknown = str;

function acceptString(a: string) {}

acceptString(unknown1);
acceptString(any1);

// Functions
// syntax is same as js

type Fn = (arg1: string, arg2: number) => number;

// or, as always in js there are 2 ways to do the same thing

type Obj = {
  fn(arg1: string, arg2: number): number;
};

// return type will be inferred, but you can specify
function fn(arg1: string, arg2: string): number {
  return 0;
}

// arrow function syntax is pretty much the same
const fn1 = (arg1: string, arg2: string): number => 0;

// VOID, there is no such thing in JS
// means the absence of a value, but this is not true

type FnNoReturn = () => void;

// NEVER
// impossible / unreachable type
// niche use cases, never saw these used

type Never = string & number;

// ENUMS

enum Enum {
  Foo,
  Bar,
}

// gets translated to

const enum1 = {
  Foo: 1,
  Bar: 2,
} as const;

// Objects (maps)
// there is always many ways to do the same thing, (which is a bad thing)

type KeyStringValueString = Record<string, string>;

type KeyStringValueString2 = {
  [x: string]: string;
};

type KeyStringValueString3 = {
  [K in string]: string;
};

// "Structs" (objects with specific properties)

type Foobar = {
  foobar: string;
};

const foobar: Foobar = {
  foobar: "ff",
};

// mark field optional with ?, essentially the same thing as adding | undefined

type Foobar1 = {
  foobar?: string;
};
