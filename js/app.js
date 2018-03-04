// Enemies our player must avoid
var Enemy = function(row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // The initial position of our enemies
    this.x = 0;
    this.y = row; // initiate enemy in the proper row

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
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
    

    switch (key) {
        case 'up': 
            this.y -= 101;
            break;
        case 'down':
            this.y += 101;
            break;
        case 'left':
            xPos -= 101;
            console.log(xPos);
            if (xPos <= 0) { this.x = 0 } else { this.x = xPos};
            break;
        case 'right':
            
            xPos += 101;
            console.log(xPos);
            if (xPos >= 404) { this.x = 404 } else { this.x = xPos };
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

for ( i = 0 ;i < numEnemies ; i++) {

    let aEnemy = new Enemy(101*i);
    allEnemies.push(aEnemy);

};

let player = new Player(404);


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
