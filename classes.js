

class spaceShip {
    constructor(img) {
        const w = 80;
        const h = 100;
        const x = width / 2 - w/2;
        const y = height - h;
        this.img = img;
        this.speedX = 0;

    }

    draw() {
        image(this.img, this.x, this.y, this.w, this.h)
    }

    move() {
        if(keyIsDown(LEFT_ARROW)) {
            if((this.x + this.w )> 0) {
                this.speedX -= 20;
            }
            
        }
        if(keyIsDown(RIGHT_ARROW)) {
            if((this.x + this.w) < width) {
                this.speedY += 20;
            }      
        }
    }


}