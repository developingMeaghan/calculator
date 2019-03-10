//variables
var firstnum
var secondnum
var operator
var sum
var display

//this excutes display num after timer runs out 
setTimeout(() =>{ display = document.getElementById("displayNum"); });

//Recognizes that when first number is pushed followed by  operator(+,-,*,/ ) and the second number it needs to execute sum
function calculate(){
    assignNumber(Number(display.innerText));
    if (operator == "+"){
        sum = firstnum + secondnum;
        display.innerText = sum;
    }

    if (operator == "-"){
        sum = firstnum - secondnum;
        display.innerText = sum;
    }

    if (operator == "/"){
        if (secondnum == 0){
            return display.innerText = 0;
        }
        sum = firstnum / secondnum;
        display.innerText = sum;
    }

    if (operator == "*"){
        sum = firstnum * secondnum;
        display.innerText = sum;
    }
}

//Stores the numbers so when you hit them you can see them
function assignNumber(num){
    if (!firstnum || firstnum == 0){
        firstnum = Number(num);
        display.innerText = num;
    } else
    if (!secondnum || secondnum == 0){
        secondnum = Number(num);
        display.innerText = num;
    }
}

function place(value){
    if (display.innerText == 0){
        display.innerText = value;
    } else{
        display.innerText = display.innerText + value;
    }
}

//registers the operator being used (+,-,*,/)
function setOperator(symbol){
    operator = symbol;
    assignNumber(display.innerText);
    display.innerText = 0;
}

//when you hit AC it clears the calc and only when you hit AC
function clearCalc(){
    display.innerText = 0;
    firstnum = 0;
    secondnum = 0;
}