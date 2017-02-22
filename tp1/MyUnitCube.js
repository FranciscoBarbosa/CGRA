/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, 0.5, -0.5,
            0.5, -0.5, -0.5,
            0.5, 0.5, -0.5,
            -0.5, -0.5, -0.5,
            -0.5, 0.5, 0.5,
            0.5, -0.5, 0.5,
            0.5, 0.5, 0.5,
            -0.5, -0.5, 0.5,
			];

	this.indices = [
		//face de cima
            0, 4, 2, 
			6, 2, 4,
			//face de baixo
			7,3,1,
			7,1,5,
			//face esquerda de cá
			4,7,5,
			5,6,4,
			//face direita de cá
			2,6,5,
			5,1,2,
			//face esquerda de lá
			7,4,0,
			0,3,7,
			//face direita de lá
			0,2,1,
			1,3,0,
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
