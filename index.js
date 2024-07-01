    const canvas = document.querySelector('canvas')

    //this means that we would be using 2d methods to draw on top of canvas
    const c = canvas.getContext('2d')

    //since in the game we would be using 64 by 64 size tiles  and aspect ratio of 16:9
    canvas.width = 1024 // 16*64
    canvas.height = 576 // 9*64

    //creating a player
    const player = new Player()

    //for fixing the bug related to multiple keys pressed together
    const keys = {
        w: {
            pressed: false,
        },
        a: {
            pressed: false,
        },
        d: {
            pressed: false,
        },
    }

    
    //animation loop
    // let bottom = y + 100
    function animate() {
        window.requestAnimationFrame(animate)
        //to remove paint brush effect
        // c.clearRect(0, 0, canvas.width, canvas.height) ---> clears everything
        c.fillStyle = 'white'
        //takes four arguments x axis,y axis,width,height and makes rectangle out of it
        c.fillRect(0, 0, canvas.width, canvas.height)
        
        player.velocity.x = 0
        if (keys.d.pressed)  player.velocity.x = 5
        else if (keys.a.pressed) player.velocity.x = -5
    
        player.draw()
        player.update()
        
    }
    animate()

    