img = "";

function preload(){
    img = loadImage("yawning-lion.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#d8eb34");
    text("Lion", 50, 50);
    noFill();
    stroke("#d8eb34");
    rect(30, 30, 550, 350);
}