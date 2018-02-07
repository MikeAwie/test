import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from "/imports/api/posts/collection";

class PostList extends React.Component {
  constructor() {
    super();
  }

  isPostOwner = (post) => {
    return post.userId === Meteor.userId();
  }

  postComments = (_id) => {
    FlowRouter.go('comments', {postId: _id});
  }

  editPost = (_id) => {
    FlowRouter.go('post.edit', {_id: _id});
  }

  removePost = (_id) => {
    Meteor.call('post.remove', _id);
  }

  render() {
    const {isLoading, posts} = this.props;

    if (isLoading) {
      return (<div>Loading...</div>);
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col"><span>Title</span></th>
              <th scope="col"><span>Description</span></th>
              <th scope="col"><span>Actions</span></th>
            </tr>
          </thead>
          <tbody>
            {
              posts.map(post => {
                return (
                  <tr key={post._id}>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td>
                      <span><a href="" onClick={() => this.postComments(post._id)}>Comments </a></span>
                      <span>{this.isPostOwner(post) &&
                    <a href="" onClick={() => this.editPost(post._id)}>Edit </a>}
                    {this.isPostOwner(post) &&
                    <a href="" onClick={() => this.removePost(post._id)}>Delete </a>}</span></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <a href={FlowRouter.url('post.create')}>Create a post</a>
      </div>
    );
  }
}

export default withTracker(() => {
  const handle = Meteor.subscribe('posts');

  return {
    loading: !handle.ready(),
    posts: Posts.find().fetch()
  }
})(PostList);