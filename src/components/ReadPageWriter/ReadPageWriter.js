//The ReadPageWriter is the reading page for a logged-in user

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import ReadPageWriterList from './ReadPageWriterList';

const mapStateToProps = state => ({
  user: state.user,
  state
});

class ReadPageWriter extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    this.props.dispatch({
      type:'GET_STORIES'
  });
}

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    this.props.history.push('home');
  }

  render() {

    const readPageWriterList = this.props.state.getResponseReducer.reverse().map((story) => {
      return (<ReadPageWriterList key={story.id} story={story}/>)
    })

    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h3
            id="readWriter"
          >
            Welcome to the Writer's Reading page, { this.props.user.userName }!
          </h3>
          { readPageWriterList }
          <button
            onClick={this.logout}
          >
            Sign Out
          </button>
        </div>
      );
    } 

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ReadPageWriter);
