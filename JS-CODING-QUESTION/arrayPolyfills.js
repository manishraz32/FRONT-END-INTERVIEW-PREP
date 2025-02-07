//---- 1. Array.map() polyfill -----//

let arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map((num) => num * num);
console.log("doubleArr: ", doubleArr);

Array.prototype.myMap = function (callback) {
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let arr = this;
  let len = arr.length;
  let ans = [];
  for (let i = 0; i < len; i++) {
    ans.push(callback(arr[i], i, arr));
  }
  return ans;
};

const tripleArr = arr.myMap((num) => num * num * num);
console.log("tripleArr: ", tripleArr);

//---- 2. Array.filter() polyfill -----//

let arr1 = [1, 2, 3, 4, 5, 6];
const evenNum = arr1.filter((num) => num % 2 == 0);
console.log("evenNum", evenNum);

Array.prototype.myFilter = function (callback) {
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let arr = this;
  let len = arr.length;
  let returnArr = [];
  for (let i = 0; i < len; i++) {
    if (callback(arr[i], i, arr)) {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
};

const oddNum = arr1.myFilter((num) => num % 2 === 1);

console.log("oddNum: ", oddNum);

//---- 3. Array.reduce() polyfill -----//

const arr3 = [1, 2, 3, 4, 5, 6];
const sum = arr3.reduce((accumlator, num) => accumlator + num, 0);
console.log("sum: ", sum);

Array.prototype.myReduce = function (callback, accumlator) {
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let arr = this;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (accumlator === undefined) {
      accumlator = arr[i];
    } else {
      accumlator = callback(accumlator, arr[i], i, arr);
    }
  }

  return accumlator;
};

const sum1 = arr3.myReduce((accumlator, num) => accumlator + num, 5);
console.log("sum: ", sum1);

