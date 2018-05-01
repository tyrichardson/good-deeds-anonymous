import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../components/Nav/Nav';
import ReadPageList from './ReadPageList';

const mapStateToProps = state => ({
  state
});

class ReadPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      readList: []
    };
  }

  getReadItems = () => {
    axios.get('/api/reader')
    .then((response) => {
      console.log('getReadStory frontend response', response);
      this.setState({
        readList: response.data
      })
    }).catch((error) => {
      console.log('error getReadItems frontend', error);
    })
  }

  componentDidMount() {
    this.getReadItems();
  }

  render() {
    let readPageList = this.state.readList.map((story) => {
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
