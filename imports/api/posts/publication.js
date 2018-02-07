import { Meteor } from 'meteor/meteor';
import Posts from "/imports/api/posts/collection";

Meteor.publish('posts', function() {
  return Posts.find({}, { sort: { updatedAt: -1 } });
})