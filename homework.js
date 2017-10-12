var arr = [1, 2, 3, 4, 5, 6,];
console.log('масив', arr);

//метод pop
popped = arr.pop();
console.log('pop вилучає останній елемент з масиву ', arr);
console.log('pop і повертає його', popped);

//метод push
var pushed = arr.push("one", "two")
console.log('push добавляє елементи в кінець масива', arr);

//метод concat
var arr = [1, 2, 3] ,
    arr2 = ['a', 'b', 'c']
var concatin = arr.concat(arr2);
console.log('concat обєднує масиви або добавляє елементи в масив', concatin);

//метод indexOf
console.log('indexOf виводить індекс потрібного елемента (приклад з b) індекс', concatin.indexOf('b'));
console.log('indexOf виводить індекс потрібного елемента (приклад з 3) індекс', concatin.indexOf(3));
console.log('indexOf якщо елемента не має виводить -1 (приклад з 4) індекс', concatin.indexOf(4));

//метод join
var str = concatin.join('; ');
console.log('join обєднує елементи в строку', str);
console.log('join повторяє записаний елемнт певну кількість разів ', new Array(4).join("хоу "));

//метод forEach
var arr = ['a', 'b', 'c', "one", "two"];

arr.forEach(function(item, i, arr) {
  console.log('forEach виводить індекс', '(', i,')',  "елемент(", item, ") і массив:(", arr, ")" );
});

//метод filter
var arr = [1, -1, 2, -2, 3, -5];

var positiveArr = arr.filter(function(number) {
  return number < 0 ;
});
console.log('filter повторяє новий масив з елементами які відповідають true', positiveArr);

//метод find
function finde(element) {
    return element >= 15;
};
console.log("find повертає перше значення яке відповідає вимогі з масиву [12, 5, 8, 130, 44] при умові >= 15 поверне", [12, 5, 8, 130, 44].find(finde));

//метод map
console.log("масив для maps", arr);
var mapes = arr.map(function(x) {
  return x * 2;
});
console.log("map створює новий масив з результатами виклику функції в даному випадку (* 2)", mapes);

//метод slice 
var slices = mapes.slice(1, 4,);
console.log("slice создає новий масів з частинами основного масива", slices)

//метод splice 
var spliced = arr.splice(2, 0, 'splic');
console.log("splice добавля або удаля елемент масиву", arr);

//метод shift 
arr.shift();
console.log("shift видаляє перший елемент з масиву і повертає цей елемент", arr);

//метод unshift.
arr.unshift(-25, "unshift");
console.log("unshift додає один або декілька елементів на початок масиву і повертає новий розмір масиву", arr);
