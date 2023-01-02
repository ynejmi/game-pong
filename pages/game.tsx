import { Game as GameType } from "phaser";
// import pongScene from "./scenes/scene";

import React, { useEffect, useState } from "react";

function Game() {
  const [game, setGame] = useState<GameType>();

  useEffect(() => {
    const initPhaser = async () => {
      const Phaser = await import("phaser");
      const { default: pongScene } = await import("./scenes/scene");
      const phaserGame = new Phaser.Game({
        type: Phaser.AUTO,
        parent: "phaser-game",

        scale: {
        //   mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH, // not working anymore; "Centering is achieved by setting
          // the margin left and top properties of the game canvas,
          // and does not factor in any other CSS styles you may have applied."
          width: 800,
          height: 600,
        },
        physics: {
          default: "arcade",
        },
        scene: [pongScene],
      });

	  setGame(phaserGame);
    };

    initPhaser();
  }, []);
  return (
    <>
      <div id="phaser-game" key="phaser-game"></div>
    </>
  );
};

export default Game;
