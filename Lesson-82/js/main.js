// 1)
function heloPeople (namee) {
    return `Hello ${namee}`
}
console.log(heloPeople('Dima'))


// 2)
const num = [2, 4, 6, 8, 10, 12]
function overTen (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
    return `No numbers greater than ten were found`
}
console.log(overTen(num))


// 3)
function calc (firstNum, lastNum, operation) {
    let result = 0
    if (operation === 'plus' || operation === 'Plus' || operation === 'плюс' || operation === 'Плюс' || operation === '+') {
        result = firstNum + lastNum
        return result
    } else if (operation === 'minus' || operation === 'Minus' || operation === 'минус' || operation === 'Минус' || operation === '-') {
        result = firstNum - lastNum
        return result
    } else if (operation === 'multiply' || operation === 'Multiply' || operation === 'умножить' || operation === 'Умножить' || operation === '*') {
        result = firstNum * lastNum
        return result
    } else if (operation === 'share' || operation === 'Share' || operation === 'разделить' || operation === 'Разделить' || operation === 'поделить' || operation === 'Поделить' || operation === '/' || operation === ':') {
        result = firstNum / lastNum
        return result
    } else {
        return `Unknown operation`
    }
}

console.log(calc(2, 3, 'плюс'))
console.log(calc(2, 3, 'Minus'))
console.log(calc(2, 3, 'Умножить'))
console.log(calc(2, 3, 'share'))
console.log(calc(2, 3, 'hi'))
