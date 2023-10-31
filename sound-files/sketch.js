let fileNames = ["./DRYFLOWER.mp3"];

let songs = [];
let currentSongIndex;
let currentSong;
let amplitude;

let rectangles = [];
let backgroundImage; 

function preload() {
  for (let i = 0; i < fileNames.length; i++) {
    songs.push(loadSound(fileNames[i]));
  }
  backgroundImage = loadImage("daisy.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentSongIndex = 0;
  currentSong = songs[currentSongIndex];
  amplitude = new p5.Amplitude();
  amplitude.setInput(currentSong);
}

function draw() {
  background(0); 

  let level = amplitude.getLevel();

  if (level > 0.1) {
    let x = random(width);
    let c = color(random(255), random(255), random(255));
    let rectSize = map(level, 0, 1, 10, 100);

    rectangles.push({ x: x, y: 0, color: c, size: rectSize });
  }

  for (let i = rectangles.length - 1; i >= 0; i--) {
    let rectObj = rectangles[i];
    fill(rectObj.color);
    noStroke();
    rect(rectObj.x, rectObj.y, rectObj.size, rectObj.size);
    rectObj.y += 5;

    if (rectObj.y > height) {
      rectangles.splice(i, 1);
    }
  }
  
  image(backgroundImage, 0, 0, width, height); 
}

function keyReleased() {
  if (key == "s") {
    currentSong.stop();
  } else if (key == "p") {
    if (currentSong.isPlaying()) {
      currentSong.pause();
    } else {
      currentSong.play();
    }
  } 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
