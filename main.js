function preload() {
}
function setup() {
    canvas=createCanvas(640,480);
    canvas.position(450,150);
    video=createCapture(VIDEO);
    video.hide();

    
}
function draw() {
    image(video,230,150,220,200);
    fill("purple");
    stroke("purple");
    circle(50,50,90);
    circle(580,50,90);
    circle(50,430,90);
    circle(580,430,90);
    fill("yellow");
    stroke("yellow");
    rect(90,40,450,20);
    rect(90,420,450,20);
    rect(40,90,20,300)
    rect(570,90,20,300)
}
function take_snapshot() {
    save("snapshot.png");
}
