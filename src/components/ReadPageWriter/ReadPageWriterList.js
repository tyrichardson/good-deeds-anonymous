//this generates the DOM display of the individual stories mapped from the array in redux State for public landing page and readWriter page

import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});

class ReadPageWriterList extends Component {

  render() {
    
    return (
      <div>
          <p>{this.props.story.story}</p>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ReadPageWriterList);
