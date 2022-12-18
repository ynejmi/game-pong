import Phaser from "phaser";
import pongScene from "./scenes/scene";

import * as React from "react";

export interface IGameProps {}

export default class IGame extends React.Component<IGameProps, any> {
  componentDidMount() {
    new Phaser.Game({
      type: Phaser.AUTO,
      parent: "phaser-game",

      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,	// not working anymore; "Centering is achieved by setting 
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
  }

  shouldComponentUpdate() {
    return false;
  }

  public render() {
    return <div id="phaser-game" />;
  }
}
