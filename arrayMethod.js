// 1️⃣ What does [1, 2, 3].push(4) return?

let numArr = [1, 2, 3];
numArr.push(4);
console.log(numArr);

// 2️⃣ What is the output of [1, 2, 3].pop()
let numArr1 = [1, 2, 3];
numArr1.pop();
console.log(numArr1);

// 3️⃣ How to remove the first element from [10, 20, 30]?

let numArr2 = [10, 20, 30];
numArr2.shift();
console.log(numArr2);

// 4️⃣ What does [1, 2, 3].shift() do?

console.log([1, 2, 3].shift());
//  Removes 1st number of array i.e 1 .

// 5️⃣ How can you add 0 at the beginning of [1, 2, 3]?

let numArr4 = [1, 2, 3];
numArr4.unshift(0);
console.log(numArr4);

// 6️⃣ What is the result of [1, 2].concat([3, 4])?

let numArr5 = [1, 2];
let numArr6 = [3, 4];
let numConcat = numArr5.concat(numArr6);
console.log(numConcat);

// 7️⃣ How do you reverse [1, 2, 3]?

let numArr7 = [1, 2, 3];
numArr7.reverse();
console.log(numArr7);

//8️⃣ What will [3, 1, 4, 2].sort() return?

let numArr8 = [3, 1, 4, 2];
numArr8.sort();
console.log(numArr8);

//9️⃣ How to join ['a', 'b', 'c'] into "a-b-c"?

let smallAlph = ['a', 'b', 'c'];
let finalResult = smallAlph.join("-");
console.log(finalResult);

//🔟 What does ['x', 'y', 'z'].indexOf('y') return?

let alphabets = ['x', 'y', 'z'];
console.log(alphabets.indexOf("y"));

//1️⃣1️⃣ What’s the output of [1, 2, 3].includes(2)?

let numArr9 = [1, 2, 3];
console.log(numArr9.includes(2));

//1️⃣2️⃣ What does [1, 2, 3, 4].slice(1, 3) return?

let numArr10 = [1, 2, 3, 4];
console.log(numArr10.slice(1, 3));

//1️⃣3️⃣ How to remove 2 elements from [10, 20, 30, 40] starting at index 1?

let numArr11 = [10, 20, 30, 40];
console.log(numArr11.slice(1 ,3 ));

//1️⃣4️⃣ What is the result of [1, 2, 3].map(x => x * 2)?

console.log([1, 2, 3].map(x => x * 2));

//1️⃣5️⃣ What will [1, 2, 3].filter(x => x > 1) return?

console.log([1, 2, 3].filter(x => x > 1));


