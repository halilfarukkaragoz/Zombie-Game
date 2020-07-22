let c;
let z = [];
let w = [];
let f = [];
let level = 1;
function setup() {
    createCanvas(1800, 900);
    c = new character();
    for (let i = 0; i < level; i++) {
        z.push(new zombies());
        
    }
    for (let i = 0; i < level; i++) {
        w.push(new wall());
        w[i].x += i * 300 / level;
    }
    for(let i = 0; i < level/3; i ++){
        f.push(new fire());
    }


    frameRate(60);
}



function draw() {
    background(0)
    c.draw();
    c.walk();
    keyPressed();
    for (let i = 0; i < z.length; i++) {
        z[i].follow();
        z[i].draw();
        z[i].kill();
    }
    for (let i = 0; i < w.length; i++) {
        w[i].draw();
        w[i].cross();
    }
    for(let i = 0; i < f.length; i++)
    f[i].draw();
    console.log(c.hp);
    f[0].die();
    levelUp();
    start();
    gameover();
    scoreAndHp()
}



function levelUp() {
    let x = 1600;
    let y = 100;
    let r = 50;
    fill("blue");
    circle(x, y, r);
    if (sqrt((x - c.x) * (x - c.x) + (y - c.y) * (y - c.y)) < r + c.r - 20) {
        level++;
        c = new character();
        z = [];
        w = [];
        f = [];
        for (let i = 0; i < level; i++) {
            z.push(new zombies());
        }
        for(let i = 0; i < level-1; i ++){
            f.push(new fire());
        }
        for (let i = 0; i < level; i++) {
            w.push(new wall());
            w[i].x += i * 300;
        }
        keyCode = "0";

    }
}

function start(){
    for(let i = 0 ; i < w.length; i++)
    if(c.x+c.r -30>w[i].x && c.x -c.r +25 < w[i].x+w[i].width && c.y +c.r -30>w[i].y && c.y-c.r +30<w[i].y +w[i].height){
        c = new character();
    }

}

function gameover(){
    if(c.hp <= 0){
        alert("You lost your score is"+ " " + level);
        c.hp = 100;
        location.reload();

    }
   
}


function scoreAndHp(){
    fill("orange");
    textSize(50);
    text("HP : "+c.hp,100,850);
    text("Level :"+level,500,100);
}