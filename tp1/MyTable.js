/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) {
	CGFobject.call(this,scene);

    this.MyUnitCubeQuad=new MyUnitCubeQuad(this.scene);
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function(){

		this.scene.pushMatrix();
		this.MyUnitCubeQuad.scene.translate(2.2,1.75,1.2);
		this.MyUnitCubeQuad.scene.scale(0.3,3.5,0.3);
		this.MyUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.MyUnitCubeQuad.scene.translate(-2.2,1.75,1.2);
		this.MyUnitCubeQuad.scene.scale(0.3,3.5,0.3);
		this.MyUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.MyUnitCubeQuad.scene.translate(-2.2,1.75,-1.2);
		this.MyUnitCubeQuad.scene.scale(0.3,3.5,0.3);
		this.MyUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.MyUnitCubeQuad.scene.translate(2.2,1.75,-1.2);
		this.MyUnitCubeQuad.scene.scale(0.3,3.5,0.3);
		this.MyUnitCubeQuad.display();		
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.MyUnitCubeQuad.scene.translate(0,3.5,0);
		this.MyUnitCubeQuad.scene.scale(5,0.3,3);
		this.MyUnitCubeQuad.display();
		this.scene.popMatrix();

}