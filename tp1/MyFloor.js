/**
 * MyFloor
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyFloor(scene) {
	CGFobject.call(this,scene);

    this.MyUnitCubeQuad=new MyUnitCubeQuad(this.scene);
};

MyFloor.prototype = Object.create(CGFobject.prototype);
MyFloor.prototype.constructor=MyFloor;

MyFloor.prototype.display = function(){

	//	this.MyUnitCubeQuad.scene.translate(2.2,0,1.2);
		this.MyUnitCubeQuad.scene.scale(8,0.1,6);
		this.MyUnitCubeQuad.display();

}