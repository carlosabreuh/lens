import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';
import SearchPhotos from './searchPhotos';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="tittle">React Photo Search</h1>
        <SearchPhotos />
        <div className="signout">
          <AmplifySignOut />
          My App
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator (App);
