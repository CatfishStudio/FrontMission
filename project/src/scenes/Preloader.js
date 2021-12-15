import Images from "../data/Images";

export default class Preloader extends Phaser.Scene {
    static name = 'Preloader';

	constructor() {
		super(Preloader.name);
	}

	preload() {
		this.add.image(430, 365, 'image_preloader');

		let progress = this.add.graphics();

		this.load.on(Phaser.Loader.Events.PROGRESS, function(value){
			progress.clear();
        	progress.fillStyle(0xffffff, 1);
        	progress.fillRect(0, 270, 800 * value, 60);
		});

		this.load.on(Phaser.Loader.Events.COMPLETE, function () {
			progress.destroy();
			this.scene.start("Demo");
		}, this);

		Images.preloadList.forEach(element => {
			this.load.image(element, element);
		});
	}

	create() {
		
	}
}