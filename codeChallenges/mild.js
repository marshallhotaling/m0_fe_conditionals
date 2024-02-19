var num1 = 4
function isEven(numValue) {

    if(numValue % 2 !== 0) {
        return "odd"

    }
    if(numValue  % 2 !== 1){
        return "even"
    }
};

console.log(isEven(num1))