//this captures each item from the array that is mapped over and returns each separate array element as an item rendered on the DOM
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});

class ReadPageList extends Component {

  render() {
    
    return (
      <div>
          <p>{this.props.story.story}</p>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ReadPageList);
