import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { triggerLogout } from '../../redux/actions/loginActions';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  user: state.user,
});

class Nav extends Component {
  logout = () => {
    this.props.dispatch(triggerLogout());
  }

render(){

  return(
  <div id="headerGroup">  
    <div className="publicNavBar">
      <div>
        <ul>
          <li>
            <Link to="/read">
              Public Reading Page
            </Link>
          </li>
          </ul>
        <ul>
          <li>
              <Link to="/login">
                Sign In
              </Link>
            </li>
        </ul>
      </div>
    </div>
    <div className="writerNavBar">
      
        <ul>
          <li>
            <Link to="/readWriter">
              Read
            </Link>
          </li>
          <li>
            <Link to="/write">
              Write
            </Link>
          </li>
          <li>
            <Link to="/archive">
              Archive
            </Link>
          </li>
          <li onClick={this.logout}>
              <Link to="/home">
                Sign Out
              </Link>
            </li>
        </ul>
      
    </div>
  </div>
);
}
}
export default connect(mapStateToProps)(Nav);
