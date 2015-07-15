function Player (game, x, y) {
	this.body = game.add.sprite(x, y, 'redtankbody');
	this.head = game.add.sprite(0, 0, 'redtankhead');
	game.physics.arcade.enable(this.body);
	this.body.anchor.setTo(0.5, 0.5);
	this.head.anchor.setTo(0.45, 0.5);
	this.body.checkWorldBounds = true;
	this.body.collideWorldBounds = true;
	this.body.addChild(this.head);
	this.body.parentFcn = this;
	this.gameObjType = "PLAYER";

	this.numBullets = 0;

	this.handleMovement = function () {
		this.body.body.velocity.x = 0;
		this.body.body.velocity.y = 0;
      if (cursors.left.isDown)  { this.body.body.velocity.x = -MOVEMENT_SPEED; }
      if (cursors.right.isDown) { this.body.body.velocity.x =  MOVEMENT_SPEED; }
      if (cursors.up.isDown)    { this.body.body.velocity.y = -MOVEMENT_SPEED; }
      if (cursors.down.isDown)  { this.body.body.velocity.y =  MOVEMENT_SPEED; }
	}
}