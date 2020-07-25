//objects
let c;
let z = [];
let w = [];
let f = [];
//
let level = 1;
//images
let adventurer;
let adventurerWalk = [];
let zombieWalk = [];
let backgroundimg;
let wallimg;
let door;
let fireimg;

function preload() {
    adventurer = loadImage("images/adventurer/character_malePerson_idle.png");
    for (let i = 0; i < 8; i++) {
        adventurerWalk[i] = loadImage("images/adventurer/walk" + i + ".png")
        zombieWalk[i] = loadImage("images/zombie/character_zombie_walk" + i + ".png")
    }
    backgroundimg = loadImage("images/map/resim.jpg");
    wallimg = loadImage("images/map/wall.jpg");
    door = loadImage("images/map/door.jpg")
    fireimg = loadImage("images/map/fire.gif")
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    c = new character();
    for (let i = 0; i < level; i++) {
        z.push(new zombies());

    }
    for (let i = 0; i < level; i++) {
        w.push(new wall());
        w[i].x += i * 300 / level;
    }
    for (let i = 0; i < level / 3; i++) {
        f.push(new fire());
    }
    alert("Game is a simple zombie game.\n The aim of the game is to reach the door \n Run from zombies and don't forget that both you and zombies can hurt by fire \nIf you played with your phone you can use virtual keys left bottom on the screen for move")

    frameRate(60);

}



function draw() {
    background(backgroundimg)
    c.draw();
    c.walk();
    for (let i = 0; i < z.length; i++) {
        z[i].follow();
        z[i].draw();
        z[i].kill();
    }
    for (let i = 0; i < w.length; i++) {
        w[i].draw();
        w[i].cross();
    }
    for (let i = 0; i < f.length; i++) {
        f[i].draw();
        f[i].die();
    }
    levelUp();
    start();
    gameover();
    scoreAndHp()
    drawPanel();
}

let i = 0;
setTimeout(function () { i++; }, 3000);
function levelUp() {
    let x = windowWidth - 200;
    let y = 100;
    let r = 50;
    image(door, x, y, 2 * r, 2 * r);

    if (sqrt((x - c.x - c.r / 2) * (x - c.x - c.r / 2) + (y - c.y - c.r / 2) * (y - c.y - c.r / 2)) < r + c.r / 2) {
        level++;
        c = new character();
        z = [];
        w = [];
        f = [];
        for (let i = 0; i < level; i++) {
            z.push(new zombies());
        }
        for (let i = 0; i < level - 1; i++) {
            f.push(new fire());
        }
        for (let i = 0; i < level; i++) {
            w.push(new wall());
            w[i].x += i * 300;
        }
        keyCode = "0";

    }
}

function start() {
    for (let i = 0; i < w.length; i++)
        if (c.x + c.r - 15 > w[i].x && c.x + 30 < w[i].x + w[i].width && c.y + c.r - 10 > w[i].y && c.y + 30 < w[i].y + w[i].height) {
            c = new character();
        }

}

function gameover() {
    if (c.hp <= 0) {
        alert("You lost your score is" + " " + level);
        c.hp = 100;
        location.reload();

    }

}


function scoreAndHp() {
    fill("orange");
    textSize(50);
    text("HP : " + c.hp, 100, 100);
    text("Level :" + level, 700, 100);
    fill("white");
    rect(330, 60, 200, 40);
    fill("red");
    rect(330, 60, c.hp * 2, 40)
}
function drawPanel() {
    fill("white");
    rect(windowWidth - 200, windowHeight - 200, 50, 50);
    rect(windowWidth - 255, windowHeight - 200, 50, 50);
    rect(windowWidth - 310, windowHeight - 200, 50, 50);
    rect(windowWidth - 255, windowHeight - 255, 50, 50);
}

function mouseClicked() {
    if (mouseX >windowWidth - 200 && mouseX < windowWidth -150 && mouseY > windowHeight -200 && mouseY < windowHeight -150 ) {
        c.dirx = 5;
        c.diry = 0;
    }
    else if(mouseX >windowWidth - 255 && mouseX < windowWidth -205 && mouseY > windowHeight -200 && mouseY < windowHeight -150 ) {
        c.dirx = 0
        c.diry = 5;
    }

    else if(mouseX >windowWidth - 310 && mouseX < windowWidth -260 && mouseY > windowHeight -200 && mouseY < windowHeight -150 ) {
        c.dirx = -5;
        c.diry = 0;

    }

    else if(mouseX >windowWidth - 255 && mouseX < windowWidth -205 && mouseY > windowHeight -255 && mouseY < windowHeight -205 ) {
        c.dirx = 0;
        c.diry = -5;
        
    }
}