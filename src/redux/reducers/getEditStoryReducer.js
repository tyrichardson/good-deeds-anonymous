const getEditStoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET__EDIT_STORY_REDUCER' :
      return action.payload;
    default:
      return state;
  }
}

export default getEditStoriesReducer;