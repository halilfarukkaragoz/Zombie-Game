class wall {
    constructor() {
        this.x = 200;
        this.y = random(900);
        this.width = random(100) + 50;
        this.height = random(600) + 300;
    }

    draw() {
        fill(255);
        rect(this.x ,this.y , this.width, this.height);
    }
    cross(){
        if(c.x+c.r -25>this.x && c.x -c.r +20 < this.x+this.width && c.y +c.r -20>this.y && c.y-c.r +20<this.y +this.height){
            c.dirx = 0;
            c.diry = 0;
        }

        for(let i = 0; i < z.length ; i++){
            if(z[i].x+z[i].r -25>this.x && z[i].x -z[i].r +20 < this.x+this.width && z[i].y +z[i].r -20>this.y && z[i].y-z[i].r +20<this.y +this.height){
                z[i].vx = -z[i].vx
                z[i].vy = -z[i].vy
            }
           else if(z[i].x+z[i].r -25>1800 )
           {
            z[i].vx = -2
           }
           else if(z[i].x -z[i].r +20 < 0){
            z[i].vx = 2
           }
           else if ((z[i].y-z[i].r +20<0)){
            z[i].vy =-2 
           }
           else if ((z[i].y +z[i].r-20 > 900)){
            z[i].vy =2
           }
        }
    }
}

class fire {
    constructor(){
        this.x = random(1800) ;
        this.y = random(900);
        this.r = 1;
        this.spreadv = random(0.3);
    }

    draw(){
        fill(255,0,0);
        circle(this.x,this.y,this.r)
        this.r += this.spreadv;
    }
    die(){
        if(sqrt((this.x-c.x)*(this.x-c.x) +(this.y-c.y)*(this.y-c.y))<+this.r-20){
            c.hp -=0.5;
        }
    }

}