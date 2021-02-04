import React, { useState } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import SearchPhotos from './searchPhotos';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {
  const [likedPic, addToCollection] = useState([]);
  return (
    <>
      <Router>
        <div className='topnav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/collection'>Collection</Link>
            </li>
          </ul>
          <ul>
            <AmplifySignOut />
          </ul>

          <hr />

          <Switch>
            <Route exact path='/'>
              <Home />
              <SearchPhotos
                likedPic={likedPic}
                addToCollection={addToCollection}
              />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/collection'>
              <Collection
                likedPic={likedPic}
                addToCollection={addToCollection}
              />
            </Route>
          </Switch>
        </div>
      </Router>

      <div className='App'>
        <div className='container'>
          <h2 className='tittle'>React Photo Search</h2>
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Collection({ likedPic, addToCollection }) {
  return (
    <div>
      <h2>Collection</h2>
    </div>
  );
}

export default withAuthenticator(App);
