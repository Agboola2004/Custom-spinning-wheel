const add = document.getElementById("add");
const inputsContainer = document.getElementById("inputs-container");
const label = document.getElementById("newItem");
const color = document.getElementById("newColor");
const mainAdd = document.getElementById("mainAdd");

let sectors = [];

const ctx = document.querySelector("#wheel").getContext`2d`;
const spin = document.getElementById("spin");

const rad = ctx.canvas.width / 2;
const PI = Math.PI;
const TAU = 2 * PI;

//* Draw sectors and  texts to canvas *//
const drawSector = (sector, i, arr) => {
  const arc = TAU / arr.length;
  const ang = arc * i;
  ctx.save();
  // COLOR
  ctx.beginPath();
  ctx.fillStyle = sector.color;
  ctx.moveTo(rad, rad);
  ctx.arc(rad, rad, rad, ang, ang + arc);
  ctx.lineTo(rad, rad);
  ctx.fill();
  // TEXT
  ctx.translate(rad, rad);
  ctx.rotate(ang + arc / 2);
  ctx.textAlign = "right";
  ctx.fillStyle = "#fff";
  ctx.font = "bold 30px sans-serif";
  ctx.fillText(sector.label, rad - 10, 10);
  //
  ctx.restore();
};

add.addEventListener("click", () => {
  const height = inputsContainer.style.height;
  if (height == "0px") {
    inputsContainer.style.height = "auto";
  } else {
    inputsContainer.style.height = "0px";
  }
});

mainAdd.addEventListener("click", () => {
  if (label.value !== "") {
    sectors.push({ label: label.value, color: color.value });
    sectors.forEach(drawSector);
    inputsContainer.style.height = "0px";
  } else {
    return;
  }
});

let newSectors = [];

//code for rotation
const newCtx = document.querySelector("#wheel");
const newSpin = document.querySelector("#spin");
const result = document.querySelector("#spin-result");

let deg = 0;

newSpin.addEventListener("click", () => {
  newSpin.style.pointerEvents = "none";
  //calculate new rotation degrees
  deg = Math.floor(5000 + Math.random() * 5000);
  //set wheel transition
  newCtx.style.transition = "all 10s ease-out";
  //rotate wheel
  newCtx.style.transform = `rotate(${deg}deg)`;
  console.log("clicked");
  add.style.pointerEvents = "none";
});

newCtx.addEventListener("transitionend", () => {
  //makes it start from new degrees
  newSpin.style.pointerEvents = "auto";
  newCtx.style.transition = "none";
  add.style.pointerEvents = "auto";

  const actualDeg = deg % 360;
  newCtx.style.transform = `rotate(${actualDeg}deg)`;
  //calculate and display winner
});

 