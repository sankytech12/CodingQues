for (let i = 1; i <= 5; i++) {
  const int = setTimeout(() => {
    console.log(i);
    if (i === 5) clearTimeout(int);
  }, i * 1000);
}
