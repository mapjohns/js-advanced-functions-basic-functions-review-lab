// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(something = "*") {
    return function(param = "special") {
        return `You are ${something + param + something}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(num, arrFunctions) {
    if (arrFunctions.length === 0) {
    return num
    }
    else {
        let test = num
        for (let i=0; i < arrFunctions.length; i++) {
            test = arrFunctions[i](test)
        }
        return test
    }
}