    /*          ACCESSING CANVAS ELEMENT USING JS AND SETTING UP THE CANVAS               */

    const canvas = document.querySelector('canvas');

    //this means that we would be using 2d methods to draw on top of canvas
    const c = canvas.getContext('2d');

    //since in the game we would be using 64 by 64 size tiles (pixels) and aspect ratio of 16:9
    canvas.width = 1024; // 16*64
    canvas.height = 576; // 9*64


    

    /*           PLAYER CREATION AND ITS ANIMATION                     */

    const player = new Player()

    function animate() {
       window.requestAnimationFrame(animate) //to create smooth animations and creating animation loop
       c.fillStyle = 'white'
       c.fillRect(0, 0, canvas.width, canvas.height)

       player.draw()
       player.update()
       
    }
    animate();
       
    