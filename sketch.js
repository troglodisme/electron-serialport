// // Declare a "SerialPort" object
// let angle = 0;
// let latestData = "waiting for data";  // you'll use this to write incoming data to the canvas

// let button;

// function setup() {
//   createCanvas(800,800);
//   angleMode(DEGREES);
//   // button = createButton('Reset');
//   // button.position(20, 100);
//   // button.mousePressed(sendResetCommand);
// }


// // function sendResetCommand() {
// //   serial.write("r"); // write to serial arduino reset command
// // }


// function draw() {
  

//   latestData = 50;

//   background(255,255,255);
  
//   fill(0,0,255);
//   textSize(30);
//   textFont('Helvetica');

//   // setLineDash([10, 10]); //longer stitches
//   textAlign(LEFT);

//   text("Current Orientation:", 10, 50);
//   text(latestData, 290, 50);
  
//   text(data2, 10, 100);


//   textAlign(CENTER);


//   if (latestData == 180) {
//     fill(0,0,255);
//     text("[ 180 ]", width/2, 600);
//   } else {
//     fill(0,0,255);
//     text("180", width/2, 600);
//   }

//   if (latestData == 0) {
//     fill(0,0,255);
//     text("[ 0 ]", width/2, 230);
//   } else {
//     fill(0,0,255);
//     text("0", width/2, 230);
//   }
//   if (latestData == 90) {
//     fill(0,0,255);
//     text("[ 90 ]", (width/2 + 210), ( height/2 + 15));

//   } else {
//     fill(0,0,255);
//     text("90", (width/2 + 210), ( height/2 + 15));
//   }

//   if (latestData == 270) {
//     fill(0,0,255);  
//     text("[ 270 ]", (width/2 - 210), ( height/2 + 15));
//   } else {
//     fill(0,0,255);
//     text("270", (width/2 - 210), ( height/2 + 15));
//   }

 


//   rectMode(CENTER);
//   translate(width/2, height/2);

//   setLineDash([5, 10]); //longer stitches
//   stroke(0, 0, 255);
//   noFill();
//   ellipse(0, 0, 300);

//   rotate(angle);

//   fill(0,0,255);
//   noStroke();
//   ellipse(0, 0, 30);

//   //vertical rect
//   rect(0, 75, 5, 150);
//   noStroke();

//   //horizontal rect
//   rect(0, 0, 300, 5);

//   // noStroke();
//   // ellipse(150, 0, 200);

//   angle = latestData; 
// }


// function setLineDash(list) {
//   drawingContext.setLineDash(list);
// }
