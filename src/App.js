//This defines the components/views/client-side routing/title for the header...
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import 'typeface-roboto';
import './styles/main.css';

//These are components
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
//The ReadPage is the unauthenticated Landing page; the ReadPageWriter is the authenticated version of that page.
import ReadPage from './components/ReadPage/ReadPage';
import ReadPageWriter from './components/ReadPageWriter/ReadPageWriter';
import WritePage from './components/WritePage/WritePage';
import ArchivePage from './components/ArchivePage/ArchivePage';

//These are material-ui@next items
import CssBaseline from 'material-ui/CssBaseline';

const App = () => (
 <React.Fragment>
  <CssBaseline />
    <div className="container">

    <Header title="Good Deeds Anonymous" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/home"
          component={ReadPage}
        />
        <Route
          path="/read"
          component={ReadPage}
        />
        <Route
          path="/write"
          component={WritePage}
        />
        <Route
          path="/readWriter"
          component={ReadPageWriter}
        />
        <Route
          path="/archive"
          component={ArchivePage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
  
</React.Fragment>
);

export default App;
