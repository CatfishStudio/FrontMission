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

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.image('sky', 'assets/space3.png');
        this.load.image('logo', 'assets/phaser3-logo.png');
        this.load.image('red', 'assets/red.png');

        this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Demo"));
	}
}