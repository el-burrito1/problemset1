var letterCapitalize = function(string){
	
	var sentence = string.split(" ");

	for(i=0 ; i < sentence.length ; i++){
		sentence[i] = sentence[i].substr(0 , 1).toUpperCase() +
				(sentence[i].substr(1).toLowerCase());
		}

		return sentence.join(" ");
};


letterCapitalize("Hi how are you");


//////////////////////////////////////////////////////


var wordCount = function(string){

	var countArray = string.split(" ");

	return countArray.length;
};


wordCount("Hi how are you");



////////////////////////////////////////////////////


var primeTime = function(n){
	for(i=2 ; i < n ; i++){
		if (n%i === 0){
			return n + " is composite";
		} else {
			return n + " is prime";
		}
	}
}

primeTime(11);