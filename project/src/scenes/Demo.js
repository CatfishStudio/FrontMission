import Images from "../data/Images";

export default class Demo extends Phaser.Scene {
    static name = 'Demo';

	constructor() {
		super(Demo.name);
	}

	preload ()
    {
        
    }

	create() {
		this.add.image(400, 300, Images.img38233);
	}

	update ()
    {
        
    }
}