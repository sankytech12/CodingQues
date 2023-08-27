const arr = [1, 2, 3, 4, 5, 6];
let smallest = 2454635434;
let secondS = 2454635434;
let largest = -1;
let secondL = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondL = largest;
    largest = arr[i];
  }
  if (arr[i] < secondS) {
    //console.log(i);
    smallest = arr[i];
    secondS = smallest;
  }
}
console.log(secondL, secondS);
