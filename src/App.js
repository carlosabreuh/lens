import React from 'react';
import './App.css';
import SearchPhotos from './searchPhotos';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="tittle">React Photo Search</h1>
        <SearchPhotos />
        <div>
          <AmplifySignOut />
          My App
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
