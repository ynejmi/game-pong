import { Game as GameType } from "phaser";

import React, { useEffect, useState } from "react";

const Game = () => {
  const [game, setGame] = useState<GameType>();

  useEffect(() => {
    const initPhaser = async () => {
      const Phaser = await import("phaser");
      const { default: pongScene } = await import("./scenes/scene");

      const config = {
        type: Phaser.AUTO,
        parent: "phaser-game",

        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: 800,
          height: 600,
        },
        physics: {
          default: "arcade",
        },
        scene: [pongScene],
      };

      const phaserGame = new Phaser.Game(config);

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
