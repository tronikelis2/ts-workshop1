// type keyword, (type aliases), always use "type" keyword when declaring

type MyType = string | number;

type MyObj = {
  foo: MyType;
};

// interface keyword, dont use this, dangerous

interface MyInterface {
  foo: string;
}

interface MyInterface {
  bar: string;
}

const m: MyInterface = {};

// UNIONS (that or that)

let stringOrNum: string | number = "foo";

// type assert required to extract type

if (typeof stringOrNum === "string") {
  let v = stringOrNum;
}

type Obj1 = { obj1: string };
type Obj2 = { obj2: string };

let obj12: Obj1 | Obj2 = { obj1: "foo" };

// 1. type assert on a unique property

if ("obj1" in obj12) {
  let obj = obj12;
}

// 2. use a type-guard function

function isObj1(arg: Obj1 | Obj2): arg is Obj1 {
  return "obj1" in arg;
}

if (isObj1(obj12)) {
  let v = obj12;
}

// INTERSECTIONS (this and this)

type Obj12 = Obj1 & Obj2;

// notice how both properties are now required
const obj122: Obj12 = {
  obj1: "obj1",
  obj2: "obj2",
};
