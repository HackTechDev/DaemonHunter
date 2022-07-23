import 'phaser';

var hud, hud1, background;

export default class HUD extends Phaser.Scene {
  constructor () {
    super({ key: 'HUD', active: true});
  }

  create () {


        hud = this.add.rectangle( 10, 500, 600, 90, 0xffffff, 1)
                            .setOrigin(0, 0)
                            .setScrollFactor(0)
                            .setDepth(-29);

             
  }


  
}

