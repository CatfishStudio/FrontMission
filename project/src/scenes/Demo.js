export default class Demo extends Phaser.Scene {
    static name = 'Demo';

	constructor() {
		super(Demo.name);
	}

	create() {
		this.add.image(400, 300, '38195');
	}
}