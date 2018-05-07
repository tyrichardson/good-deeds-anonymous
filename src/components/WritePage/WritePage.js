import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
  state
});

class WritePage extends Component {
  state = {
    newStory: '',
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleChange = (event) => {
    this.setState({
      newStory: event.target.value,
    });

  }
  handleClick = (event) => {
    event.preventDefault();
    alert("Need to do some editing? Click on Archive");
    //prompt CANCEL sets newStory state to empty default; doesn't save work.
    ReactDOM.findDOMNode(this.refs.textarea).focus();
    console.log('click publish button:', this.state.newStory);
    this.props.dispatch({
      type: "POST_STORY",
      payload: this.state
    });
    this.setState({
      newStory: ''
    });
}

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h3
            id="welcome"
          >
            Welcome to the Writing page, { this.props.user.userName }!
          </h3>
          <div id="storyTextArea">
            <textarea ref="textarea" value={this.state.newStory} onChange={this.handleChange} autoFocus row="4" cols="12" placeholder="type your story here">
            </textarea>
          </div>
          <button type="submit" onClick={this.handleClick}>Publish</button>
          <br />
          <button
            onClick={this.logout}>
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
export default connect(mapStateToProps)(WritePage);

