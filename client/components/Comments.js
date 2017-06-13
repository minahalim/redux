import React, { Component } from 'react';

class Comments extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const id = this.props.params.id;
    const auth = this.refs.auth.value;
    const comment = this.refs.comment.value;
    this.props.addComment(id, auth, comment);
    this.refs.commentForm.reset();
  }
  removeComment(id, i) {
    this.props.removeComment(id, i);
  }
  render() {
    return (
        <div className="comments">
          {
            this.props.postComments.map((comment, i) => {
              return (
                <div key={i} className="comment">
                  <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.removeComment.bind(null, this.props.params.id, i)}>
                      &times;
                    </button>
                  </p>
                </div>
              );
            })
          }
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="auth" placeholder="author" />
            <input type="text" ref="comment" placeholder="comment" />
            <input type="submit" hidden />
          </form>
        </div>
    );
  }
}

export default Comments;
