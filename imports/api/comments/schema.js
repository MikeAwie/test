import SimpleSchema from 'simpl-schema';

const CommentsSchema =  new SimpleSchema({
    text: {
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
    postId: {
        type: String,
        optional: true,
    }
});

export default CommentsSchema;