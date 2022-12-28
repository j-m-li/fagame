include("./Piece");

class Game {
constructor (os) {
	this.os = os;
	this.os.usrDraw = this.draw.bind(this);
	this.os.usrClick = this.click.bind(this);
	this.os.usrMove = this.move.bind(this);
	this.os.usrKbdHit = this.kbdHit.bind(this);
	
	this.x = 10;
	this.y = 20;
	this.objs = new Array();
	this.objs.push(new Piece(0, 0));
}

draw(c) {
	for (var o in this.objs) {
		this.objs[o].draw(c);
	}
	c.beginPath();
	c.moveTo(this.x, this.y);
	c.lineTo(this.x + 4, this.y + 4);
	c.stroke();
	c.closePath();
}

kbdHit(e) {
	if (e.code == "ArrowLeft") {
	}
	if (e.code == "ArrowRight") {
	}
	if (e.key == " ") {
	
	}
	this.os.fire_noise();
}

click(e) {
	this.os.fire_noise();
}

move(x, y) {
	this.x = x;
	this.y = y;
}

remove(o) {
	for (var i = 0; i < this.objs.length; i++) {
		if (this.objs[i] == o) {
			this.objs.splice(i, 1);
			return;
		}
	}	
}

}