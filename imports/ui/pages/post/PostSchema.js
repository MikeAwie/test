import SimpleSchema from 'simpl-schema';

const PostSchema = new SimpleSchema({
  title: {
      type: String
  },
  description: {
      type: String
  }
});

export default PostSchema;