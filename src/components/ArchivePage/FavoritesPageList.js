//this generates the DOM display of the individual favotires by logged-in user on the Archive page

import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});

class FavoritesPageList extends Component {

  render() {
    
    return (
      <div>
          <p>{this.props.story.story}</p>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(FavoritesPageList);