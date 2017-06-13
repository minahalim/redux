function postComments(state=[], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      const author = action.author;
      const comment = action.comment;
      return [
        ...state,
        {
          user: author,
          text: comment
        }
      ];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }

  return state;
}

export default comments;
