class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Movement/Speed
        this.moveSpeed = 2;
        this.isMoving = false;

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;


        //LEFT ARM
        this.leftArmX = this.bodyX - 75;
        this.leftArmY = this.bodyY + 70;

        //RIGHT ARM
        this.rightArmX = this.bodyX + 75;
        this.rightArmY = this.bodyY + 70;
////////////////////////////////////////////////////////
        //LEFT LEG
        this.leftLegX = this.bodyX - 45;
        this.leftLegY = this.bodyY + 160;

        //RIGHT LEG
        this.rightLegX = this.bodyX + 50;
        this.rightLegY = this.bodyY + 160;
//////////////////////////////////////////////////////////
        //LEFT EYE
        this.leftEyeX = this.bodyX - 40;
        this.leftEyeY = this.bodyY - 50;

        //RIGHT EYE
        this.rightEyeX = this.bodyX + 40;
        this.rightEyeY = this.bodyY - 50;
//////////////////////////////////////////////////////////////
        //LEFT EAR
        this.leftEarX = this.bodyX - 60;
        this.leftEarY = this.bodyY - 95;

        //RIGHT EAR
        this.rightEarX = this.bodyX + 50;
        this.rightEarY = this.bodyY - 100;

//////////////////////////////////////////////////////////////
        //LEFT Eyebrow
        this.leftEyebrowX = this.bodyX - 35;
        this.leftEyebrowY = this.bodyY - 100;

        //RIGHT Eyebrow
        this.rightEyebrowX = this.bodyX + 35;
        this.rightEyebrowY = this.bodyY - 100;

/////////////////////////////////////////////////////////////
        //Mouth
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'

    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_yellowF.png");
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "arm_darkA.png");

        my.sprite.leftMonsterArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_darkE.png");
        my.sprite.leftMonsterArm.flipX = true;
        my.sprite.rightMonsterArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_darkE.png");
        
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_darkC.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_darkC.png");

        my.sprite.leftEar = this.add.sprite(this.leftEarX, this.leftEarY, "monsterParts", "detail_dark_ear.png");
        my.sprite.leftEar.flipX = true;
        my.sprite.rightEar = this.add.sprite(this.rightEarX, this.rightEarY, "monsterParts", "detail_dark_ear.png");

        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_cute_light.png");
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_cute_light.png");

        my.sprite.leftEyebrow = this.add.sprite(this.leftEyebrowX, this.leftEyebrowY, "monsterParts", "eyebrowA.png");
        my.sprite.rightEyebrow = this.add.sprite(this.rightEyebrowX, this.rightEyebrowY, "monsterParts", "eyebrowA.png");
        my.sprite.leftEyebrow.flipX = true;

        my.sprite.mouthClosedFangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_sad.png");
        my.sprite.mouthClosedFangs.flipY = true;

        my.sprite.smileFangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");
        my.sprite.smileFangs.visible = false;

        this.A_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.D_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.input.keyboard.on('keydown', (event) => {
            if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.S) {
            my.sprite.mouthClosedFangs.visible = true;
            my.sprite.smileFangs.visible = false;
            }
            else if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.F) {
            my.sprite.smileFangs.visible = true;
            my.sprite.mouthClosedFangs.visible = false;
            }
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        if(this.A_key.isDown) {
            // Move all parts to the left
            this.bodyX -= this.moveSpeed;
            
            // Update positions of all body parts
            my.sprite.body.x = this.bodyX;
            my.sprite.leftMonsterArm.x = this.leftArmX = this.bodyX - 75;
            my.sprite.rightMonsterArm.x = this.rightArmX = this.bodyX + 75;
            my.sprite.leftLeg.x = this.leftLegX = this.bodyX - 45;
            my.sprite.rightLeg.x = this.rightLegX = this.bodyX + 50;
            my.sprite.leftEye.x = this.leftEyeX = this.bodyX - 40;
            my.sprite.rightEye.x = this.rightEyeX = this.bodyX + 40;
            my.sprite.leftEar.x = this.leftEarX = this.bodyX - 60;
            my.sprite.rightEar.x = this.rightEarX = this.bodyX + 50;
            my.sprite.leftEyebrow.x = this.leftEyebrowX = this.bodyX - 35;
            my.sprite.rightEyebrow.x = this.rightEyebrowX = this.bodyX + 35;
            my.sprite.mouthClosedFangs.x = this.mouthX = this.bodyX;
            my.sprite.smileFangs.x = this.mouthX = this.bodyX;
        }

        if(this.D_key.isDown) {
            // Move all parts to the right
            this.bodyX += this.moveSpeed;
            
            // Update positions of all body parts
            my.sprite.body.x = this.bodyX;
            my.sprite.leftMonsterArm.x = this.leftArmX = this.bodyX - 75;
            my.sprite.rightMonsterArm.x = this.rightArmX = this.bodyX + 75;
            my.sprite.leftLeg.x = this.leftLegX = this.bodyX - 45;
            my.sprite.rightLeg.x = this.rightLegX = this.bodyX + 50;
            my.sprite.leftEye.x = this.leftEyeX = this.bodyX - 40;
            my.sprite.rightEye.x = this.rightEyeX = this.bodyX + 40;
            my.sprite.leftEar.x = this.leftEarX = this.bodyX - 60;
            my.sprite.rightEar.x = this.rightEarX = this.bodyX + 50;
            my.sprite.leftEyebrow.x = this.leftEyebrowX = this.bodyX - 35;
            my.sprite.rightEyebrow.x = this.rightEyebrowX = this.bodyX + 35;
            my.sprite.mouthClosedFangs.x = this.mouthX = this.bodyX;
            my.sprite.smileFangs.x = this.mouthX = this.bodyX;
        }

    }
}