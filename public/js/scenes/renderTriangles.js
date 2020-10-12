
function buildRenderTriangles() {
    
    console.log('buildRenderTriangles init');

    //scene2 = new THREE.Scene();
    //scene2.background = new THREE.Color( 0x06F2FF );
    scene2.fog = new THREE.Fog( 0xffffff, 1, 10000 );
    
    var light = new THREE.HemisphereLight(0xffffff);
    light.position.set(0, 0, 50);
    scene2.add(light);

    var geometry = new THREE.TetrahedronBufferGeometry( 50);
    var materialBlue = new THREE.MeshLambertMaterial( {
        color: "#06F2FF", 
        wireframe: true
    });

    var materialWhite = new THREE.MeshLambertMaterial( {
        color: "#ffffff"
    });

    var materialGray = new THREE.MeshLambertMaterial( {
        color: "#888888",
    });

    var materialBlack = new THREE.MeshLambertMaterial( {
        color: "#000000",
        wireframe: true
    });

    //group = new THREE.Group();

    for ( var i = 0; i < 1000; i ++ ) {

        if( i%2 == 1){
            var mesh = new THREE.Mesh( geometry, materialBlue );
        }
        else if ( i%3 == 1){
            var mesh = new THREE.Mesh( geometry, materialGray );
        }
        else if ( i%5 == 1){
            var mesh = new THREE.Mesh( geometry, materialWhite );
        }
        else {
            var mesh = new THREE.Mesh( geometry, materialBlack );
        }
        
        var posOrNeg = Math.random() < 0.5 ? -1 :1;

        mesh.position.x = Math.random() * 2000 - 1000;
        mesh.position.y = Math.random() * 2000 - 1000;
        mesh.position.z = Math.random() * 2000 - 1000;

        mesh.rotation.x = Math.random() * 3 * Math.PI;
        mesh.rotation.y = Math.random() * 3 * Math.PI;

        mesh.matrixAutoUpdate = false;
        mesh.updateMatrix();

        group.add( mesh );

    }

    scene2.add( group );
    console.log('group added');
    
    var geometry2 = new THREE.SphereGeometry(2000, 15, 15);
    var material5 = new THREE.MeshLambertMaterial( {
        color: "#cccccc",
        wireframe: true
    });
    var sphere = new THREE.Mesh( geometry2, material5 );
    scene2.add(sphere);
}




