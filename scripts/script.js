let i = 0,
  j = 0;
let txt = " Hi,\n I am RAGAdox(Aka -Rishi)\n Full-Stack Web Developer";
let txt2 =
  "Front-End Engineere/API Developer/Cross-Platform Application Developer";
let content = document.getElementById("heading");
let content2 = document.getElementById("subHeading");
let speed = 50;
let br = document.createElement("br");
let typer = () => {
  console.log("function called");

  if (i < txt.length) {
    content.innerHTML += txt.charAt(i);
    if (txt.charAt(i) == "\n") content.appendChild(br);
    i++;
    setTimeout(typer, speed);
  }
  if (i >= txt.length && i < txt2.length) {
    typeSmall();
  }
};
typeSmall = () => {
  if (j < txt2.length) {
    content2.innerHTML += txt2.charAt(j);
    if (txt2.charAt(j) == "\n") content2.appendChild(br);
    j++;
    setTimeout(typeSmall, speed);
  }
};
