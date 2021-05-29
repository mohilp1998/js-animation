maxRadius = 7;
maxVel = 1;
borderFactor = 12;
transFactor = 0.2;

class Element{
    // Constructing an basic element i.e. a circle
    constructor(){
        this.pos = createVector(random(width), random(height))
        this.vel = p5.Vector.random2D();
        var velMag = random(maxVel);
        this.vel.x = this.vel.x * velMag;
        this.vel.y = this.vel.y * velMag;
        this.radius = random(maxRadius)+ 5;
        this.transparency = random(0.2, 0.7);
        this.maxDist = sqrt(sq(width/borderFactor) + sq(height/borderFactor));
    }

    // Display method for the element
    display(elements){
        // Displaying the element itself
        noStroke();
        var rgba = 'rgba(75, 134, 242, ' + this.transparency +')';
        fill(rgba);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);

        // Find elements with width/10 and height 10
        for (var otherElements of elements) {
            if (abs(this.pos.x - otherElements.pos.x) < (width/borderFactor)) {
                if (abs(this.pos.y - otherElements.pos.y) < (height/borderFactor)) {
                    var currDist = dist(this.pos.x, this.pos.y, otherElements.pos.x, otherElements.pos.y);
                    var trans = max((this.maxDist - currDist)/this.maxDist, 0.0);
                    var rgba = 'rgba(75, 134, 242, ' + (transFactor * trans) +')';
                    stroke(rgba);
                    line(this.pos.x, this.pos.y, otherElements.pos.x, otherElements.pos.y);
                }
            }
        }
    }

    // Updating position logic based on velocity
    update(){
        // Getting new position of the element itself
        this.pos.add(this.vel);
        if (this.pos.x > width - this.radius || this.pos.x < this.radius) {
            this.vel.x *= -1;
        }
        if (this.pos.y > height - this.radius || this.pos.y < this.radius) {
            this.vel.y *= -1;
        }
    
    }
}