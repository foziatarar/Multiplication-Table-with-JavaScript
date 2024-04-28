var askUser1 = prompt('Please enter a number'),
    num1 = 1;
while (num1 <= 10){
    document.write (askUser1 + " * " + num1 + " = " + num1 * askUser1 + "<br>");
    num1 = num1 +1;
};


document.write ("<h1>While Loop but diffrent syntax</h1>");

var askUser2 = prompt('Please enter a number'),
    num2 = 1;

while (num2 <= 10){
    document.write(
        askUser2 + " * " + num2 + " = " + num2 * askUser2 + "<br>");
        num2++;
}