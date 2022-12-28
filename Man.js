
// The authors disclaim copyright to this software.

class Man extends Piece {
constructor(x, y, w, h) {
	super(x, y, w, h);
}

draw(c) {
	c.beginPath();
	c.moveTo(this.x, this.y);
	c.quadraticCurveTo(this.x + this.w * 2, this.y - this.h, this.x + this.w, this.y + this.h);
	c.lineTo(this.x, this.y + this.h);
	c.lineTo(this.x, this.y);
	c.stroke();
	c.closePath();	
}

} // class