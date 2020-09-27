let points = [];
function setup(){
    createCanvas(800, 800);
}

function mousePressed(){
    let vector = createVector(mouseX, mouseY);
    points.push(vector);
}

function draw(){
    background(50);
    stroke(255);
    strokeWeight(5);
    ellipse(mouseX, mouseY, 5, 5);
    strokeWeight(10);
    for(let i=0; i<points.length; i++){
        let {x, y, px, py} = points[i];
        line(x, y, px, py);
    }

    if(mouseIsPressed === true){
        points.push({
            x: mouseX,
            y: mouseY,
            px: pmouseX,
            py: pmouseY
        });
    }
}