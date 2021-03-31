// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
    return drivers.push(name);
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
    return drivers;
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
    return drivers;
}

function appendDriver(name) {
    const newDrivers = drivers;
    return newDrivers.concat(name);
}

function prependDriver(name) {
    const newDrivers = drivers;
    return [name, ...newDrivers];
}

function removeLastDriver() {
    const newDrivers = drivers;
    return newDrivers.slice(0, newDrivers.length - 1);
}