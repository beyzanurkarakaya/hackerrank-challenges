function processData(input) {
    //Enter your code here
    let inputValue = input.split("\n")
    let indexedEven = ""
    let indexedOdd = ""
 
    for (let i = 1; i < inputValue.length; i++){ 
        for (let j = 0; j < inputValue[i].length; j++) {
            if (j%2 == 0) {
                indexedEven += inputValue[i][j]
            } else {
                indexedOdd += inputValue[i][j]
            }
        }
        console.log(indexedEven + " " + indexedOdd)
        indexedEven = ""
        indexedOdd = ""
    }
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
