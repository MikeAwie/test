import React from 'react';
import {AutoForm, TextField, LongTextField, ErrorField} from "uniforms-unstyled";
import PostSchema from './PostSchema';

class PostCreate extends React.Component {
  constructor() {
    super();
  }

  onSubmit = (data) => {
    Meteor.call('post.create', data, (err) => {
        if (!err) {
            FlowRouter.go('post.list');
        }
        else {
            alert(err.reason);
        }
    })
};

  render() {
    return (
      <div>
        <AutoForm schema={PostSchema} onSubmit={this.onSubmit}>
          <a href={FlowRouter.url('post.list')}>Return to list</a>

          <TextField name="title"/>
          <ErrorField name="title"/>

          <LongTextField name="description"/>
          <ErrorField name="description"/>

          <button type="submit">
           Post
          </button>
        </AutoForm>
      </div>
    );
  }
}

export default PostCreate;