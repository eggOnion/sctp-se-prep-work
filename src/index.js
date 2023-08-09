const road = document.querySelector("#road");
road.width = 1200;

const car = document.querySelector("#car");

let carPostion = 500; //How to pass the value of a CSS property into JS?

window.addEventListener("keydown", (event) => {
  console.log(event);

  if (event.key === "a") {
    //alert("Car move left");
    carPostion = carPostion - 10;
    car.style.left = carPostion + "px";
    console.log(car.style.left);
  }
  if (event.key === "d") {
    //alert("Car move right");
    carPostion = carPostion + 10;
    car.style.left = carPostion + "px";
    console.log(car.style.left);
  }
});
