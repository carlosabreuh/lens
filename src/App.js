import React from 'react';
// import Modal from './Modal'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';
import SearchPhotos from './searchPhotos';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {
  /** Modals component */
  // state = {
  //   modal: false,
  // };

  // selectModal = (info) => {
  //   this.setState({ modal: !this.state.modal }); // true/false toggle
  // };
  /**Modals component */

  return (
    <div className='App'>
      {/* <p onClick={this.selectModal}>Open Modal</p>
      <Modal />
      displayModal={this.state.modal}
      closeModal={this.selectModal} */}
    <div><AmplifySignOut /></div>

      <div className='container'>
        {/* <div className='signout'> */}

        <h2 className='tittle'>React Photo Search</h2>
        <SearchPhotos />
      </div>
    </div>
  );
}

export default withAuthenticator(App);
