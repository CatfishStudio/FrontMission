//import "./lib/phaser.min.js";
import Demo from "./scenes/Demo";
import Menu from './scenes/Menu';
import Preloader from "./scenes/Preloader";

window.addEventListener('load', function () {

	let config = {
        width: 860,
        height: 730,
        type: Phaser.AUTO,
        backgroundColor: "#000000",
        /*
        scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        */
    };

    const game = new Phaser.Game(config);
	
	//game.scene.add(Demo.name, Demo);
    game.scene.add(Menu.name, Menu);
	game.scene.add(Preloader.name, Preloader);
    game.scene.add(Boot.name, Boot, true);
});

class Boot extends Phaser.Scene {
    static name = 'Boot';
	preload() {
		this.load.image('image_preloader', 'assets/preloader.png');
        //this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preloader"));
        this.load.on(Phaser.Loader.Events.COMPLETE, function(){
			this.scene.start("Preloader");
		}, this);
	}
}