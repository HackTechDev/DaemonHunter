import 'phaser';

var hud, background, action;

export default class HUD extends Phaser.Scene {
  constructor () {
    super({ key: 'HUD', active: true});
  }

  create () {


        hud = this.add.rectangle( 10, 500, 600, 90, 0xffffff, 1)
                            .setOrigin(0, 0)
                            .setScrollFactor(0)
                            .setDepth(-29);

        hud.setVisible(false);           
        
        this.scene.get('Level0AdosCity').events.on('displayHUD',  function() {
          console.log("displayHUD");
          hud.setVisible(true);
        }, this);

        this.scene.get('Level0AdosCity').events.on('hideHUD',  function() {
          console.log("hideHUD");
          hud.setVisible(false);
        }, this);


        this.scene.get('Level0AdosCity').events.on('invokeAncientOne',  function() {
          console.log("Invoke Ancient One");
          action = this.add
            .text(10, 500, "Invoque un Grand Ancien", {
              font: "18px monospace",
              fill: "#000000",
              padding: { x: 20, y: 10 },
              backgroundColor: "#ffffff"
            })
            .setScrollFactor(0)
            .setDepth(30);

        }, this);

        this.scene.get('Level0AdosCity').events.on('ancientOneCalled',  function() {
          console.log("Invoke Ancient One");
          action = this.add
            .text(10, 500, "Un Grand Ancien apparaît !!", {
              font: "18px monospace",
              fill: "#000000",
              padding: { x: 20, y: 10 },
              backgroundColor: "#ffffff"
            })
            .setScrollFactor(0)
            .setDepth(30);

        }, this);


        this.scene.get('Level0AdosCity').events.on('removeTextDialog',  function() {
          action = this.add
            .text(10, 500, "                               ", {
              font: "18px monospace",
              fill: "#000000",
              padding: { x: 20, y: 10 },
              backgroundColor: "#ffffff"
            })
            .setScrollFactor(0)
            .setDepth(30);

        }, this);


  }


  update() {

  }
  
}

