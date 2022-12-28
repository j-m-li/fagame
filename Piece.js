class Piece {

static get STATE_VISIBLE() 	{return 1;}
static get STATE_HIT() 		{return 2;}
static get STATE_REMOVE() 	{return 3;}

constructor (x, y, w, h) {
	this.x = x; // left
	this.y = y; // top
	this.w = w;
	this.h = h; 
	this.state = Piece.STATE_VISIBLE;
}

setState(s) {
	this.state = s;
}

draw(c) {
	c.beginPath();
	c.moveTo(this.x, this.y);
	c.lineTo(this.x + this.w, this.y);
	c.lineTo(this.x + this.w, this.y + this.h);
	c.lineTo(this.x, this.y + this.h);
	c.lineTo(this.x, this.y);
	c.stroke();
	c.closePath();	
}

move(x, y) {
	this.x = x;
	this.y = y;
}

step() {
	switch (this.state) {
	case Piece.STATE_VISIBLE:
		this.x += 0.1;
		break;
	case Piece.STATE_HIT:
		this.x += -1;
		break;
	
	}
}

hit(o) {
	if (o === this) {
		return false;
	}
	if (o.x + o.w >= this.x && o.x < this.x + this.w) {
		if (o.y + o.h >= this.y && o.y < this.y + this.h) {
			return true;
		}
	}
	return false;
}

} // class