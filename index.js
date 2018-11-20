var bag = [];
var extracted = [];

 exports.reset = function () {
	'use strict';
	//var bag = [];
	//	var extracted = [];
	for (var i = 1; i <= 90; i++) {

		bag.push(i);
	}

};

this.reset();

exports.extract = function() {
	'use strict';
	var index = parseInt(Math.random() * bag.length);
	//console.log("index =", index);
	//console.log("bag  =", bag[index]);
	var result = bag.splice(index, 1);
	//console.log("result  =", result);
	var n=result[0];
	extracted.push(n);
	return n;
};

exports.getExtracted = function(){
	'use strict';
	return extracted;
};


exports.getBag = function(){
	'use strict';
	return bag;
};


this.extract();
this.extract();
this.extract();
this.extract();

console.log("bag =",this.getBag());
console.log("extracted =",this.getExtracted());


