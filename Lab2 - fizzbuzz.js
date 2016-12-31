var promp = function(){
	do{
		var a = prompt("Give me a number between 10 and 20");
	}while(a <10 || a > 20);
	if (a >= 10 && a <= 20){
		alert("a is between 10 and 20!");
	}
};


var fizzbuzz  = function(){
		var str = "";
		var str1 = "";
		for (var i = 0; i < 100; i++){
		if (i % 3 == 0 && i % 5 == 0){
			str = "fizz buzz";
		}
		else if (i % 3 == 0){
			str = "fizz";
		}
		else if (i % 5 == 0){
			str = "buzz";
		}
		if (i % 4 == 0 && i % 6 == 0){
			str1 = " crackle pop";
		}
		else if (i % 4 == 0){
			str1 = " crackle";
		}
		else if (i % 6 == 0){
			str1 = " pop";
		}
		
		console.log( i + " " +  str + str1);
		str = "";
		str1 = "";
		}	
};


var landscape = function(flatSize,mountSize,lakSize,forSize){
	var result = "";
	var flat = function(flatSize){
		for (var i  = 0; i < flatSize; i++)
			result += "_";
	};
	var mountain = function(mountSize){
		result += "/";
		for (var i = 0; i < mountSize; i++)
			result += "'";
		result += "\\";
	};
	var lake = function(lakSize){
		for (var i = 0; i < lakSize; i++)
			result += "~";
	};
	var forest = function(forSize){
		for (var i = 0; i < forSize; i++)
			result += "A";
	};
	flat(flatSize);
	mountain(mountSize);
	lake(lakSize);
	forest(forSize);
	return result;
};


var power = function(exponent){
	var result = 1;
	 return function(number){
		for (var count = 0; count < exponent; count++)
			result *= number;
		return result;
		 
	};
};


 promp();
 fizzbuzz();
 console.log(landscape(1,2,3,4));
 var squared = power(2);
 console.log(squared(2));
 