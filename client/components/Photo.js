import React, { Component } from 'react';
import { Link } from 'react-router';

class Photo extends Component {
  render() {
    const {
      post,
      comments,
      i
    } = this.props;
    return(
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
            />
          </Link>
        </div>
        <figcation>
          <p>
            {post.caption}
          </p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span> &nbsp;
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcation>
      </figure>
    );
  }
};

export default Photo;
