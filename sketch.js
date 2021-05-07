var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var box;

function preload(){

    music = loadSound("music.mp3");

}


function setup(){

    canvas = createCanvas(800,600);

    

    block1 = createSprite(100,580,180,20);

    block1.shapeColor = "blue";


    block2 = createSprite(300,580,180,20);

    block2.shapeColor = "orange";


    block3 = createSprite(500,580,180,20);

    block3.shapeColor = "red"


    block4 = createSprite(700,580,180,20);

    block4.shapeColor = "green";



    box = createSprite(Math.round(random(100,700)),50,50,50);

    box.velocityX = Math.round(random(-8,6));

    box.velocityY = Math.round(random(2,8));

}

function draw() {
    background(rgb(169,169,169));
    
    if(box.x > 775 || box.x < 25) {

        box.velocityX = box.velocityX * (-1);

    }


    if(block1.y - box.y <= 35 && box.x < 190) {

        box.velocityX = 0;

        box.velocityY = 0;

        box.shapeColor = block1.shapeColor;

        music.play();

    }


    if(block2.y - box.y <= 35 && box.x < 390 && box.x > 210) {

        box.velocityX = 0;

        box.velocityY = 0;

        box.shapeColor = block2.shapeColor;

    }


    if(block3.y - box.y <= 35 && box.x > 410 && box.x < 590) {

        box.velocityX = 0;

        box.velocityY = 0;

        box.shapeColor = block3.shapeColor;

    }


    if(block4.y - box.y <= 35 && box.x > 610 && box.x < 790) {

        box.velocityX = 0;

        box.velocityY = 0;

        box.shapeColor = block4.shapeColor;

    }



    

    text(mouseX+','+mouseY,200,50);

    drawSprites();

}