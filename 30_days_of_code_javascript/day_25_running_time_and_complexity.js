function processData(input) {
    //Enter your code here
    let inputArray = input.split('\n')
    for (let i = 1; i < inputArray.length; i++) {
        let item = inputArray[i]
        if (isPrime(item)) {
            console.log("Prime")
        } else {
            console.log("Not prime")
        }
    }
}
  
function isPrime(item) {
    if (item <= 1) {
        return false
    }
    if (item <= 3) {
        return true
    }  
  
    if (item % 2 == 0 || item % 3 == 0){
        return false;
    }
  
    for (let index = 5; index * index <= item; index = index+6){
        if (item % index == 0 || item % (index+2) == 0) {
            return false;
        }
    }
    return true;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
