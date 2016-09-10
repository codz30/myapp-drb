
Template.post.events({
	'click .set-result': function(event){
		let me = this;
		//console.log(event.currentTarget.textContent);
		Meteor.call('updateResults', this._id, event.currentTarget.textContent, function(err, post){
			if(!err){
				sAlert.closeAll();
				sAlert.info("Result updated. <br /><a href class = 'undo-result'>Undo?</a>", {timeout: 8000, position: 'top-right', html: true, relatedTo: me._id});
			}
		});
	},

});

Template.sAlert.events({
	'click .undo-result': function(e){
		e.preventDefault();
		sAlert.close(this._id);
		Meteor.call('updateResults', this.relatedTo, "N/A", function(err, post){
			if(!err){
				//sAlert.info("Result reset.", {timeout: 1000, position: 'top-right'});
			}
		});
	}
});
