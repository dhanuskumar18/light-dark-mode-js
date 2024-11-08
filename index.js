function ld() {
  let b = document.querySelector("body");
  let bt = document.querySelector("button");
  let c = b.getAttribute("class");
  let d = bt.getAttribute("class");
  if (c == "dark") {
    b.setAttribute("class", "light");
}
else{
      b.setAttribute("class", "dark");

  }
if (d == "btnl") {
    bt.setAttribute("class", "btnd");
}
else{
      bt.setAttribute("class", "btnl");

  }
  console.log(d);
}
