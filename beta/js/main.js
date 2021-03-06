function abbrNum(number, decPlaces) {
    decPlaces = Math.pow(10,decPlaces);
    var abbrev = ["k", "m", "b", "t", "q"];
    for (var i=abbrev.length-1; i>=0; i--) {
        var size = Math.pow(10,(i+1)*3);
        if(size <= number) {
             number = Math.round(number*decPlaces/size)/decPlaces;
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }
             number += abbrev[i];
             break;
        }
    }

    return number;
}
function s(a) {
	a = parseFloat(a);
	var b = a.toFixed(2);
	var c = abbrNum(b,2);
	return c;
}
function gEBI(a) {
	var b = document.getElementById(a);
	return b;
}
function updatePipes() {
	gEBI("bmp").innerHTML = abbrNum((Math.floor(money/pricePPM)),2);
	var a = Math.floor(money/(pricePPP+pricePPM));
	gEBI("bppM").innerHTML = abbrNum(a,2);
	if(Math.floor(money/pricePPP)<=PO){
		gEBI("pmp").innerHTML = abbrNum((Math.floor(money/pricePPP)),2);
	}
	else{
		gEBI("pmp").innerHTML = abbrNum(PO,2);
	}
}