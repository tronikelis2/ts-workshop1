// just plain breaking everything without any or "as"

type StringOrNumber = (string | number)[];

function addString(arr: StringOrNumber) {
  arr.push("foobar");
}

const onlyNumbers: number[] = [1, 2, 3];

// a square in a circle factory, huh, I guess we're doing squares now
addString(onlyNumbers);

console.log({ onlyNumbers });

// JSON.parse

type AssumedResponse = {
  foobar: string;
};

// JSON.parse => any
const response: AssumedResponse = JSON.parse(`{"foobar": 2}`);

// not so dangerous but still so easy to do

let s: string = 2 as unknown as string;
