// Player variables
let player = {
   maxSpeed: 100,
   x: 100,
   y: 100,
};

//Build Player
function Initialize() {
   createPlayer();
   stylePlayer();
   document.body.appendChild(player.el);
}

//player element creation
function createPlayer() {
   player.el = document.createElement("div");
   player.x = 100;
   player.y = 100;
}

//Player styles
function stylePlayer() {
   player.el.style.position = "absolute";
   player.el.style.width = "100px";
   player.el.style.height = "100px";
   player.el.style.backgroundColor = "red";
   setPlayerposition();
}

//When Dom loaded
document.addEventListener("DOMContentLoaded", Initialize);

//User key inputs
document.addEventListener("keydown", (evt) => {
   let key = evt.key;

   if()
   if (key == "a"){
      player.x -= player.maxSpeed;
   } 
   if (key == "w") player.y -= player.maxSpeed;
   if (key == "d") player.x += player.maxSpeed;
   if (key == "s") player.y += player.maxSpeed;
   setPlayerposition();
});

document.addEventListener("keyup", (evt) => {


//update Player Position
function setPlayerposition() {
   player.el.style.top = player.y + "px";
   player.el.style.left = player.x + "px";
}

console.log(Date.now());
