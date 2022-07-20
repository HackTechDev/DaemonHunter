import 'phaser';

import Config from './Config/Config';
import Level0AdosCity from './Scenes/Level0/Ados/City';

import Mission01 from './Scenes/Missions/Mission01';

import Boot from './Scenes/Boot';
import Preloader from './Scenes/Preloader';
import Menu from './Scenes/Menu';
import Options from './Scenes/Options';
import Credits from './Scenes/Credits';
import Help from './Scenes/Help';
import Character from './Scenes/Character';

import Music from './Music/Music';

class Game extends Phaser.Game {
    constructor () {
        super(Config);
        const music = new Music();
        this.globals = { music, bgMusic: null };
        this.scene.add('Boot', Boot);
        this.scene.add('Preloader', Preloader);
        this.scene.add('Menu', Menu);
        this.scene.add('Options', Options);
        this.scene.add('Credits', Credits);
        this.scene.add('Help', Help);
        this.scene.add('Character', Character);

        this.scene.add('Level0AdosCity', Level0AdosCity);
        this.scene.add('Mission01', Mission01);
        this.scene.start('Boot');
    }
}

window.game = new Game();
