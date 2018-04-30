import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../components/Nav/Nav';

// import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class ReadPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      readStory: []
    };
  }

  getReadStory = () => {
    axios.get('/api/reader')
    .then((response) => {
      console.log('getReadStory frontend response', response);
      this.setState({
        readStory: response.data
      })
    }).catch((error) => {
      console.log('error getReadStory frontend -- no new readStory array in State', error);
    })
  }

  componentDidMount() {
    this.getReadStory();
  }

  // componentDidUpdate() {
  //   if (!this.props.user.isLoading && this.props.user.userName === null) {
  //     this.props.history.push('home');
  //   }
  // }

  render() {

    return (
      <div>
        <Nav />
        This text is from ReadPage.js. The axios call is working, and the array is this.state.readStory  
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ReadPage);
