//import "./lib/phaser.min.js";
import Demo from "./scenes/Demo";
import Preloader from "./scenes/Preloader"

window.addEventListener('load', function () {

	var config = {
        width: 860,
        height: 730,
        type: Phaser.AUTO,
        backgroundColor: "#000000",
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
    };

    var game = new Phaser.Game(config);
	
	game.scene.add("Demo", Demo);
	game.scene.add("Preloader", Preloader, true);
});