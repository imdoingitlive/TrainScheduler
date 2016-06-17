$( document ).ready(function() {
	var dataRef = new Firebase("https://trainschedulerhw.firebaseio.com/");
		
		$("#submitBtn").on("click", function(){
		 	// Get inputs
		 	name = $('#name').val().trim(); 
		    dest = $('#dest').val().trim(); 
		    time = $('#time').val().trim();
		    freq = $('#freq').val().trim();
		    // Change what is saved in firebase
		    dataRef.push({
		    	name: name,
		        dest: dest, 
		        time: time, 
		        freq: freq
		    });
				
			return false;
	   	});
});