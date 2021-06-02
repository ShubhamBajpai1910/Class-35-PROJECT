//Create variables here
var dog, happyDog;
var database;
var food, foodStock;
function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  
}

dog=createSprite(250,250,200,200);
dog.addImage(dogImg);


function draw() {  
background("cyan");
  drawSprites();
  //add styles here

}



