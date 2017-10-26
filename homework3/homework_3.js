console.error("Завдання 1-3 . Створити в об'єкті власні реалізації методів масиву");
var obj = {
    
    pop: function () {
        if (this.length === 0) {
            return undefined;
        } else {
            return this.splice(this.length-1, 1);
        }
    },

    push: function (value) {
        return this[this.length] = value;
    },

    slice: function (start, end) {
        var arr = [];
        for( start;start < end; start++) {
            arr.push(this[start]);
        }
        return arr;
    },

    join: function ( symbol) {
        var str = '';
        for(var i = 0; i < this.length ; i++){
            str += this[i]+ symbol;
        }
        return str;  
    },

    reverse: function () {
        var b = 0;
        var val = this.slice();
        var i = (val.length-1)
        for(i ; i >= 0; i--){
              this[b] = val[i];
               b++
        }
        return this;
    }
}
var arr = ['a', 'b', 'c', 4, 5, 6];

console.log(arr); 

console.log(obj.pop.call([]))
console.log(obj.pop.call(arr));
console.log(arr);

obj.push.call(arr, 6);
console.log(arr);

var slices = obj.slice.call(arr, 1, 4);
console.log(slices);

var joint = obj.join.call(arr, "; ");
console.log(joint);

var rev = obj.reverse.call(arr);
console.log(rev);
console.log(arr);


console.error("Завдання 4  метод sum");
var sum = function (a) {
    this.a = a,
    this.add = function (b) {
        return this.a + b; 
    }
}
var x = new sum(5); 
console.log(x.add(9));


// Завдання 5 рекурсивні функції
console.error("Завдання 5 рекурсивні функції");

// Факторіал рекурсивний метод
function factorial(a){
    return a ? a * factorial(a - 1):1;
};

console.log(factorial(16));

console.time("factorialrecursiv");
for (var i = 0; i <10000; i++){
    factorial(16);
}
console.timeEnd("factorialrecursiv");


// Степінь рекурсивний метод
function pow(x, n) {
  if (n != 1) {
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

console.log(pow(8, 8));
console.time("timepowrecursiv");
for (var i = 0; i <10000; i++){
    pow(8, 8);
}
console.timeEnd("timepowrecursiv");


// Додавання рекурсивний метод
function add(y) {
    if (y < 10) {
        return y; 
    } else {
            return y % 10 + add(parseInt(y / 10));
    }
}

console.log(add(5555512345678797));
console.time("timeaddrecursiv");
for (var i = 0; i <10000; i++){
    add(5555512345678797);
}
console.timeEnd("timeaddrecursiv");

// Факторіал
function fact (n) {
    var fac = 1;
    if (n === 1 || n === 0) {
        return 1;
    } else {
        for (; n !== 0; n--) {
            fac *= n;
        }
    } return fac;
}

console.time("factorial");
for (var i = 0; i <10000; i++){
    fact(16);
}
console.timeEnd("factorial");

// POW
function pows (num, n) {
    power = 1;
    if (n === 0) {
        return 1;
    } else {
        for (var i = 0; i < n; i++) {
            power *= num;
        }
    } return power;
}
console.time("timepow");
for (var i = 0; i <10000; i++){
    pows(8, 8);
}
console.timeEnd("timepow");

// Додавання
function add2(num) {
    var sum = 0;
    if (num < 10) {
        return num;
    } else {
        while ( num > 1) {
            sum += num % 10;
            num = parseInt(num / 10);
        }
    } return sum;
}
console.time("timeadd2");
for (var i = 0; i <10000; i++){
    add(5555512345678797);
}
console.timeEnd("timeadd2");