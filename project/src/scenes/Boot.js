export default class Boot extends Phaser.Scene {
    
    constructor() {
		super("Boot");
	}

	preload() {
		this.load.image('image_preloader', 'assets/preloader.png');
        //this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preloader"));
        this.load.on(Phaser.Loader.Events.COMPLETE, function(){
			this.scene.start("Preloader");
		}, this);
	}

	create() {
		this.add.image(430, 365, 'image_preloader');
	}
}