input = "";

function preload() {
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.position(665, 450);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 450);
}


function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Staus: Detecting Objects";
    input = document.getElementById("input").value;
}

function modelLoaded() {
    console.log("Your Model Has Been Initialized");
    status = true;
}