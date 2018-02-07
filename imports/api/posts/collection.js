import { Mongo } from 'meteor/mongo';
import PostsSchema from './schema';

const Posts = new Mongo.Collection('posts');

Posts.attachSchema(PostsSchema);

export default Posts;