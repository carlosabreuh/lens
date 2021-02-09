import React, { useState } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import SearchPhotos from './searchPhotos';
import Modal from './Modal';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {
  const [likedPic, addToCollection] = useState([]); //
  const [modal, setModal] = useState(false);
  const [currentPic, setCurrentPic] = useState(null);

  var style =
    'color: tomato; background:#eee; -webkit-text-stroke: 1px black; font-size:30px;';
  console.log(
    '%cThank you for stopping by! 😀  This page was built using React.js, React-Router along with JavaScript ES6 making an API call to Unsplash.🤓 carlos@abreuh.com🤜🤛 ',
    style
  );

// 

  return (
    <>
      <AmplifySignOut /> {/**Sign out TAG */}
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
              <Link to='/collection' contentEditable='true'>
                {' '}
                Collection
              </Link>
            </li>
          </ul>
          <div className='container'>
            <h2 className='tittle'>React Photo Search</h2>
          </div>
          <hr />

          <Switch>
            <Route exact path='/'>
              <Home />
              <SearchPhotos /** */
                likedPic={likedPic}
                addToCollection={addToCollection}
              /> 
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route
              path='/collection'
              render={() => (
                <Collection
                  likedPic={likedPic}
                  addToCollection={addToCollection}
                  modal={modal}
                  setModal={setModal}
                  currentPic={currentPic}
                  setCurrentPic={setCurrentPic}
                />
              )}
            />
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
      <h3></h3>
    </div>
  );
}

function Collection({
  likedPic,
  addToCollection,
  setModal,
  modal,
  currentPic,
  setCurrentPic,
}) {
  console.log(likedPic);
  const pics = likedPic ? likedPic : [];

  return (
    <div>
      <h2>Your Liked Photos!</h2>

      <div className='card-list'>
        {pics.map((pic, index) => (
          <div
            className='card'
            key={index}
            onClick={() => {
              setModal(!modal);
              setCurrentPic(pic);
            }}
          >
            <img
              className='card--image'
              alt={pic.alt_description} //alt desctription of the image
              src={pic.urls.regular} //path of the image
              width='50%'
              height='50%'
            ></img>
          </div>
        ))}

        {modal ? (
          <Modal>
            <div className='modal'>
              <img className='modal-body' src={currentPic.urls.regular}></img>

              <button onClick={() => setModal(!modal)}>❌</button>
            </div>
          </Modal>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default withAuthenticator(App);
