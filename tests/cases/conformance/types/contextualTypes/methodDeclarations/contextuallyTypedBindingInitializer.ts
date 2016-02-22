// @noImplicitAny: true
interface Parser {
    parse: (x: string) => number;
}

function f({ parse = v => v }: Parser) {

}

interface Foo {
    prop: [string, number];
}
function g({ prop = ["hello", 1234] }: Foo) {

}

interface Bar {
    prop: "foo" | "bar";
}
function h({ prop = "foo" }: Bar) {
    
}