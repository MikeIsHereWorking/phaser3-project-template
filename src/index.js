import Phaser from "phaser";
import config from './config/config'
import GameScene from './scenes/GameScene'


class Game extends Phaser.Game {
  constructor(config) {
    super(config);
    this.scene.add('Game',GameScene);
    this.scene.start('Game')
  }
}

const game = new Game(config);