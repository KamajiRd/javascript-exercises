const sumAll = function(firstNum, lastNum) {

    let sumNumbers = [];
    let sumResult = sumNumbers.reduce((partialSum, a) => partialSum + a, 0);

    for (let i = 0; i < lastNum; i++) {

        firstNum = i
        sumNumbers.push(firstNum);

    }

    return sumResult;
};



// Do not edit below this line
module.exports = sumAll;
