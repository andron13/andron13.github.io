function repeatStr(n, s) {
  let output = "";
  for (let i = 0; i < n; i++) {
    output += s;
  }
  return output;
}

console.log(repeatStr(2, "d"));
