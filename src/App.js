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
  console.log('%c Thank you for stopping by! 😀  This page was built using React.js, React-Router along with JavaScript ES6 making an API call to Unsplash.🤓   ', 'color:blue; font-size:50px');
  var style =
    'color: tomato; background:#eee; -webkit-text-stroke: 1px black; font-size:30px;';
  console.log('%cFeel free to search anything you like and save it to your personal collection.😎   The collection will live for the current session and removed once you log out.😅 -- The application is being hosted with AWS-Amplify, so do not worry about your email ending up in a dark hole🤨, its totally secure! 🤗🦾  Feel free to reach out to me for any questions or suggestions on how i can make this app better! carlos@abreuh.com🤜🤛 ', style);

  return (
    <>
      <AmplifySignOut />
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

          <div className='container'>
            <h2 className='tittle'>React Photo Search</h2>
          </div>
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

      <div className='App'></div>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2></h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2></h2>
    </div>
  );
}

function Collection({ likedPic, addToCollection }) {
  return (
    <div>
      <h2></h2>
    </div>
  );
}

export default withAuthenticator(App);
