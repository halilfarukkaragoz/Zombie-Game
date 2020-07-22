class zombies {
    constructor() {
        this.x = random(1800);
        this.y = random(200);
        this.vx = random(3);
        this.vy = random(3);
        this.r = c.r;
    }

    draw() {
        fill("green");
        circle(this.x, this.y, this.r);
    }

    follow() {
        if (c.x > this.x) this.x += this.vx
        else if (c.x < this.x) this.x -= this.vx

        if (c.y > this.y) this.y += this.vy
        else if (c.y < this.y) this.y -= this.vy

    }

    kill() {
        if (sqrt((this.x - c.x) * (this.x - c.x) + (this.y - c.y) * (this.y - c.y)) < 30) {
            c.hp -= 5;
        }
        for (let i = 0; i < f.length; i++) {
            if (sqrt((this.x - f[i].x) * (this.x - f[i].x) + (this.y - f[i].y) * (this.y - f[i].y))-f[i].r < 0){
            this.x =-100
            this.y = -100;
            this.vx = 0;
            this.vy = 0;
            

            }
    }
    }
}