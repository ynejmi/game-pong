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

console.log(game);

function preload() {
  this.load.image("paddle", "./assets/paddle.png");
  this.load.image("ball", "./assets/small_ball.png");
}

let paddle1;
let paddle2;
let ball;
let scene;
let gameStarted = false;
let width, height;
let centerY;
let centerX;
let paddleUpperLimit; //temp
let paddleLowerLimit;

const create_paddle = (x, y) => {
  const paddle = scene.physics.add.sprite(x, y, "paddle");
  paddle.setImmovable(true);

  return paddle;
};

function create() {
  scene = this;

  width = scene.game.canvas.width;
  height = scene.game.canvas.height;
  centerX = width / 2;
  centerY = height / 2;

  ball = scene.physics.add.sprite(centerX, centerY, "ball");
  ball.setCollideWorldBounds(true);
  ball.setBounce(1, 1);

  console.log(ball);

  paddle1 = create_paddle(48, centerY);
  paddle2 = create_paddle(window.innerWidth - 48, centerY);

  paddleUpperLimit = paddle1.height / 2;
  paddleLowerLimit = height - paddleUpperLimit;

  scene.physics.add.collider(ball, paddle1);
  scene.physics.add.collider(ball, paddle2);
}

const control_paddle = (paddle, y) => {
  if (!y) return;
  else if (y < paddleUpperLimit) paddle.y = paddleUpperLimit;
  else if (y > paddleLowerLimit) paddle.y = paddleLowerLimit;
  else paddle.y = y;

  console.log(paddle.body.velocity.y);
};

const startGame = () => {
  gameStarted = true;
  console.log("GAME START");
  ball.setVelocity(500, 500);
};

function update() {
  if (!gameStarted) this.input.keyboard.on("keydown-A", () => startGame());
  control_paddle(paddle1, this.input.y);
  if (paddle2.x - ball.x < width / 4) control_paddle(paddle2, ball.y);
}
