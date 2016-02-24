// @noImplicitAny: true
interface Show {
    show: (x: number) => string;
}
function f({ show = v => v.toString() }: Show) {}

interface Nested {
    nested: Show
}
function ff({ nested = { show: v => v.toString() } }: Nested) {}

interface Tuples {
    prop: [string, number];
}
function g({ prop = ["hello", 1234] }: Tuples) {}

interface StringUnion {
    prop: "foo" | "bar";
}
function h({ prop = "foo" }: StringUnion) {}
