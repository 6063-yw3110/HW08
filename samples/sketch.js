let img;
let colorReplacementSlider;
let MONDRIAN_BLUE = { r: 0, g: 0, b: 225};
let MONDRIAN_YELLOW = { r: 255, g: 255, b: 0 };
let MONDRIAN_RED = { r: 255, g: 0, b: 0 };
let maxSimilarityValue = 255;

function preload() {
  img = loadImage('Piet_Mondriaan.jpeg'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let aspectRatio = img.width / img.height;
  let canvasHeight = windowHeight;
  let canvasWidth = canvasHeight * aspectRatio;
  
  image(img, (width - canvasWidth) / 2, 0, canvasWidth, canvasHeight);
  
  colorReplacementSlider = createSlider(0, maxSimilarityValue, 0); // 初始化在最左边位置
  colorReplacementSlider.position(20, 20);
  
  let replaceColorsButton = createButton('click to replace');
  replaceColorsButton.position(150, 20);
  replaceColorsButton.mousePressed(replaceColors);
}

function draw() {

}

function replaceColors() {
  let similarityValue = colorReplacementSlider.value();
  
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];
    
    if (isSimilar(r, g, b, MONDRIAN_BLUE.r, MONDRIAN_BLUE.g, MONDRIAN_BLUE.b, similarityValue)) {
      pixels[i] = 0; 
      pixels[i + 1] = 128;
      pixels[i + 2] = 128;
    }
    
    if (isSimilar(r, g, b, MONDRIAN_YELLOW.r, MONDRIAN_YELLOW.g, MONDRIAN_YELLOW.b, similarityValue)) {
      pixels[i] = 255; 
      pixels[i + 1] = 165;
      pixels[i + 2] = 0;
    }
    
    if (isSimilar(r, g, b, MONDRIAN_RED.r, MONDRIAN_RED.g, MONDRIAN_RED.b, similarityValue)) {
      pixels[i] = 0; 
      pixels[i + 1] = 128;
      pixels[i + 2] = 0;
    }
  }
  updatePixels();
}

function isSimilar(r1, g1, b1, r2, g2, b2, threshold) {
  let dr = abs(r1 - r2);
  let dg = abs(g1 - g2);
  let db = abs(b1 - b2);
  
  return dr < threshold && dg < threshold && db < threshold;
}
