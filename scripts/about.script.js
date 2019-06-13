let i = 0,
  j = 0;
let txt =
  "About Me \n Everything I do, I do it because I love it.\nInterested in modern and promising technologies for development .\n ";
let txt2 =
  "A Full-Stack Developer \\ Engineer proficient in Open-Source Cross-Platform Technologies. \n";
let content = document.getElementById("heading");
let content2 = document.getElementById("subHeading");
let speed = 50;
let br = document.createElement("br");
let typer = () => {
  if (i < txt.length) {
    content.innerHTML += txt.charAt(i);
    if (txt.charAt(i) == "\n") content.appendChild(br);
    i++;
    setTimeout(typer, speed);
  }
  if (i >= txt.length) {
    console.log("small");

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
