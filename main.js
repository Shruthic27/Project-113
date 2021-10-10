function preload(){
}

function setup() {
    canvas = createCanvas(840, 640);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    
}

function ts(){
  save('photo.png')
  }

function draw(){
    image(video, 125, 100, 540, 440);
    
    fill("yellow")
  circle(125, 80, 50)
  circle(665, 80, 50)
  circle(665, 550, 50)
  circle(125, 550, 50)

  fill("blue")
  circle(395, 80, 50)
  circle(395, 550, 50)
  circle(660, 315, 50)
  circle(125, 315, 50)

  
}


