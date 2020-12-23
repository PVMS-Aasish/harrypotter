var harrypotter,harrypotterImg;
var form,game,player;
var database;

function preload(){

    harrypotterImg= loadImage("harry potter flying.png")

}

function setup(){
createCanvas(900,900);

database = firebase.database();
game = new Game();
game.getState();
game.start();

harrypotter=createSprite(400,400,50,50);
harrypotter.addImage("harrypotter",harrypotterImg)

}
function draw(){
background("white");

drawSprites();
}