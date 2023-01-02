import { Scene } from "phaser";

export default class pongScene extends Scene {
  paddle1: Phaser.Physics.Arcade.Sprite;
  paddle2: Phaser.Physics.Arcade.Sprite;
  ball: Phaser.Physics.Arcade.Sprite;

  startText: Phaser.GameObjects.Text;
  gameStarted: boolean = false;

  width: number;
  height: number;

  centerY: number;
  centerX: number;

  paddleUpperLimit: number;
  paddleLowerLimit: number;

  createPaddle = (x: number, y: number) => {
    const paddle = this.physics.add
      .sprite(x, y, "paddle")
      .setImmovable(true)
      .setScale(0.5);
    // .setOrigin(0.5);
    this.physics.add.collider(this.ball, paddle
    );
    return paddle;
  };

  preload() {
    this.load.image("paddle", "assets/paddle.png");
    this.load.image("ball", "assets/small_ball.png");
  }

  create() {
    this.width = this.game.canvas.width;
    this.height = this.game.canvas.height;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;

    this.ball = this.physics.add
      .sprite(this.centerX, this.centerY, "ball")
      .setCollideWorldBounds(true)
      .setScale(0.5)
      .setBounce(1.01, 1);
    // .setOrigin(0.5);

    this.paddle1 = this.createPaddle(48, this.centerY);
    this.paddle2 = this.createPaddle(this.width - 48, this.centerY);

    this.paddleUpperLimit = this.paddle1.displayHeight / 2;
    this.paddleLowerLimit = this.height - this.paddleUpperLimit;

    // console.log(this.paddleUpperLimit, );
    // console.log(this.paddleUpperLimit, this.paddleLowerLimit);

    // style: Phaser.GameObjects.TextStyle = { fontSize: "80px", align: "center" };

    this.startText = this.add
      .text(this.centerX, this.centerY / 2, "Press Space\nto Start Game", {
        fontSize: "40px",
        align: "center",
      })
      .setOrigin(0.5);

    // console.log(this.startText);
  }

  controlPaddle = (paddle: Phaser.Physics.Arcade.Sprite, y: number) => {
    if (!y) return;
    else if (y < this.paddleUpperLimit) paddle.y = this.paddleUpperLimit;
    else if (y > this.paddleLowerLimit) paddle.y = this.paddleLowerLimit;
    else paddle.y = y;
  };

  startGame = () => {
    if (this.gameStarted) return;
    this.gameStarted = true;
    this.startText.visible = false;
    this.startText.text = "Press Space\nto Start Game";
    console.log("GAME START");
    this.ball.setVelocity(500, 500);
  };

  stopGame = () => {
    if (!this.gameStarted) return;
    this.gameStarted = false;
    this.startText.visible = true;

    console.log("GAME STOP");

    this.ball.setVelocity(0, 0);

    this.ball.x = this.centerX;
    this.ball.y = this.centerY;
  };

  update() {
    // console.log('hi');
    if (!this.gameStarted) {
      this.input.keyboard.on("keydown-SPACE", () => this.startGame());
    } else {
      this.input.keyboard.on("keydown-ESC", () => this.stopGame());
      this.controlPaddle(this.paddle1, this.input.y);
      if (this.paddle2.x - this.ball.x < this.width / 4)
        this.controlPaddle(this.paddle2, this.ball.y); // arbitrary npc

      // lose win
      if (this.ball.x < 32) {
        this.startText.text = "you lost";
        this.stopGame();
      } else if (this.ball.x > this.width - 32) {
        this.startText.text = "you won";
        this.stopGame();
      }
    }
  }
}
