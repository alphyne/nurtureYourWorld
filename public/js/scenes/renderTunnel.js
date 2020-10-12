function buildRenderTunnel() {
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 20000;
    camera.position.x = 0;
    camera.position.y = 0;

    scene3.background = new THREE.Color( 0x000000 );
    //camera.rotation.y = 90 * THREE.Math.DEG2RAD;
    
    //scene.background = new THREE.Color( 0x000000 );
    //scene.fog = new THREE.Fog( 0xffffff, 1, 10000 );
    
    var light = new THREE.HemisphereLight(0xffffff);
    light.position.set(0, 0, -50);
    scene3.add(light);

    
    var geometry2 = new THREE.CylinderBufferGeometry(3000, 1500, 70000, 20, 80);
    var material5 = new THREE.MeshLambertMaterial( {
        color: "#06F2FF",
        wireframe: true
    });
    tunnel = new THREE.Mesh( geometry2, material5 );
    scene3.add(tunnel);
    
    tunnel.rotation.x = 90 * THREE.Math.DEG2RAD;
}