class Os {
constructor () {
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
	this.audio = new AudioContext();
	this.gain = this.audio.createGain();
	this.timer = setInterval(this.timerCb.bind(this), 50);

	this.gain.gain.setValueAtTime(0.005, this.audio.currentTime);
	this.gain.connect(this.audio.destination);
	this.osc = this.audio.createOscillator();
	this.osc.connect(this.gain);
	this.osc.ended = true;
	this.osc.onended = this.endedCb;

	window.addEventListener("mousemove", this.mousemoveCb.bind(this));
	window.addEventListener("click", this.clickCb.bind(this));
	window.addEventListener("keydown", this.keydownCb.bind(this));

	this.usrDraw = function (){};
	this.usrClick = function(){};
	this.usrMove = function(){};
	this.usrKbdHit = function(){};
}
 
endedCb(e) {
	e.target.ended = true;
}

timerCb() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.usrDraw(this.ctx);
}

mousemoveCb(e) {
	var r = this.canvas.getBoundingClientRect();
	var x = e.clientX - r.left;
	var y = e.clientY - r.top;
	this.usrMove(x, y);
}

clickCb(e) {
	this.usrClick(e);
}

keydownCb(e) {
	this.usrKbdHit(e);
}

fire_noise() {
	//gain.gain.exponentialRampToValueAtTime(0.00001, audio.currentTime + 0.05);
	if (this.osc.ended) {
		this.osc.disconnect();
		this.osc = this.audio.createOscillator();
		this.osc.connect(this.gain);
		this.osc.type = "square";
		this.osc.frequency.setValueAtTime(300, this.audio.currentTime);
		this.osc.frequency.linearRampToValueAtTime(100, this.audio.currentTime + 0.2);
		this.osc.start(0);
		this.osc.stop(this.audio.currentTime + 0.2);
		this.osc.onended = this.endedCb;
		this.osc.ended = false;	
	}
}

} // class