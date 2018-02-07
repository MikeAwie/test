import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'user.register' (data) {
    	Accounts.createUser(data);
    }
});