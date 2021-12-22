export default class Boot extends Phaser.Scene {
    
    constructor() {
		super("Boot");
	}

	preload() {
		
		this.load.image('sky', 'assets/space3.png');
        this.load.image('logo', 'assets/phaser3-logo.png');
        this.load.image('red', 'assets/red.png');

        this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Demo"));
	}
}