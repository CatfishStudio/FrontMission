export default class Preloader extends Phaser.Scene {
    
    constructor() {
		super("Preloader");
	}

	preload() {
		
		this.load.image('image_preloader', 'assets/preloader.png');

        //this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Demo"));
	}

	create() {
		this.add.image(430, 365, 'image_preloader');

        
	}
}