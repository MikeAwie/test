import SimpleSchema from 'simpl-schema';

const CommentSchema = new SimpleSchema({
  text: {
    type: String
  }
});

export default CommentSchema;