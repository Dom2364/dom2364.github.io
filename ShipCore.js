var start = function() {
	window.addEventListener('keydown', handleKeyDown, true)
	window.addEventListener('keyup', handleKeyUp, true)

	var maxspeed = 6;
	var xforce = 0;
	var pixelx = 0;
	var direction = 0;
	var key_left = false;
	var key_right = false;
	var key_up = false;
	var key_down = false;
	var X;
	var Y;

	setInterval(function(){
		
		if (key_up)
		{
		  xforce++;
		}


		if (key_down)
		{
			xforce--;
		}
		
		
		if (key_left)
		{
			rotate("L")
		}
		
		
		if (key_right)
		{
			rotate("R")
		}


		if (xforce > maxspeed)
			xforce = maxspeed;
		if (xforce < -maxspeed)
			xforce = -maxspeed;


		if (!key_left && !key_right && !key_up && !key_down)
			{
				   pixelx = 0;
				   xforce = 0;
			}

		else
			{      
				   pixelx += xforce;
			}

	},5)	
			
	var rotate = function(RorL) {
		if (RorL === "L") {
			if (direction === 0) {
				direction = 359
			}
			else {
				direction = direction - 1
			}
			update()
		}
		if (RorL === "R") {
			if (direction === 359) {
				direction = 0
			}
			else {
				direction = direction + 1
			}
			update()
		}
	}

	var update = function() {
		newdirection = "rotate(" + direction + ")"
		
		rad = direction * Math.PI / 180
		newX = X + Math.cos(rad * direction)
		newY = Y + Math.sin(rad * direction)
		
		document.getElementById("ship").style.transform = newdirection
		document.getElementById("ship").style.top = newY + "px"
		document.getElementById("ship").style.left = newX + "px"
	}
			
	function handleKeyDown(event)
		{
			if (event.keyCode == 37) 
					key_left = true;
			if (event.keyCode == 39)
					key_up = true;
			if (event.keyCode == 38) 
					key_left = true;
			if (event.keyCode == 40)
					key_down = true;
		}

	function handleKeyUp(event)
		{
				if (event.keyCode == 37) 
					key_left = false;
				if (event.keyCode == 39)
					key_right = false;
				if (event.keyCode == 38) 
					key_left = false;
				if (event.keyCode == 40)
					key_down = false;
		}
}
