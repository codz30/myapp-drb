# You'll want to replace these functions. They publish the whole
# collection which is problematic after your app grows

Meteor.publish 'posts', ->
  if Roles.userIsInRole(@userId, [ 'admin' ])
    Posts.find { resultStatus: 'N/A' }, sort: createdAt: -1
  else
    Posts.find owner: @userId

Meteor.publish 'attachments', ->
	Attachments.find()
