// Generates random hexcode
// Useful when gernerating random colors

function hexcodeGenerator (num) {
    var hexcodeArray = [];
    for (var i = 0; i < num; i++) {
	var hexcode = ["#"];
	for (var h = 0; h < 6; ++h) {
	    // creates hexadecimal(base 16) number
	    var hex = Math.floor(Math.random() * 16).toString(16);
	    hexcode.push(hex);
	    }
	hexcode = hexcode.join("");
	hexcodeArray.push(hexcode);
	}
    return hexcodeArray
}
