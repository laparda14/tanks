var PLAYER_ROTATION_SPEED = 2000;
var PLAYER_MOVEMENT_SPEED = 100; // 100
var PLAYER_LIVES = 2000;
var SLOW_BULLET_SPEED = 160;
var FAST_BULLET_SPEED = 320;
var PLAYER_BULLET_LIMIT = 300;
var PLAYER_BULLET_SPEED = 160; // 160
var PLAYER_RICOCHET = 10;
var GAME_WIDTH = 1200;
var GAME_HEIGHT = 800;
var WALL_WIDTH = 40;
var WALL_HEIGHT = 40;


var O_PLAYER_ROTATION_SPEED = 2000;
var O_PLAYER_MOVEMENT_SPEED = 100;
var O_PLAYER_BULLET_LIMIT = 300;
var O_PLAYER_BULLET_SPEED = 160;
var O_PLAYER_LIVES = 2000;

function restoreConfig () {
	PLAYER_ROTATION_SPEED = O_PLAYER_ROTATION_SPEED;
	PLAYER_MOVEMENT_SPEED = O_PLAYER_MOVEMENT_SPEED;
	PLAYER_BULLET_LIMIT = O_PLAYER_BULLET_LIMIT;
	PLAYER_BULLET_SPEED = O_PLAYER_BULLET_SPEED;
	PLAYER_LIVES = O_PLAYER_LIVES;
}
