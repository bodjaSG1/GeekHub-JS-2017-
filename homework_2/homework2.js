
// Треугольник в цикле
console.error("task 1");
var str = '#';
while (str.length <= 7){
    console.log( str, "\n");
    str+="#";
};


// FizzBuzz
console.error("task 2");
var num = 1;
for ( ; num < 100; num++ ) {
    if ( num % 5 === 0 && num % 3 === 0 ){
        console.log( num, " = FizzBuzz" );
    } else {
        if ( num % 5 === 0 ){
            console.log( num, " = Buzz" );
        } else {
            if ( num % 3 === 0 ){
                console.log( num, " = Fizz" );
            } else {
                console.log( num);
            }
        }
    }
}


// Шахматная доска
console.error("task 3");
var str2 = "# # # #";
var str3 = " # # # #";
var str4 = " ";

for( i = 1; i < 18; i++ ){
    if ( i % 2 === 1){
        console.log( str4)
    }else {
        if ( i % 4 === 2){
            console.log( str2);
        }else {
            if ( i % 4 === 0){
                console.log( str3);
            }
        }
    }
}


// Функції. Мінімум
console.error("task 4");
function min(b, c) {
    if ( b < c) {
        return b;
    } else{
        return c;
    }
}

 console.log(min(2, 5));
 console.log(min(0, 10));
 console.log(min(0, -10));


 // Функції. Рекурсия
console.error("task 5");
function isEven(n) {
    if (n == 0)
      return true;
    else if (n == 1)
      return false;
    else if ( n < 0)
      return isEven(-n);
    else
      return isEven( n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


// Функції. Считаем бобы
console.error("task 5");

// Для пошуку символу b
function countBs(string) {
    var counted = 0;
    var bins = "b";
    for (var i = 0; i < string.length; i++)
      if (string.charAt(i) == bins)
        counted += 1;
    return counted;
}
console.log(countBs("backboard", "b"));

// Для пошуку символу який ми передамо другим параметром
function countChar(string, symbol) {
    var counted = 0;
    for (var i = 0; i < string.length; i++)
      if (string.charAt(i) == symbol)
        counted += 1;
    return counted;
}
console.log(countChar("b$ig$bat$oni$bans$", "$"));