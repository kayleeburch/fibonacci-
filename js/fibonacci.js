//0 1 1 2 3 5 8 13 21 34 55
const fibonacci = (num) => {
    let firstNum = 0
    let secondNum = 1
    if(num === 0) return num;
    for(let i = 1; i < num; i++) {
        let result = firstNum + secondNum
        firstNum = secondNum
        secondNum = result
    }
    return secondNum;
}


module.exports.fibonacci = fibonacci;