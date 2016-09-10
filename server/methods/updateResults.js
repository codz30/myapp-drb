Meteor.methods({
	updateResults: function(docId, setStatus){
		check(setStatus, String);
		if(docId){
			Posts.update(docId, { $set: { resultStatus: setStatus }},
			function(err, ret){
				if(err){
					return(err);
				}
				else {
					//console.log(docId);
					return(docId);
				}
			});

		}
		else{
			return('Error');
		}
	}

//end methods
});
