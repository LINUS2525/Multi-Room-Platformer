//forming a class improves the readability of the code
class Player {
    //constructor is going to set properties associated with the player that we create
    constructor() {
        this.position = {
            x:100,
            y:100,
        }
        //for adding gravity
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.gravity = 1
    }

    //to set appearance of player
    draw() {
      //player info
      c.fillStyle = 'red'
      c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
         //condition to make it stop 
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

        //above bottom of canvas
        if(this.sides.bottom + this.velocity.y < canvas.height) {

            //gravity
            this.velocity.y += this.gravity
        }
        //to make the player stop at bottom of canvas
        else this.velocity.y = 0
    }
}