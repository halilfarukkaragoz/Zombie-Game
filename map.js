class wall {
    constructor() {
        this.x = 200;
        this.y = random(windowHeight);
        this.width = random(100) + 50;
        this.height = random(600) + 300;
    }

    draw() {
       image(wallimg,this.x,this.y,this.width,this.height);
    }
    cross(){
        if(c.x+c.r-5 >this.x && c.x  +20 < this.x+this.width && c.y +c.r >this.y && c.y<this.y +this.height-20){
            c.dirx = 0;
            c.diry = 0;
        }

        for(let i = 0; i < z.length ; i++){
            if(z[i].x+z[i].r>this.x && z[i].x +20 < this.x+this.width && z[i].y +z[i].r -20>this.y && z[i].y +20<this.y +this.height){
                z[i].vx = -z[i].vx
                z[i].vy = -z[i].vy
            }
           else if(z[i].x+z[i].r >windowWidth )
           {
            z[i].vx = -2
           }
           else if(z[i].x  < 0){
            z[i].vx = 2
           }
           else if ((z[i].y+20<0)){
            z[i].vy =-2 
           }
           else if ((z[i].y +z[i].r > windowHeight)){
            z[i].vy =2
           }
        }
    }
}

class fire {
    constructor(){
        this.x = random(windowWidth) ;
        this.y = random(windowHeight);
        this.r = 1;
        this.spreadv = random(0.3);
    }

    draw(){
        image(fireimg,this.x,this.y,this.r,this.r);
        this.r += this.spreadv;
        this.x -=this.spreadv/2;
        this.y -=this.spreadv/2;
    }
    die(){
        if(sqrt((this.x+this.r/2 - (c.x+c.r/2)) * (this.x+this.r/2 - (c.x+c.r/2)) + (this.y+this.r/2 - (c.y+c.r/2)) * (this.y+this.r/2 - (c.y+c.r/2)))<+this.r-10){
            c.hp -=0.5;
        }
    }

}

