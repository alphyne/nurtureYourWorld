
function buildRenderWorld() {

    console.log('buildRenderWorld init');

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 0;

    // Create scene
    //const scene1 = new THREE.Scene();
    scene1.background = new THREE.Color( 0x222122 );

    /*
    * Create camera lights
    */
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 0, 50);
    scene1.add(light);

    var light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(-25, 0, -2);
    scene1.add(light2);

    var light3 = new THREE.DirectionalLight(0xffffff);
    light3.position.set(200, -50, -60);
    scene1.add(light3);

    /*
    * Build geometry
    */
    var geometry = new THREE.SphereBufferGeometry(130, 13, 9);

    var material = new THREE.MeshLambertMaterial( {
        color: sphereColor, 
        wireframe:true
    });
    cube = new THREE.Mesh(geometry, material);
    cube.name = 'cube';
    scene1.add(cube);


    // Build planes
    var planeGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0x6904ce,
        side: THREE.DoubleSide,
        wireframe: true
    });

    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0, 30, 0);
    plane.name = 'plane';
    scene1.add(plane);
    
    var plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
    plane2.rotation.x = -0.5 * Math.PI;
    plane2.position.set(0, -30, 0);
    plane2.name = 'plane2';
    scene1.add(plane2);

    var ambientLight = new THREE.AmbientLight(0xaaaaaa);
    scene1.add(ambientLight);

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 500;
}




