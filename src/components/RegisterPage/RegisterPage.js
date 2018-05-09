import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      state_usa: '',
      message: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const request = new Request('api/user/register', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          state_usa: this.state.state_usa,
        }),
      });

      // making the request to the server to post the new user
      fetch(request)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/login');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={this.registerUser}>
          <h3>Register</h3>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="state_usa">
              US State:
              <input
                type="text"
                name="state_usa"
                placeholder="type full name of state"
                value={this.state.state_usa}
                onChange={this.handleInputChangeFor('state_usa')}
              />
            </label>
          </div>
          <div>
            <input
              id="regButton"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
          <div>
            <p><Link to="/home">Cancel</Link></p>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;

