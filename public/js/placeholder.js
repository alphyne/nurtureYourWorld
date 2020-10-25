init(); 

function init() {

camera.position.z = cameraZ;

setScene();
        

document.addEventListener( 'mousemove', onDocumentMouseMove, false );
canvas.addEventListener( 'mouseenter', onHover, false);
canvas.addEventListener( 'mouseleave', offHover, false);


    // Event listener: mousehold
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    document.addEventListener('mouseup', onDocumentMouseUp, false);

    function onHover() {
        hover = true;
    }

    function offHover() {
        hover = false;
    }

    // Resize canvas side to current display
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width  = canvas.clientWidth  * pixelRatio | 0;
        const height = canvas.clientHeight * pixelRatio | 0;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
        renderer.setSize(width, height, false);
        }
        return needResize;
    }
 
    function fixPageCanvasAspectRatio () {
        // Set display size (css pixels).
        var pageCanvasWidth = pageCanvas.clientWidth;
        var pageCanvasHeight = pageCanvas.clientWidth;
        console.log('pageCanvasWidth is: ' + pageCanvasWidth);
        console.log('pageCanvasHeight is: ' + pageCanvasHeight);
        //pageCanvas.style.width = size + "px";
        //pageCanvas.style.height = size + "px";

        // Set actual size in memory (scaled to account for extra pixel density).
        var pixelRatio = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
        pageCanvas.width = Math.floor(pageCanvasWidth * pixelRatio);
        pageCanvas.height = Math.floor(pageCanvasHeight * pixelRatio);

    }


    // Resize canvas side to current display
    function resizePageCanvasToDisplaySize() {
        const pageCanvas = document.querySelector('#page-canvas');
        //const context = pageCanvas.getContext('2d');
        const pixelRatio = window.devicePixelRatio;
        const width  = pageCanvas.clientWidth  * pixelRatio | 0;
        const height = pageCanvas.clientHeight * pixelRatio | 0;
        const needPageResize = pageCanvas.width !== width || pageCanvas.height !== height;
        if (needPageResize) {
            pageCanvas.width = width;
            pageCanvas.height = height;
        }
        return needPageResize;
    }
 
 
    function onDocumentMouseMove( event ) {

        mouseX = event.clientX - pageCanvas.offsetLeft;
        mouseY = event.clientY - pageCanvas.offsetTop;

        prevMouseX = mouseX;
        prevMouseY = mouseY;

        moveCount++;
    }




    //function 
 
    function drawPixel(mouseX, mouseY){
        console.log('init drawPixel');
        const pixelRatio = window.devicePixelRatio
        context.fillStyle = "#ffffff";
        const fillX = (mouseX*pixelRatio)-5;
        const fillY = (mouseY*pixelRatio)-5;
        context.fillRect(fillX, fillY, 10, 10);
        setTimeout(function(){
            context.fillStyle = "#000000";
            context.fillRect(fillX, fillY, 10, 10)
        }, 10000);
}

    function clearThree(obj){
        console.log('clearThree init');
        while(obj.children.length > 0){ 
        clearThree(obj.children[0])
        obj.remove(obj.children[0]);
        }
        if(obj.geometry) obj.geometry.dispose()
    
        if(obj.material){ 
        //in case of map, bumpMap, normalMap, envMap ...
        Object.keys(obj.material).forEach(prop => {
            if(!obj.material[prop])
            return         
            if(obj.material[prop] !== null && typeof obj.material[prop].dispose === 'function')                                  
            obj.material[prop].dispose()                                                        
        })
        obj.material.dispose()
        }
    } 
 
     
    // Pulse 'your world'
    setInterval(function(){
        setTimeout(function(){
            $("#yourWorld").removeClass('highlight');

            setTimeout(function(){
                $("#yourWorld").addClass('highlight');
            }, 2000);
        }, 2000);
    }, 4000);

    function setScene(){
        console.log('setScene init');
        console.log('clickCount is: ' + clickCount);

        switch (clickCount % 8) {

            // renderWorld
            case 0:
                $("#videoSky").hide();
                $("#videoFire").hide();
                $("#videoDaisy").hide();
                $("#videoWave").hide();
                $("#videoFireworks").hide();
                clearThree(scene3);
                buildRenderWorld();
                scene = scene1;
                console.log('scene 1 set');
                break;

            // videoSky
            case 1:
                clearThree(scene1);
                break;

            // renderTriangles
            case 2: 
                buildRenderTriangles();
                scene = scene2;
                console.log('scene 2 set');

                break;

            // videoDaisy
            case 3:
                clearThree(scene2);
                break;

            // videoFire
            case 4:
                break;
            
            // renderTunnel
            case 5:
                buildRenderTunnel();
                scene = scene3;
                console.log('scene 3 set');
                break;
        
            // videoWave
            case 6:
                clearThree(scene3);
                break;
            
            //videoFireworks
            case 7:
                break;
        }

    }
 
     // Render every frame
     function render(time) {
         time *= 0.001;
 
         document.addEventListener( 'mousemove', onDocumentMouseMove, false );
 
         
         drawPixel(mouseX, mouseY);
 
         coordinateX1.innerHTML = (Math.random()*100).toFixed(0);
         coordinateY1.innerHTML = (Math.random()*100).toFixed(0);
         coordinateZ1.innerHTML = (Math.random()*100).toFixed(4);
 
         coordinateX2.innerHTML = (Math.random()*100).toFixed(0);
         coordinateY2.innerHTML = (Math.random()*100).toFixed(0);
         coordinateZ2.innerHTML = (Math.random()*100).toFixed(4);
 
         mouseXLabel.innerHTML = mouseX;
         mouseYLabel.innerHTML = mouseY;
 
 
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
 
        resizePageCanvasToDisplaySize();
 
        switch (clickCount % 8) {

            // renderWorld
            case 0:
                /*camera.position.x = cameraX;
                camera.position.y = cameraY;
                camera.position.z = cameraZ;*/

                camera.position.x = 100;
                camera.position.y = 0;
                camera.position.z = 240;


                scene.background = new THREE.Color( windowColorCurrent );

                if(hover){
                    cube.rotation.x -= 0.021;
                    cube.rotation.y += 0.007;
                }
                else {
                    cube.rotation.x -= rotationRateX;
                    cube.rotation.y += rotationRateY;
                }

                camera.updateProjectionMatrix();
                break;

            // videoSky
            case 1:
                break;

            // renderTriangles
            case 2:
                camera.position.x += ( mouseX*1.75 - camera.position.x ) * 0.07;
                camera.position.y += ( - mouseY*1.75 - camera.position.y ) * 0.07;

                camera.lookAt( scene2.position );


                group.rotation.x += 0.001;
                group.rotation.y += 0.001;
                group.rotation.z += 0.001;



                renderer.setClearColor(0xffffff, 0);

                break;
            
            // videoDaisy
            case 3:
                break;

            // videoFire
            case 4:
                break;

            // renderTunnel
            case 5:

                if(camera.position.z <= -3000){
                    reachedLimit = true;
                }
                if (camera.position.z >= 21000){
                    reachedLimit = false;
                }

                if(reachedLimit) {
                    if(hover){
                        camera.position.z += 48;
                    } 
                    else {
                        camera.position.z += 8;
                    }

                } 
                else {
                    if(hover){
                        camera.position.z -= 48;
                    }
                    else {
                        camera.position.z -= 8;
                    }

                }


                //camera.position.z -= 30;
                //tunnel.rotation.y -= 0.0006;
                tunnel.rotation.y -= 0.002;
                
                /*setTimeout(function() {
                    camera.position.z -= 30;
                    tunnel.rotation.y += 0.005;
                }, 13000);

                setTimeout(function() {
                    camera.position.z -= 170;
                    tunnel.rotation.y -= 0.01;
                }, 25000);*/
                break;

            // videoWave
            case 6:
                    break;

            // videoFireworks
            case 7:
                    break;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(render);
     }
 
    function onDocumentMouseDown( event ) {

        pressed = true;

        savedCanvasWidth = canvas.style.width;
        savedCanvasHeight = canvas.style.height;

        canvas.style.width = savedCanvasWidth+1;
        canvas.style.height = savedCanvasHeight+1;

        //canvas.style.width = "99%";
        //canvas.style.height = "99%";

        //rotationRateX = 2;
        //rotationRateY = 1;

        //var body = document.querySelector('#body');
        //windowColorCurrent = windowColorHold;
        //body.style.backgroundColor = pageColorHold;

        //var coordinates = document.querySelector('#coordinates');
        //coordinates.classList.add('pressedFont');
        
        //var message = document.querySelector('#message');
        //message.classList.remove('hidden');



        //savedX = cameraX;
        //savedY = cameraY;
        //savedZ = cameraZ;

        //cameraX = Math.floor(Math.random()*100);
        //cameraY = (-1)*cameraY;
        //cameraY = Math.floor(Math.random()*100);
        //cameraZ = 300;
        //cameraZ = Math.floor(Math.random()*350);

        //light.visible = false;
        //light2.visible = false;
        //light3.visible = false;

        //scene = scene2;
        if(entered){
            clickCount++;
            setScene();
        }


        //New mouse down
        

        //addWide();        
        //var tempCanvas = document.getElementById('c');


        switch (clickCount % 8) {

            // renderWorld
            case 0:
                $("#videoFireworks").hide(); 
                $("#c").show();
                break;

            // videoSky
            case 1:
                $("#c").hide();
                $("#videoSky").show();
                break;

            // renderTriangles
            case 2:
                $("#videoSky").hide();
                $("#c").show();
                $("#c").addClass('gradient');
                break;

            // videoDaisy
            case 3:
                $("#c").removeClass('gradient');
                $("#c").hide();
                $("#videoDaisy").show(); 
                break;

            // videoFire
            case 4:
                $("#videoDaisy").hide();
                $("#videoFire").show();    
                break;  

            // renderTunnel
            case 5:
                $("#videoFire").hide(); 
                $("#c").show();
                break;
                
            // videoWave
            case 6:
                $("#c").hide();
                $("#videoWave").show(); 
                break;

            // videoFireworks
            case 7:
                $("#videoWave").hide(); 
                $("#videoFireworks").show(); 
                break;
        }
        

        
        //canvas.addClass('gradient');
        //canvas.classList.add('wide');
    // $("#c").addClass('wide');

        //console.log(clickCount);

        // End new

        //requestAnimationFrame(onDocumentMouseDown);
    }

    function onDocumentMouseUp(event){
        //scene.background = new THREE.Color( 0x000000 );
        pressed = false;
        rotationRateX = 0.001;
        
        /*windowColorCurrent = windowColorLoad;
        var body = document.querySelector('#body');
        body.style.backgroundColor = pageColorLoad;*/

        var coordinates = document.querySelector('#coordinates');
        coordinates.classList.remove('pressedFont');


        cameraX = savedX;
        cameraY = savedY;
        cameraZ = savedZ;

    }



    requestAnimationFrame(render);
 }// End init()
 
 
 