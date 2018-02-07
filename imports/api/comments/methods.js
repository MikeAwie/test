import { Meteor } from 'meteor/meteor';
import Comments from "/imports/api/comments/collection";
import Security from '/imports/api/security.js';
import { createQuery } from 'meteor/cultofcoders:grapher';

Meteor.methods({
  'comment.list'(postId) {
    const query = Comments.createQuery({
      $filters: {
        postId: postId
      },
      $options: {
        sort: {createdAt: -1}
    },
      text: 1,
      createdAt: 1,
      postId: 1,
      userId: 1
    })
    return query.fetch();
  },
  'comment.add'(postId, data) {
    Security.checkLoggedIn(this.userId);
    return Comments.insert({postId: postId, text: data.text});
  },
  'comment.remove'(_id) {
    Security.checkLoggedIn(this.userId);
    return Comments.remove({_id: _id});
  }
});