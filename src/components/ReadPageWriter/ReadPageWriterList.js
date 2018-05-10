//this generates the DOM display of the individual stories mapped from the array in redux State for public landing page and readWriter page. The logged-in user can mark a story as a Favorite here. It is a post of the story_id and writer_id to a table used to link the Story and Writer tables of the db, not a boolean.

import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});
 
class ReadPageWriterList extends Component {

  handleClickFavorite = (event) => {
    event.preventDefault();
    alert("To see your Favorites, click Archive")
    console.log('clicked favorite button', this.props.story);
    this.props.dispatch({
      type: 'ADD_FAVORITE',
      payload: this.props.story
    })
  }

  render() {
    
    return (
      <div id="readStory">
          <div>{this.props.story.story}</div>
          <button onClick={this.handleClickFavorite}>Favorite</button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ReadPageWriterList);
