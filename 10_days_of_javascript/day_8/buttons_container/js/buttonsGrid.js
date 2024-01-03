let btnNumbers = [1, 2, 3, 6, 9, 8, 7, 4]

function rotateClockwise() {
    btnNumbers.unshift(btnNumbers.pop())
    document.querySelector("#btn1").innerHTML = btnNumbers[0]
    document.querySelector("#btn2").innerHTML = btnNumbers[1]
    document.querySelector("#btn3").innerHTML = btnNumbers[2]
    document.querySelector("#btn6").innerHTML = btnNumbers[3]
    document.querySelector("#btn9").innerHTML = btnNumbers[4]
    document.querySelector("#btn8").innerHTML = btnNumbers[5]
    document.querySelector("#btn7").innerHTML = btnNumbers[6]
    document.querySelector("#btn4").innerHTML = btnNumbers[7]
}
