//import "./lib/phaser.min.js";
import Demo from "./scenes/Demo";
import Boot from "./scenes/Boot"

window.addEventListener('load', function () {

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
    };

    var game = new Phaser.Game(config);
	
	game.scene.add("Demo", Demo);
	game.scene.add("Boot", Boot, true);
});