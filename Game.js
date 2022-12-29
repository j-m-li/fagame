
// The authors disclaim copyright to this software.

include("./Piece");
include("./Man");

class Game {
constructor(os) {
	this.os = os;
	this.os.usrDraw = this.draw.bind(this);
	this.os.usrClick = this.click.bind(this);
	this.os.usrMove = this.move.bind(this);
	this.os.usrKbdHit = this.kbdHit.bind(this);

	this.objs = new Array();
	this.objs.push(new Man(0, 0, 10, 10));
	this.objs.push(new Piece(0, 290, 10, 10));
	this.objs.push(new Piece(100, 100, 4, 10));
}	

draw(c) {
	let o0 = this.objs[0];
	for (var o in this.objs) {
		this.objs[o].step();
	}
	for (var o in this.objs) {
		if (this.objs[o].hit(o0)) {
			this.objs[o].setState(Piece.STATE_HIT);
			//this.remove(this.objs[o]);
		}
	}
	c.clearRect(0, 0, c.canvas.width, c.canvas.height);
	for (var o in this.objs) {
		this.objs[o].draw(c);
	}
}

kbdHit(e) {
	if (e.code == "ArrowLeft") {
	}
	if (e.code == "ArrowRight") {
	}
	if (e.key == " ") {
		this.os.fire_noise();
	}
}

click(e) {
	this.os.fire_noise();
}

move(x, y) {
	this.objs[0].move(x, y);
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