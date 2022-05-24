const fibonacci = (num) => {
        let arr = [0,1]
        for(let i = 0; i < num - 1; i++) {
            arr.push(arr[i] + arr[i + 1])
        }
        return arr[arr.length - 1]
    }
    
    console.log(fibonacci(7))


module.exports = {fibonacci}
