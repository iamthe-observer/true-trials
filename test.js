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
    get multiply() {
        return this.x * this.y
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

// Create function from data(string)
let x = Function("n", "return n + 1")

const vector2 = new Vec(1, 12)

// Promises
let ten = Promise.resolve("10")
    // ten.then(numb => console.log(`Number ${numb}`))

const promise = new Promise((resolve, reject) => {
    if (vector2.multiply != 0) {
        resolve(vector2.multiply)
    } else {
        reject('could not compute')
    }
})

// console.log(promise);

// promise.then(x => console.log(x))
//     .catch(e => console.log(e))

// const btn = document.querySelector('.btn')
// const first = document.querySelector('.first')
// const second = document.querySelector('.second')
// const third = document.querySelector('.third')


// btn.addEventListener("click", () => {
//     addColor(".first", 1000, "red")
//         .then(() => addColor(".second", 3000, 'blue'))
//         .then(() => addColor('.third', 2000, 'green'))
//         .catch(e => console.log(e))
// })

// function addColor(selector, time, color) {
//     const element = document.querySelector(selector)
//     return new Promise((resolve, reject) => {
//         if (element) {
//             setTimeout(() => {
//                 element.style.color = color
//             }, time)
//             resolve()
//         } else {
//             reject(`there is no such DOM element: "${selector}"`)
//         }
//     })
// }

// let hasMeeting = JSON.parse(prompt('true or false: meeting or not?'))
let hasMeeting = false

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Ebbysgold Group',
            location: 'Spintex Road',
            time: '12:00 AM'
        }
        resolve(meetingDetails)
    } else {
        reject(new Error("meeting already sheduled"))
    }
})

const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} is scehduled at ${meetingDetails.time} on ${meetingDetails.location}`
    return Promise.resolve(calendar)
}

// meeting
//     .then(addToCalendar)
//     .then(x => console.log('Meeting Info:', x))
//     .catch(e => console.log(e.message))

// async function myMeeting() {
//     try {
//         const meetingDetails = await meeting
//         const message = await addToCalendar(meetingDetails)
//         console.log(message)
//     } catch (e) {
//         console.log(e);
//     }
// }
// myMeeting().catch(e => console.log(e))
// myMeeting().catch(e => console.log(e))

const promise1 = Promise.resolve('Promise 1 complete')
const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promise 2 complete')
    }, 3000)
})

// promise1
//     .then(x => console.log(x))
// promise2
//     .then(x => console.log(x))

// returns all promises
// Promise.all([promise1, promise2]).then(res => console.log(res))

// returns only first promise thats done
// Promise.race([promise1, promise2]).then(res => console.log(res))

// Basically pauses functions (generator function)
// function* generatorFunc() {
//     let data = getData()
//     yield data;
//     console.log(data);
// }