import Demo from './scenes/Demo.js';

var GAME = null

export class Game extends Phaser.Game {
    constructor(){
        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: {
                preload: preload,
                create: create
            }
        };

        super(config);

        GAME = this;
        console.log("GAME: Init");

        this.scene.add("Demo", Demo);
        this.scene.add("Boot", Boot, true);
    }
}

class Boot extends Phaser.Scene {

	preload() {
        console.log("GAME: Preloader");
		this.load.image('sky', 'build/assets/space3.png');
        this.load.image('logo', 'build/assets/phaser3-logo.png');
        this.load.image('red', 'build/assets/red.png');
	}

    create() {
        console.log("GAME: Demo");
        this.GAME.state.start("Demo");
    }
}