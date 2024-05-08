/* draw a brown wooden boat with a white sail on top of a blue ocean
   - the sky is light blue with one white cloud
   - the cloud has three different sized circles that overlap each other
   - the sun is a yellow circle inside a yellow-orange circle inside an orange circle in the top right corner of the canvas
   - the sail is a large white triangle connected to the top of the dark brown mast down to the tip of the boat 
   - the boat is curved at the bottom and has a dark brown rectangle for the body
*/

function setup() { 
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //sky
  fill(135, 206, 250);
  rect(0, 0, 400, 300);
  
  //cloud
  fill(255);
  ellipse(50, 50, 50, 50);
  ellipse(70, 50, 70, 70);
  ellipse(90, 50, 50, 50);
  
  //sun
  fill(255, 165, 0);
  ellipse(350, 50, 100, 100);
  fill(255, 215, 0);
  ellipse(350, 50, 80, 80);
  fill(255, 255, 0);
  ellipse(350, 50, 60, 60);
  
  //ocean
  fill(0, 0, 255);
  rect(0, 300, 400, 100);
  
  //boat
  fill(139, 69, 19);
  rect(150, 300, 100, 50, 20);
  
  //mast
  fill(139, 69, 19);
  rect(200, 200, 10, 100);
  
  //sail
  fill(255);
  triangle(200, 200, 200, 100, 250, 200);
}