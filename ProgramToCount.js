const arr = ["abhay", "ritest", "abhi", "rakesh", "abhay"];
let ans = new Object();
arr.map((item) => {
  if (ans[item]) {
    ans[item]++;
  } else {
    ans[item] = 1;
  }
});
console.log(ans);
