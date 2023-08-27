const arr1 = [1, 2, 3, 4, 4, 4];
const arr2 = [5, 6, 7, 8];
let i = 0;
const length = arr1.length + arr2.length;
let arr3 = [];
while (i < length) {
  if (i < arr1.length) {
    arr3.push(arr1[i]);
  } else {
    const i2 = i % arr1.length;
    arr3.push(arr2[i2]);
  }
  i++;
}
console.log(arr3);
