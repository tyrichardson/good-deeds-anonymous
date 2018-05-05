// The ArchivePage has two panes. The pane on the left is a list of the stories published by the logged-in user only, from which the logged-in user can select to Edit or Delete stories they have published. The pane on the right is a list of stories the logged in user has Favorited; the logged-in use can select to Unfavorite items on this list.

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import ArchivePageList from './ArchivePageList';
import FavoritesPageList from './FavoritesPageList';


const mapStateToProps = state => ({
  user: state.user,
  state
});

class ArchivePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({
      type:'GET_WRITER_STORIES_SAGA'
    });
    this.props.dispatch({
      type:'GET_FAVORITES'
    })
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
  
    const archivePageList = this.props.state.getWriterStoriesReducer.map((story) => {
      return (<ArchivePageList key={story.id} story={story}/>)
    })

    const favoritesPageList = this.props.state.getFavoritesReducer.map((story) => {
      return (<FavoritesPageList key={story.id} story={story}/>)
    })

    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <div>
          <h1
            id="archive"
          >
            Welcome to your Archive, { this.props.user.userName }!
          </h1>
          </div>
          <h2>Your Stories</h2>
          <div id="writerStories">
          { archivePageList }
          </div>
          <div id="favorites">
            <h2>Your Favorites</h2>
          { favoritesPageList }
          </div>
          <div>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
          </div>
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
export default connect(mapStateToProps)(ArchivePage);

