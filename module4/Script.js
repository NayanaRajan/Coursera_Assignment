(function(){

var names = ["Nayana", "Shanu", "John", "Lucy", "Jeena", "Jason", "Thomas", "Jacobe", "Marry", "Arun", "Larry", "Jin"];
	for (var i = 0; i < names.length; i++) {
		var firstLetter = names[i].charAt(0).toLowerCase();
		 if (firstLetter === 'j') {
 			   byeSpeaker(names[i]);
	  	} else {
    			helloSpeaker(names[i]);
  		}
	}

})();