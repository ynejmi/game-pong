/** @type {import("../typings/phaser")} */
// import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth, //temp
  height: window.innerHeight,
  physics: {
    default: "arcade",
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("paddle", "./assets/paddle.png");
  this.load.image("ball", "./assets/small_ball.png");
}

let paddle1;
let paddle2;
let ball;
let scene;
let startText;
let gameStarted = false;
let width, height;
let centerY;
let centerX;
let paddleUpperLimit; //temp
let paddleLowerLimit;

const create_paddle = (x, y) => {
  const paddle = scene.physics.add.sprite(x, y, "paddle").setImmovable(true);
  // .setOrigin(0.5);
  scene.physics.add.collider(ball, paddle, (ball) =>
    console.log(ball.body.velocity.x)
  );
  return paddle;
};

function create() {
  scene = this;

  width = scene.game.canvas.width;
  height = scene.game.canvas.height;
  centerX = width / 2;
  centerY = height / 2;

  ball = scene.physics.add
    .sprite(centerX, centerY, "ball")
    .setCollideWorldBounds(true)
    .setBounce(1.01, 1);
  // .setOrigin(0.5);

  paddle1 = create_paddle(48, centerY);
  paddle2 = create_paddle(window.innerWidth - 48, centerY);

  paddleUpperLimit = paddle1.height / 2;
  paddleLowerLimit = height - paddleUpperLimit;

  style = { fontSize: "80px", align: "center" };

  startText = scene.add
    .text(centerX, centerY / 2, "Press Space\nto Start Game", style)
    .setOrigin(0.5);

  console.log(startText);
}

const control_paddle = (paddle, y) => {
  if (!y) return;
  else if (y < paddleUpperLimit) paddle.y = paddleUpperLimit;
  else if (y > paddleLowerLimit) paddle.y = paddleLowerLimit;
  else paddle.y = y;
};

const startGame = () => {
  if (gameStarted) return;
  gameStarted = true;
  startText.visible = false;
  console.log("GAME START");
  ball.setVelocity(500, 500);
};

const stopGame = () => {
  if (!gameStarted) return;
  gameStarted = false;
  startText.visible = true;

  console.log("GAME STOP");

  ball.setVelocity(0, 0);

  ball.x = centerX;
  ball.y = centerY;
};

function update() {
  // console.log('hi');
  if (!started) {
    this.input.keyboard.on("keydown-SPACE", () => startGame());
  } else {
    this.input.keyboard.on("keydown-ESC", () => stopGame());
    control_paddle(paddle1, this.input.y);
    if (paddle2.x - ball.x < width / 4) control_paddle(paddle2, ball.y); // arbitrary npc

    // lose win
    if (ball.x < 32) {
      startText.text = "you lost";
      stopGame();
    } else if (ball.x > width - 32) {
      startText.text = "you won";
      stopGame();
    }
  }
}
