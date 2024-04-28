var askUser = prompt('Please enter a number');

for (num = 1; num <= 10; num++) {
    document.write(`${askUser} * ${num} = ${num * askUser} <br>`)};



document.write("<h1>For Loop but diffrent syntax </h1> "
);

var askUser3 = prompt('Please enter a number');


for ( num3 = 1; num3 <= 10; num3 = num3+1) {
    document.write(askUser3 + " * " + num3 + " = " + num3*askUser3 + "<br>");
};