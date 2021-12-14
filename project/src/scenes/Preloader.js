export default class Preloader extends Phaser.Scene {
    
    constructor() {
		super("Preloader");
	}

	preload() {
		this.load.pack("pack", "assets/units.json");
        this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Demo"));
	}

	create() {

	}
}