import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';


class Single extends Component {
  render() {
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.id);
    const post = this.props.posts[i];
    const postComments = this.props.comments[post.code] || [];
    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
};

export default Single;
