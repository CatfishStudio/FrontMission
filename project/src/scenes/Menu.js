import Images from "../data/Images";

export default class Menu extends Phaser.Scene {
    static name = 'Menu';

	constructor() {
		super(Menu.name);
	}

	preload ()
    {
        
    }

	create() {
		this.add.image(430, 365, Images.imgMenuBackground);
		this.add.image(205, 50, Images.imgMenuLogo);
	}

	update ()
    {
        
    }
}