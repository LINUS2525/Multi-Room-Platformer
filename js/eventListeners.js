//adding event listener
window.addEventListener( 'keydown', (event) => {
    switch (event.key) {
        //jump of player
        case 'w':
             if (player.velocity.y === 0) player.velocity.y= -20

             break
        // moving player left
        case 'a':
             keys.a.pressed = true
             break
        //moving player to right
        case 'd':
             keys.d.pressed = true
             break
    }
})

//for stopping the movement when we release key
window.addEventListener( 'keyup', (event) => {
    switch (event.key) {
        case 'a':
             keys.a.pressed = false
             break
        case 'd':
             keys.d.pressed = false
             break
    }
})