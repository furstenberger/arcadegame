// Enemies our player must avoid
var Enemy = function(row, defaultSpeed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // The initial position of our enemies
    this.x = 0;
    this.y = row; // initiate enemy in the proper row
    this.speed = defaultSpeed; // set a default speed for the enemy

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (dt + this.speed);

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
let Player = function(row) {

    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';

    // The initial position of our player
    this.x = 202;
    this.y = row; // initiate enemy in the proper row

}

// This class requires an update(), render() and
// a handleInput() method.

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Draw the enemy on the screen, required method for game
Player.prototype.handleInput = function (key) {
    
    let xPos = this.x;
    let yPos = this.y;

    let xStep = 101; // number of pixels in the canvas let the player in the middle of the blocks in x axis
    let yStep = 83;  // number of pixels in the canvas let the player in the middle of the blocks in y axis

    let minX = 0;    // minimum player position in the canvas - x axis
    let maxX = 404;  // maximum player position in the canvas - x axis

    let minY = -11;  // minimum player position in the canvas - y axis 
    let maxY = 404;  // maximum player position in the canvas - y axis

    switch (key) {
        case 'up':
            console.log(yPos); 
            yPos -= yStep;
            console.log(yPos);
            if (yPos <= minY) { this.y = minY } else { this.y = yPos }; // test if player goes out of bounds
            break;
        case 'down':
            yPos += yStep;
            console.log(yPos);
            if (yPos >= maxY) { this.y = maxY } else { this.y = yPos }; // test if player goes out of bounds
            break;
        case 'left':
            xPos -= xStep;
            if (xPos <= minX) { this.x = minX } else { this.x = xPos}; // test if player goes out of bounds
            break;
        case 'right':           
            xPos += xStep;
            if (xPos >= maxX) { this.x = maxX } else { this.x = xPos }; // test if player goes out of bounds
            break;
        default:
            break;
    }
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];

let numEnemies = 3; // define how many enemies we want in the game
let speed1 = 2;     // define speed as 1 pixel per update 

for ( i = 0 ; i < numEnemies ; i++) {

    let initialYPosition = 238 - i*83;

    let aEnemy = new Enemy(initialYPosition, speed1);
    allEnemies.push(aEnemy);

};

let player = new Player(404); // 404 is the player y initial position on the canvas


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
