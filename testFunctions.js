const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const reverse = (str) => {
    return str.split("").reverse().join("");
}

const calculator = {
    add: (num1, num2) => { return num1 + num2 },
    subtract: (num1, num2) => { return num1 - num2 },
    divide: (num1, num2) => { return num1 / num2 },
    multiply: (num1, num2) => { return num1 * num2 },
}

const analyzeArr = (arr) => {
    let obj = {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    }
    obj.average = arr[Math.ceil((arr.length - 1) / 2)];
    obj.min = Math.min(...arr);
    obj.max = Math.max(...arr);
    obj.length = arr.length;
    return obj;
}

module.exports = {
    capitalize,
    reverse,
    calculator,
    analyzeArr
};
