import SimpleSchema from 'simpl-schema';

const PostsSchema = new SimpleSchema({
  title: {
      type: String
  },

  description: {
      type: String
  },

  createdAt: {
      type: Date,
      optional: true
  },

  userId: {
      type: String,
      optional: true
  },

  updatedAt: {
      type: Date,
      optional: true
  }
});

export default PostsSchema;