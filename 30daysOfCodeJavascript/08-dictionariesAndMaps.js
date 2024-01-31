function processData(input) {
    //Enter your code here
    let inputValue = input.split('\n');
    let size = parseInt(inputValue[0]);
    let phoneBook = [];
    
    for (let i = 0; i < size; i++){
        let newLine = inputValue[i+1];
        newLine = newLine.split(' ');
        phoneBook[newLine[0]] = newLine[1];
    }

    for (let j = size+1; j < inputValue.length; j++){
        let number = (phoneBook[inputValue[j]]);
        if (number !== undefined) {
            console.log(inputValue[j]+'='+number);
        } else {
            console.log('Not found');
        }
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
