//this generates the DOM display of the individual stories by logged-in user on the Archive page

import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});

class ArchivePageList extends Component {

  render() {
    
    return (
      <div>
          <p>{this.props.writerStory.story}</p>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ArchivePageList);