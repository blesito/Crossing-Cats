"use strict";

class StartScene extends BaseLevelScene {
    constructor() {
        super({
            key: 'StartScene',
            showTimer: false,
        });
    }

    preload() {
        super.preload();

        this.load.image('logo', 'assets/images/help.png');
        this.load.image('start_button', 'assets/images/playbtn.png');
        this.load.image('background', 'assets/images/catbg.jpg');
    }

    create() {
        this.add.image(390, 250, 'background');
        this.add.image(410, 150, 'logo');
        this.startButton = this.add.image(400, 480, 'start_button');
        this.startButton.setInteractive();

        this.startButton.on('pointerover', (event) => {
            this.startButton.setScale(1.05);
        });
        this.startButton.on('pointerdown', (event) => {
            this.startButton.setScale(1.15);
        });
        this.startButton.on('pointerout', (event) => {
            this.startButton.setScale(1);
        });
        this.startButton.on('pointerup', (event) => {
            this.startButton.setScale(1);
            this.catLoosesLive();
            this.startNextLevel();
        });

        super.create();
    }
}
