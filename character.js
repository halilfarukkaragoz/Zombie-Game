class character {
    constructor() {
        this.x = random(500) + 100;
        this.y = random(500) + 200;
        this.v = 3;
        this.dirx = 0;
        this.diry = 0;
        this.r = 75;
        this.hp = 100;
    }

    draw() {
        if (this.dirx == 0 && this.diry == 0)
            image(adventurer, this.x, this.y, this.r , this.r );

    }

    walk() {

        this.x += this.dirx;
        this.y += this.diry;
        this.x = constrain(this.x, 0, windowWidth-this.r);
        this.y = constrain(this.y, -30, windowHeight - 50);
        if (this.dirx != 0 || this.diry != 0) {
            for(let i = 0; i <8; i++){
                image(adventurerWalk[i],this.x,this.y,this.r,this.r);
            }
    }
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

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}