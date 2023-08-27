"use strict";

var array1 = [1, 3, 7, 9];
var array2 = [1, 2, 3, 4, 5, 6, 7];
var array3 = [[1, 2, 3], [7, 8, 9], [11, 12, 13]];

var array4 = [{
    number: 1,
    name: "one"
}, {
    number: 7,
    name: "seven"
}, {
    number: 13,
    name: 'thirteen'
}, {
    number: 9,
    name: 'nine'
}];

function differenceInArray() {
    var array1 = [1, 3, 7, 9];
    var array2 = [1, 2, 3, 4, 5, 6, 7];
    var arr = array2.filter(function (d) {
        return !array1.includes(d);
    });
    return arr;
}

differenceInArray();

function oddNumber() {
    var array2 = [1, 2, 3, 4, 5, 6, 7];

    var odd = array2.filter(function (n) {
        return n % 2;
    });
    return odd;
}

oddNumber();

function concatArray() {

    var newArray = Array.prototype.concat.apply([], array3);
    return newArray;
}

concatArray();

function compareArray() {

    if (newArray.includes(1)) {
        return 1;
    }
    if (newArray.includes(7)) {
        return 7;
    }
    if (newArray.includes(13)) {
        return 13;
    }
    if (newArray.includes(9)) {
        return 9;
    } else {
        return "Number not in array4";
    }
}

compareArray();

function lowestNumber() {
    var array2 = [1, 2, 3, 4, 5, 6, 7];

    var min = array2.reduce(function (a, b) {
        return Math.min(a, b);
    });
    return min;
}

lowestNumber();