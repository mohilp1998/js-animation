var elements;

function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.style('display', 'block');

    var noOfElements = 150;
    if ((windowWidth < 500) || (windowHeight < 750)){
        noOfElements = 100;
    }
    elements = new Array(noOfElements);
    for (var index = 0; index < elements.length; index++) {
        elements[index] = new Element();
    }
}

function draw() {
    background(0, 0, 50);
    // Updating to new positions all the elements
    for (var element of elements) {
        element.update();
    }
    //Displaying all the elements along with the lines
    for (var element of elements) {
        element.display(elements);
    }
}