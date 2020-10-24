init(); 

function init() {

camera.position.z = cameraZ;

setScene();
        

document.addEventListener( 'mousemove', onDocumentMouseMove, false );



    // Event listener: mousehold
    //document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    //document.addEventListener('mouseup', onDocumentMouseUp, false);

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
        const fillX = (mouseX*pixelRatio);
        const fillY = (mouseY*pixelRatio);
        context.fillRect(fillX, fillY, 10, 10);
        setTimeout(function(){
            context.fillStyle = "#000000";
            context.fillRect(mouseX-15, mouseY-15, 10, 10)
        }, 10000);
    }

    function printWord(){
        var index = 0;
        var wordArray = ['n','u','r','t','u','r','e'];
        
        var printNextLetter = function(){
            var word = document.getElementById('word');
            if(index < wordArray.length){
                var CHAR = wordArray[index];

                word.append(CHAR);
            }

            index++;

            setTimeout(printNextLetter, 500);
        }

        printNextLetter();

        setTimeout(function(){
            var box = document.getElementById('word-background');
            $("#word-background").addClass('highlight');
        }, 1000*wordArray.length);


    }

 
    function animateCursor(){
        $('#cursor').animate({
            opacity: 0
        }, 'slow').animate({
            opacity: 1
        }, 'slow');
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

    buildRenderWorld();
    scene = scene1;
    console.log('scene 1 set');

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
 
        //fixPageCanvasAspectRatio ();

        camera.position.x = 100;
        camera.position.y = 0;
        camera.position.z = 300;


        scene.background = new THREE.Color( windowColorCurrent );

        cube.rotation.x -= rotationRateX;
        cube.rotation.y += rotationRateY;

        camera.updateProjectionMatrix();
                 
 
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
        setScene();
        //New mouse down
        

        //addWide();        
        //var tempCanvas = document.getElementById('c');


                $("#c").show();
        


            /*case 1:
                $("#c").addClass('gradient');
                break;
            case 2: 
                $("#c").removeClass('gradient');
                break;
            case 3:
                $("#c").hide();
                $("#video").show();
                break;
            case 4:
                break;
            case 5:
                break;*/

        

        
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
 
 
 