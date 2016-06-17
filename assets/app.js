$( document ).ready(function() {
	var trainData = new Firebase("https://trainschedulerhw.firebaseio.com/");
		
		$("#submitBtn").on("click", function(){
		 	// Get inputs
		 	var name = $('#name').val().trim(); 
		    var dest = $('#dest').val().trim(); 
		    var time = $('#time').val().trim();
		    var freq = $('#freq').val().trim();

		    var newTrain = {
		    	newName: name,
		    	newDest: dest,
		    	newTime: time,
		    	newFreq: freq
		    }
		    // Change what is saved in firebase
		    trainData.push(newTrain);

		    alert("Train data added");

		    $("#name").val("");
		    $("#dest").val("");
		    $("#time").val("");
		    $("#freq").val("");
				
			return false;
	   	});

	   	trainData.on("child_added", function(childSnapshot, prevChildKey){

	   		var name = childSnapshot.val().newName;
	   		var dest = childSnapshot.val().newDest;
	   		var time = childSnapshot.val().newTime;
	   		var freq = childSnapshot.val().newFreq;

	   		$("#trainTable > tbody").append("<tr><td>" + name + "</td><td>" + dest + "</td><td>" + time + "</td><td>" + freq + "<td></tr>");
	   	})
});