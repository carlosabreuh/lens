import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';
import SearchPhotos from './searchPhotos';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App() {
  return (
    <div>
      <AmplifySignOut />
      My App
      <div className="App">
        <div className="container">
          <h1 className="tittle">React Photo Search</h1>
          <SearchPhotos />
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
