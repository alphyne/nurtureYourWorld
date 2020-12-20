init(); 

function init() {
    $("#videoSky").hide();
    $("#videoFire").hide();
    $("#videoDaisy").hide();
    $("#videoWave").hide();
    $("#videoFireworks").hide();

    console.log('%c [ nurture your world ] ', 'background: #000000; color:#06F2FF;');
    console.log('%c [ mashup + website + visuals by alphyne ]', 'background: #000000; color:#06F2FF;');
    console.log('%c [ released 2020 ]', 'background: #000000; color:#06F2FF;');
    console.log('%chttp://nurtureyour.world', 'background: #000000; color:#06F2FF;');
    console.log('%c remix on youtube: ' + 'https://youtu.be/ocfO_qDPZZQ', 'background: #000000; color:#06F2FF;');
    console.log('%c original audio:', 'background: #000000; color:#06F2FF;');
    console.log('%c Porter Robinson {https://porterrobinson.com}', 'background: #000000; color:#06F2FF;');
    console.log('%c kz-livetune {https://www.youtube.com/user/kzlivetune/featured}', 'background: #000000; color:#06F2FF;');

    window.mobileCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    mobileCheck = window.mobileCheck();

    //console.log('mobileCheck is: ' + mobileCheck);

    if(!mobileCheck) {
        document.getElementById('mobileDetails').classList.add('hidden');
    }

    camera.position.z = cameraZ;

    setScene();
            
    // Add draw + hover on desktop
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

    // Resize canvas size to current display
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

 
    function drawPixel(mouseX, mouseY){
        //console.log('init drawPixel');
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
        //console.log('clearThree init');
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
        //console.log('setScene init');
        //console.log('clickCount is: ' + clickCount);


        // Mobile device, loop renders
        /*if(mobileCheck) {

            switch (clickCount % 3) {

                case 0:
                    clearThree(scene3);
                    buildRenderWorld();

                    scene = scene1;
                    console.log('scene 1 set');
                    break;
    
                case 1: 
                    clearThree(scene1);
                    buildRenderTriangles();
                    scene = scene2;
                    console.log('scene 2 set');
    
                    break;
    
                case 2:
                    clearThree(scene2);
                    buildRenderTunnel();

                    scene = scene3;
                    console.log('scene 3 set');
                    break;
            }
        }*/

        // Desktop device, loop all
        //else {
            switch (clickCount % 8) {

                // renderWorld
                case 0:
                    /*$("#videoSky").hide();
                    $("#videoFire").hide();
                    $("#videoDaisy").hide();
                    $("#videoWave").hide();
                    $("#videoFireworks").hide();*/
                    clearThree(scene3);
                    buildRenderWorld();
                    scene = scene1;
                    //console.log('scene 1 set');

                    break;
    
                // videoSky
                case 1:
                    clearThree(scene1);

                    break;
    
                // renderTriangles
                case 2: 
                    buildRenderTriangles();
                    scene = scene2;
                    //console.log('scene 2 set');
    
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
                    //console.log('scene 3 set');
                    break;
            
                // videoWave
                case 6:
                    clearThree(scene3);
                    break;
                
                //videoFireworks
                case 7:
                    break;
            }
    
        //}
       
    }
 
    // Render every frame
    function render(time) {
         time *= 0.001;
 
        if(mobileCheck){
            coordinateX1.innerHTML = (Math.random()*100).toFixed(0);
            coordinateY1.innerHTML = (Math.random()*100).toFixed(0);
            coordinateZ1.innerHTML = (Math.random()*100).toFixed(4);
    
            coordinateX2.innerHTML = (Math.random()*100).toFixed(0);
            coordinateY2.innerHTML = (Math.random()*100).toFixed(0);
            coordinateZ2.innerHTML = (Math.random()*100).toFixed(4);

            
        } else {

            // Add draw + hover on desktop
            document.addEventListener( 'mousemove', onDocumentMouseMove, false );
            drawPixel(mouseX, mouseY);

            // Update timestamp
            var updateTime = setInterval(function(){

                var diffTime = 291 - audio.currentTime;
                var seconds = Math.floor(diffTime % 60);
                var minutes = Math.floor(diffTime / 60);

                if(seconds < 10){
                    document.getElementById('timestamp').innerHTML = "-" + minutes + ':0' + seconds;
                } else {
                    document.getElementById('timestamp').innerHTML = "-" + minutes + ':' + seconds;
                }
                //console.log('time is: ' + minutes + seconds)
            }, 10);
        }

        


        mouseXLabel.innerHTML = mouseX;
        mouseYLabel.innerHTML = mouseY;
 
 
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
 
        resizePageCanvasToDisplaySize();
        //resizeRendererToDisplaySize(renderer);

        // Mobile device, loop renders
        /*if(mobileCheck) {
            switch (clickCount % 3) {
                
                case 0:
                    camera.position.x = 100;
                    camera.position.y = 0;
                    camera.position.z = 340;
                    scene.background = new THREE.Color( windowColorCurrent );

                    cube.rotation.x -= rotationRateX;
                    cube.rotation.y += rotationRateY;

                    camera.updateProjectionMatrix();
                    break;

                case 1:
                    camera.position.x += ( mouseX*1.75 - camera.position.x ) * 0.07;
                    camera.position.y += ( - mouseY*1.75 - camera.position.y ) * 0.07;
                    camera.lookAt( scene2.position );

                    group.rotation.x += 0.001;
                    group.rotation.y += 0.001;
                    group.rotation.z += 0.001;

                    renderer.setClearColor(0xffffff, 0);

                    break;

                case 2:
                    if(camera.position.z <= -3000){
                        reachedLimit = true;
                    }
                    if (camera.position.z >= 21000){
                        reachedLimit = false;
                    }
                    if(reachedLimit) {
                        camera.position.z += 8;

                    } else {
                        camera.position.z -= 8;

                    }
                    tunnel.rotation.y -= 0.002;
                    break;
            }
        }*/

        // Desktop device, loop all
        //else {
            switch (clickCount % 8) {

                // renderWorld
                case 0:
                    camera.position.x = 100;
                    camera.position.y = 0;
                    camera.position.z = 240;
    
    
                    scene.background = new THREE.Color( windowColorCurrent );
    
                    if(hover && !mobileCheck){
                        cube.rotation.x -= 0.021;
                        cube.rotation.y += 0.007;
                    }
                    else {
                        cube.rotation.x -= rotationRateX;
                        cube.rotation.y += rotationRateY;
                    }
    
                    camera.updateProjectionMatrix();

                    coordinateX1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ1.innerHTML = (Math.random()*100).toFixed(4);
            
                    coordinateX2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ2.innerHTML = (Math.random()*100).toFixed(4);


                    break;
    
                // videoSky
                case 1:
                    if(mobileCheck){
                        onDocumentMouseDown();
                    }
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
                    coordinateX1.innerHTML = group.rotation.x.toFixed(0);
                    coordinateY1.innerHTML = group.rotation.y.toFixed(0);
                    coordinateZ1.innerHTML = group.rotation.z.toFixed(4);
            
                    coordinateX2.innerHTML = (group.rotation.x*3).toFixed(0);
                    coordinateY2.innerHTML = (group.rotation.y*4).toFixed(0);
                    coordinateZ2.innerHTML = (group.rotation.z*2).toFixed(4);
                    break;
                
                // videoDaisy
                case 3:
                    if(mobileCheck){
                        onDocumentMouseDown();
                    }
                    break;
    
                // videoFire
                case 4:
                    if(mobileCheck){
                        onDocumentMouseDown();
                    }
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
                        if(hover && !mobileCheck){
                            camera.position.z += 48;
                        } 
                        else {
                            camera.position.z += 8;
                        }
    
                    } 
                    else {
                        if(hover && !mobileCheck){
                            camera.position.z -= 48;
                        }
                        else {
                            camera.position.z -= 8;
                        }
    
                    }

                    tunnel.rotation.y -= 0.002;
                    coordinateX1.innerHTML = (camera.position.z/500).toFixed(0);
                    coordinateY1.innerHTML = (camera.position.z/800).toFixed(0);
                    coordinateZ1.innerHTML = (camera.position.z/1000).toFixed(4);

                    coordinateX2.innerHTML = (camera.position.z/700).toFixed(0);
                    coordinateY2.innerHTML = (camera.position.z/300).toFixed(0);
                    coordinateZ2.innerHTML = (camera.position.z/2500).toFixed(4);
            
                    /*coordinateX2.innerHTML = (group.rotation.x*3).toFixed(0);
                    coordinateY2.innerHTML = (group.rotation.y*4).toFixed(0);
                    coordinateZ2.innerHTML = (group.rotation.z*2).toFixed(4);*/
                    break;
    
                // videoWave
                case 6:
                    if(mobileCheck){
                        onDocumentMouseDown();
                    }
                    break;
    
                // videoFireworks
                case 7:
                    if(mobileCheck){
                        onDocumentMouseDown();
                    }
                    break;
            }
            //renderer.render(scene, camera);
            //requestAnimationFrame(render);
        //}
 
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
 
    function onDocumentMouseDown( event ) {

        pressed = true;

        savedCanvasWidth = canvas.style.width;
        savedCanvasHeight = canvas.style.height;

        canvas.style.width = savedCanvasWidth+1;
        canvas.style.height = savedCanvasHeight+1;

        if(entered){
            clickCount++;
            setScene();
        }

        // Mobile device, loop renders
        /*if(mobileCheck) {
            switch (clickCount % 3) {

                case 0:
                    break;

                case 1:
                    $("#c").addClass('gradient');
                    break;

                case 2:
                    $("#c").removeClass('gradient');
                    break;

            }
        }*/
        //else {
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
                    coordinateX1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ1.innerHTML = (Math.random()*100).toFixed(4);
            
                    coordinateX2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ2.innerHTML = (Math.random()*100).toFixed(4);

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
                    coordinateX1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ1.innerHTML = (Math.random()*100).toFixed(4);
            
                    coordinateX2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ2.innerHTML = (Math.random()*100).toFixed(4);
                    break;
    
                // videoFire
                case 4:
                    $("#videoDaisy").hide();
                    $("#videoFire").show();    
                    coordinateX1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ1.innerHTML = (Math.random()*100).toFixed(4);
            
                    coordinateX2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ2.innerHTML = (Math.random()*100).toFixed(4);
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
                    coordinateX1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ1.innerHTML = (Math.random()*100).toFixed(4);
            
                    coordinateX2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ2.innerHTML = (Math.random()*100).toFixed(4);
                    break;
    
                // videoFireworks
                case 7:
                    $("#videoWave").hide(); 
                    $("#videoFireworks").show(); 
                    coordinateX1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY1.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ1.innerHTML = (Math.random()*100).toFixed(4);
            
                    coordinateX2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateY2.innerHTML = (Math.random()*100).toFixed(0);
                    coordinateZ2.innerHTML = (Math.random()*100).toFixed(4);
                    break;
            }
        //}
        
        

        
        //canvas.addClass('gradient');
        //canvas.classList.add('wide');
    // $("#c").addClass('wide');

        //console.log(clickCount);

        // End new
        //requestAnimationFrame(render);
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
 
 
 