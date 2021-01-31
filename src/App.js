import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';
import SearchPhotos from './searchPhotos';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="tittle">React Photo Search</h2>
        <SearchPhotos />
        <div className="signout">
          <AmplifySignOut />
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator (App);
