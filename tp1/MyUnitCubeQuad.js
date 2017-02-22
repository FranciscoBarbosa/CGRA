/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCubeQuad(scene) {
	CGFobject.call(this,scene);
	this.quad=new MyQuad(this.scene);
	this.quad.initBuffers();	
	this.deg2rad=Math.PI/180.0;
};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;

MyUnitCubeQuad.prototype.display=function(){
	//face de cima
	this.scene.pushMatrix();
	this.quad.scene.translate(0,0.5,0);
	this.quad.scene.rotate(-90*this.deg2rad,1,0,0);
	this.quad.display();
	this.scene.popMatrix();
	//face de baixo
	this.scene.pushMatrix();
	this.quad.scene.translate(0,-0.5,0);
	this.quad.scene.rotate(90*this.deg2rad,1,0,0);
	this.quad.display();
	this.scene.popMatrix();
	//face de cá direita
	this.scene.pushMatrix();
	this.scene.translate(0.5,0,0);
	this.scene.rotate(90*this.deg2rad,0,1,0);	
	this.quad.display();
	this.scene.popMatrix();
	
	//face de cá esquerda
	this.scene.pushMatrix();
	this.scene.translate(0,0,0.5);
	this.quad.display();
	this.scene.popMatrix();
	
	//face de lá direita
	this.scene.pushMatrix();
	this.scene.translate(0,0,-0.5);
	this.scene.rotate(180*this.deg2rad,0,1,0);
	this.quad.display();
	this.scene.popMatrix();

	//face de lá esquerda
	this.scene.pushMatrix();
	this.scene.translate(-0.5,0,0);
	this.scene.rotate(-90*this.deg2rad,0,1,0);
	this.quad.display();
	this.scene.popMatrix();


}



