//forming a class improves the readability of the code
class Player {
    //constructor is going to set properties associated with the player that we create
    constructor() {
        this.position = {
            x:100,
            y:100,
        }

        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height
        }
    }

    //to set appearance of player
    draw() {
      //player info
      c.fillStyle = 'red'
      c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
         //condition to make it stop 
        if(this.sides.bottom < canvas.height) {
            this.position.y++
            this.sides.bottom = this.position.y + this.height
        }
    }
}