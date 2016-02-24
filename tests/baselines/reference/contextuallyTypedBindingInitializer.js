//// [contextuallyTypedBindingInitializer.ts]
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


//// [contextuallyTypedBindingInitializer.js]
function f(_a) {
    var _b = _a.show, show = _b === void 0 ? function (v) { return v.toString(); } : _b;
}
function ff(_a) {
    var _b = _a.nested, nested = _b === void 0 ? { show: function (v) { return v.toString(); } } : _b;
}
function g(_a) {
    var _b = _a.prop, prop = _b === void 0 ? ["hello", 1234] : _b;
}
function h(_a) {
    var _b = _a.prop, prop = _b === void 0 ? "foo" : _b;
}
