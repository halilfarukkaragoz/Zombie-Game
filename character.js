class character {
    constructor() {
        this.x = random(500) + 100;
        this.y = random(500) + 200;
        this.v = 3;
        this.dirx = 0;
        this.diry = 0;
        this.r = 50;
        this.hp = 100;
    }

    draw() {
        fill(255);
        circle(this.x, this.y, this.r);

    }

    walk() {

        this.x += this.dirx;
        this.y += this.diry;
        this.x = constrain(this.x,0,1800);
        this.y =constrain(this.y,0,900)
    }


}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            c.diry = -5;
            c.dirx = 0;
            break;
        case DOWN_ARROW:
            c.diry = +5;
            c.dirx = 0;
            break;
        case RIGHT_ARROW:
            c.dirx = 5;
            c.diry = 0;
            break;
        case LEFT_ARROW:
            c.dirx = -5;
            c.diry = 0;
            break;
        default:
            c.dirx = 0;
            c.diry = 0;
            break;
    }
}

