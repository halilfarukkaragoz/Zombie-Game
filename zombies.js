class zombies {
    constructor() {
        this.x = random(1800);
        this.y = random(200);
        this.vx = random(3);
        this.vy = random(3);
        this.r = c.r;
    }

    draw() {
        for (let i = 0; i < 8; i++) {
            image(zombieWalk[i], this.x, this.y, this.r , this.r );
        }
    }

    follow() {
        if (c.x+c.r > this.x+c.r) this.x += this.vx
        else if (c.x+c.r < this.x+c.r) this.x -= this.vx

        if (c.y+c.r > this.y+c.r) this.y += this.vy
        else if (c.y+c.r < this.y+c.r) this.y -= this.vy

    }

    kill() {
        if (sqrt((this.x+this.r - (c.x+this.r)) * (this.x+this.r - (c.x+this.r)) + (this.y+this.r - (c.y+this.r)) * (this.y+this.r - (c.y+this.r))) < 40) {
            c.hp -= 5;
        }
        for (let i = 0; i < f.length; i++) {
            if (sqrt((this.x - f[i].x) * (this.x - f[i].x) + (this.y - f[i].y) * (this.y - f[i].y)) - f[i].r < 0) {
                this.x = -100
                this.y = -100;
                this.vx = 0;
                this.vy = 0;


            }
        }
    }
}