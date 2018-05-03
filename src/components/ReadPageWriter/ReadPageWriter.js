import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

import ReadPageWriterList from './ReadPageWriterList';

const mapStateToProps = state => ({
  user: state.user,
  state
});

class ReadPageWriter extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {

    const readPageWriterList = this.props.state.getResponseReducer.map((story) => {
      return (<ReadPageWriterList key={story.id} story={story}/>)
    })

    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="readWriter"
          >
            Welcome to the Writer's Reading page, { this.props.user.userName }!
          </h1>
          { readPageWriterList }
          <button
            onClick={this.logout}
          >
            Log Out
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
