
var forLoop = (array) => {
    for (let num = 0; num < 25; num++) {
       array.push(`I am ${num} strange loop${num === 1 ? '' : 's'}.`)
    }
    return array
}

var whileLoop = (n) => {
    let countdown = n;
    while (countdown > 0) {
        console.log(--countdown)
    }
    return "done"
}

let i = 0
var doWhileLoop = (num) => {
    function increment() {
        return i++
    }

    do {
        console.log("I run once regardless.");
    } while (increment() < num)
}