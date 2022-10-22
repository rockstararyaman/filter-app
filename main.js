function preload() {

}

function setup() {

canvas = createCanvas(400, 400);
canvas.position(470, 200);
video = createCapture(VIDEO);
video.hide();

tintcolor= "";
}

function draw() {

image(video,0,0,400,400);
tint(tintcolor);

}

function takesnapshot() {
    save('student.png');
}

function filtertint() {
tintcolor = document.getElementById("colorname").value; 

}