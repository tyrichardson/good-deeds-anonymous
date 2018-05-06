//this generates the DOM display of the individual stories by logged-in user on the Archive page

import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});

class ArchivePageList extends Component {

  handleClickEdit = () => {
    console.log('clicked edit button', this.props.story);
    this.props.dispatch({
      type: 'EDIT_ARCHIVE_STORY',
      payload: this.props.story
    })
  }
  
  handleClickDelete = () => {
    console.log('clicked delete button', this.props.story);
    this.props.dispatch({
      type: 'DELETE_ARCHIVE_STORY',
      payload: this.props.story
    })
  }

  render() {
    
    return (
      <div>
          <p>{this.props.story.story}</p>
          <button onClick={this.handleClickEdit}>Edit</button>
          <button onClick={this.handleClickDelete}>Delete</button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ArchivePageList);