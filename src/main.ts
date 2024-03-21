import{Car} from "./cars.ts"

let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let start = document.getElementById("start_btn") as HTMLButtonElement;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

let C = new Car(0,1,280,`rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)})`,`rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)})`, "65", random(1,6));
C.draw(ctx);

let D = new Car(0,220,280,`rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)})`,`rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)})`, "60", random(1,6));
D.draw(ctx);

let E = new Car(0,440,280,`rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)})`,`rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)})`, "74", random(1,6));
E.draw(ctx);

let F = new Car(0,660,280,`rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)})`,`rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)})`,"02", random(1,6));
F.draw(ctx);

function random(min:number, max:number){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function animateCar(){
  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.fillRect(0,0,canvas.width, canvas.height);
  C.draw(ctx);
  C.move(canvas.width);

  D.draw(ctx);
  D.move(canvas.width);

  E.draw(ctx);
  E.move(canvas.width);

  F.draw(ctx);
  F.move(canvas.width);
  requestAnimationFrame(animateCar);
}
start.addEventListener("click", animateCar)

