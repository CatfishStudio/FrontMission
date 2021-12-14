export default class Demo extends Phaser.Scene {
    
	constructor() {
		super("Demo");
	}

	create() {
		this.add.image(400, 300, '38195');
	}
}