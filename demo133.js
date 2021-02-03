const { forOwn } = require("lodash");

// foo()

var a = true
if (a) {
    foo()

    function foo() {
        console.log('a');

    }
} else {
    function foo() {
        console.log('b');

    }
}