
var dropZone;
var storeRGB;
var regexRGB;
var regexStore = [];
var drawStore = [];
// var droppedImg;
// var droppedImg;
// var droppedImg2;
// var counter = 0;

///text
var inputText = '';
var allStrings;
var lines;
var allLines;
var txt
var lineArray = [];
var wordArray = [];
var arrayMapped;
var finalArray = [];
var tempString;
var finalString;
var Done = false;


// This example also includes a slider
var slider;
// Variable to keep track of slider value (a bit redundant)
var percent = 5;

// Many DOM elements
var input, button, sample, clearButton;

// An array to keep track of all the new DOM elements being added
var paragraphs = [];

var inputText = '';

function preload() {
  lines = loadStrings('last.txt');
}


function setup() {
  dropZone = createDiv('Drop imgs here twice!');
  dropZone.id('drop_zone');
  // When the user drags a file over the div
  dropZone.dragOver(highlight);
  var c = createCanvas((window.innerWidth*.5), (window.innerHeight*.5));
  c.class('canvas');
  background(240);
  // Selecting the text field and button
  input = select('#textinput');
  button = select('#submit');
  // What to do when button pressed
  // button.mousePressed(handleInput);

  // Slider
  slider = select("#percentslider");
  // slider.input(changePercent);

  // This link allows quick testing with a file
  // that's ready to load instantly
  sample = select('#sample');
  // sample.mousePressed(loadFile);

  // This button clears the new paragraph elements
  // added
  clearButton = select('#clear');
  // clearButton.mousePressed(clearText);


  ///original///
  // This link allows quick testing with a file
  // that's ready to load instantly
  // dropZone.drop(gotFile, unHighlight);
 //   // Not using this event in this example
 //   // dropZone.dragLeave(someHandler);

 //   // When the file is "dropped" we need two callbacks
 //   // One to handle the dropping event
 //   // One to handle the files when they are ready
 dropZone.drop(gotFile, unHighlight);


  ///regex images
  drawRegex();

  ////text
  allLines = join(lines, " ");
  lineArray = split(allLines, ",");
  var words = join(lineArray, " ");
  wordArray = split(words, " ");
  console.log(wordArray);

  var p2 = createP('');
  p2.class('pear');
  p2.id('pearID');

}

// Load a file for quick testing
function loadFile() {
  loadStrings('question.txt', fileLoaded);
}

// When the file is loaded
function fileLoaded(data) {
  var txt = data.join('\n');

  // input.html(txt);
  // Note the use of a function that will "process" the text
  // This is b/c the text might come in a number of different ways
  // process(txt);
}

function gotFile(file) {
  var img = createImg(file.data).hide();
  // Draw the image onto the canvas
  image(img, 0, 0, width, height);
  setTimeout(function(){
    loadPixels();
    image(img, 0, 0, width, height);
    for (var i = 0; i < width*height*4; i+=35) {
      if(pixels[i] < 230 || pixels[i] > 250){
        // console.log("r", pixels[i]);
        // console.log("g", pixels[i] + 1);
        // console.log("b", pixels[i] + 2);
        // console.log("a", pixels[i] + 3);
        storeRGB = (pixels[i] + (pixels[i] + 1) + (pixels[i] + 2));
        var passRGB = (pixels[i] + (pixels[i] + 1) + (pixels[i] + 2));
        storeRegex(passRGB);

        console.log("pixel value: " + storeRGB);

         var storeMap = floor(map(storeRGB, 0, 765, 0, 4733));
        //  console.log("mapped RGB value: " + storeMap);
        //  console.log(wordArray[storeMap]);
         append(finalArray, wordArray[storeMap]);
         tempString = join(finalArray, " ");
         finalString = tempString.split(',').join(' ');
        // console.log(finalString);
      }

    }
    drawRegex();
    // console.log(finalString);
    var div = document.getElementById('pearID');
    div.innerHTML += finalString;

  }, 1000);
}


function storeRegex(regexRGB){
  console.log(regexRGB);
  regexStore = append(regexStore, regexRGB);
  console.log(regexStore);
}

function drawRegex(){
  ///max 765
  for (i = 0; i < regexStore.length; i++){
    if (regexStore[i] < 100 && regexStore[i] > 0){
      drawStore = append(drawStore, "#");
    }
    if (regexStore[i] < 200 && regexStore[i] > 100){"&"
      drawStore = append(drawStore, "&");
    }
    if (regexStore[i] < 300 && regexStore[i] > 200){"*"
      drawStore = append(drawStore, "*");
    }
    if (regexStore[i] < 400 && regexStore[i] > 300){"o"
      drawStore = append(drawStore, "o");
    }
    if (regexStore[i] < 500 && regexStore[i] > 400){
      drawStore = append(drawStore, "~");
    }
    if (regexStore[i] < 600 && regexStore[i] > 500){"."
      drawStore = append(drawStore, ".");
    }
    if (regexStore[i] < 500 && regexStore[i] > 400){" "
      drawStore = append(drawStore, " ");
    }
    if (regexStore[i] < 600 && regexStore[i] > 500){"  "
      drawStore = append(drawStore, "  ");
    }
    if (regexStore[i] > 600){
      drawStore = append(drawStore, "     ");
    }
  }
  console.log(drawStore);

  // // This is how to make everything back to one big paragraph with join()
  var output = drawStore.join('');
  console.log(output);
  var draw1 = createP(output);
  draw1.class('drawing');

}





// highlight and unhighlight the div
function highlight() {
  dropZone.style('background', '#AAA');
}

function unHighlight() {
  dropZone.style('background','');
}

// Handle the text input field
function handleInput() {
  process(input.value());
}

// Clear all the divs with remove()
function clearText() {
  input.html('');
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].remove();
  }
  paragraphs = [];
}

// Handle event when slider changes
function changePercent() {
  var span = select('#percent');
  // Set global variable for use
  percent = slider.value();
  // Update the span element to display in browser
  span.html(percent);
}


//
// function setup() {
//
//   createCanvas(screen.width, screen.height);
//
//   // Make a div to drag a file on, equivalent of
//   // <div id="drop_zone">Drop files here</div>
//   dropZone = createDiv('Drop files here');
//   dropZone.id('drop_zone');
//
//   // When the user drags a file over the div
//   dropZone.dragOver(highlight);
//
//   // Not using this event in this example
//   // dropZone.dragLeave(someHandler);
//
//   // When the file is "dropped" we need two callbacks
//   // One to handle the dropping event
//   // One to handle the files when they are ready
//   dropZone.drop(gotFile, unHighlight);
//
// }
//
// // highlight and unhighlight the div
// function highlight() {
//   dropZone.style('background', '#AAA');
// }
//
// function unHighlight() {
//   dropZone.style('background','');
// }
//
//
//
// var img;
// // file is a p5.File object that has metadata, and the file's contents
// function gotFile(file) {
//   // Make a div to display info about the file
//   // var fileDiv = createDiv(file.name + ' ' + file.type + ' ' + file.subtype + ' ' + file.size + ' bytes');
//   // Assign a CSS class for styling (see index.html)
//   // fileDiv.class('file');
//
//   // Hanlde image and text differently
//   if (file.type === 'image') {
//
//     // console.log(file.data);
//     // droppedImg = createImg(file.data);
//
//     img = createImg(file.data).hide();
//     image(img, 0, 0, 100, 200);
//      // Draw the image onto the canvas
//     // droppedImg.loadPixels();
//     // droppedImg.class('thumb');
//     //
//     // console.log(droppedImg.src);
//     // droppedImg2 = createImage(droppedImg.src);
//     // droppedImg2.class('scanImg');
//     // droppedImg2.id('my-node');
//     // Dropped = true;
//     //
//     // console.log(droppedImg2.src);
//
//     // console.log(droppedImg.src.width);
//     // getValue(droppedImg);
//
//
//   } else if (file.type === 'text') {
//     // Make a paragraph of text
//     // var par = createP(file.data);
//     // par.class('text');
//   }
// }
//
// function draw(){
//     // if (Dropped == true){
//     //   // image(droppedImg2, 0, 0);
//     //   // getValue(droppedImg2);
//     //
//     //
//     //   // console.log("draw: " + droppedImg2);
//     //   noLoop();
//     // }
// }
//
// function getValue(img){
//   loadPixels();
//   console.log(width);
//
//   // var node = document.getElementById('my-node');
//   // console.log(node);
//   // domtoimage.toPixelData(node)
//   //   .then(function (pixels) {
//   //     // console.log(node.scrollHeight + node.scrollWidth);
//   //     var pixelD = 100;
//   //       for (var y = 0; y < node.scrollHeight; y+= pixelD) {
//   //         for (var x = 0; x < node.scrollWidth; x+= pixelD) {
//   //           pixelAtXYOffset = (4 * y * node.scrollHeight) + (4 * x);
//   //           /* pixelAtXY is a Uint8Array[4] containing RGBA values of the pixel at (x, y) in the range 0..255 */
//   //           pixelAtXY = pixels.slice(pixelAtXYOffset, pixelAtXYOffset + 4);
//   //           pixelAtXY[0] = R;
//   //           pixelAtXY[1] = G;
//   //           pixelAtXY[2] = B;
//   //           pixelAtXY[3] = A;
//   //
//   //           console.log(pixelAtXY);
//   //         }
//   //       }
//   //   });
//
//   for (var x = 0; x < width; x+=4) {
//     for (var y = 0; y < height; y+=4) {
//       console.log(pixels[x+y*width]);
//       pixels[x+y*width] = R;
//       pixels[x+y*width+1] = G;
//       pixels[x+y*width+2] = B;
//       pixels[x+y*width+3] = A;
//       console.log("R: " + R + "G: " + G + "B: " + B + "A: " + A);
//     }
//   }
//
//   updatePixels();
//
// }
