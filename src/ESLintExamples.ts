// uses double quotes
import React from "react";

if (React === undefined) {
  // use semicolons
  // 2 space indentation
  console.log("React is undefined");
}

// use space in curly braces
console.log({ x: "1" });

// use no space in brackets
console.log([1, 2]);

// always have braces in arrow functions
// require typed function parameters
console.log((x: number) => x + 1);

// prefer named exports instead of default exports
export const namedExport = "namedExport";

// use PascalCase for interface names
export interface PascalCaseInterface {
  x: number;
}

// allow camelCase or PascalCase for variables and functions
export const camelCaseVariable = "camelCase";
export const PascalCaseVariable = "PascalCase";
// require return type on functions
export function camelCaseFunction(): void {}
export function PascalCaseFunction(): void {}

// prefer shorthand object notation
console.log({
  camelCaseVariable,
  PascalCaseVariable,
});

// prefer string interpolation
console.log(`This is a variable with ${camelCaseVariable} naming`);

// warn for deprecated functions
export const x: React.SFC = () => null;
