class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.matrix = [x, y]
    }
    plus(x, y) {
        return [this.x + x, this.y + y]
    }
    minus(x, y) {
        return [this.x + x, this.y + y]
    }
    get length() {
        return this.matrix.reduce((a, b) => a + b)
    }
}

let vector = new Vec(2, 1)

function lastElement(array) {
    if (array.length == 0) {
        return {
            failed: true
        }
    } else {
        return {
            element: array[array.length - 1]
        }
    }
}

function promptDirection(question) {
    let result = prompt(question)
    if (result !== null) {
        if (result.toLowerCase() == 'left') return 'L'
        if (result.toLowerCase() == 'right') return 'R'
        throw new Error("invalid direction: " + result);
    } else return null
}

function look() {
    if (promptDirection("which way?") == 'L') return 'a house'
    else return 'two angry bears'
}

// window.addEventListener('click', () => {
//     try {
//         console.log('You see ' + look());
//     } catch (e) {
//         console.log(e);
//     }
// })


// Error Handling
class MuliplicatorUnitFailure extends Error {}

function primitiveMultiply(chance2occur) {
    let num1 = prompt('number 1?')
    let num2 = prompt('number 2?')
    let randNum = Math.floor(Math.random() * 100)
    let result = console.log(num1 * num2);

    if (randNum <= chance2occur) {
        console.log(randNum);
        return result;
    } else {
        console.log(randNum);
        throw new MuliplicatorUnitFailure('Cant compute:' + chance2occur + 'percent chance only')
    }
}

// for (;;) {
//     try {
//         primitiveMultiply(20)
//         break;
//     } catch (e) {
//         console.log(e);
//     }
// }

// The Locked Box =>
const box = {
    locked: true,
    unlock() {
        return this.locked = false
    },
    lock() {
        return this.locked = true
    },
    _content: [],
    get content() {
        if (this.locked) {
            throw new Error('Locked!')
        }
        return this._content
    },
    withBoxUnlocked(event) {
        if (this.locked) {
            this.unlock();
            event();
            this.lock()
            console.log(this.locked);
        } else {
            console.log(this.locked);
            return event()
        }
    }
}

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string)
    return new Date(year, month - 1, day)
}

const weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];
    return {
        name(number) {
            return names[number];
        },
        number(name) {
            return names.indexOf(name);
        }
    };
}();

let x = Function("n", "return n + 1")

console.log(x);