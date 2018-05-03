// The ReadPage is the Public Reading View/Landing page. No auth is required. The data GET for the site is run when this componentDidMount, via a saga and reducer, and the data is in an array at this.props.state.getResponseReducer.

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import ReadPageList from './ReadPageList';

const mapStateToProps = state => ({
  state
});

class ReadPage extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_STORIES'
    })
  }

  render() {
    let readPageList = this.props.state.getResponseReducer.map((story) => {
      return (<ReadPageList key={story.id} story={story}/>)
    })

    return (
      <div>
        <Nav />
          { readPageList }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ReadPage);
