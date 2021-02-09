// import React from "react";
import Modal from './Modal';
import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
// Unsplash library to import into searchPhotos.js.
//toJson is a helper function in the unsplash-js library that is used to convert the response into JSON format.

const unsplash = new Unsplash({
  accessKey: 'fh5tKV6AI5-k6RljpGlqQVWy8z0aVe7PZzlmKIBfh0U',
  //Access key to make API calls to Unsplash
});

export default function SearchPhotos({ addToCollection, likedPic }) {
  const [query, setQuery] = useState('');
  //[query] stores the state, [setQuery] is a function that can be called to update the state.
  //input from the search bar is a string, so an empty string as an initial value of the state is used.

  const [pics, setPics, likes] = useState([]);
  //

  const [modal, setModal] = useState(false);
  const [currentPic, setCurrentPic] = useState(null);

  const searchPhotos = async (e) => {
    //Asynchronous function is triggered when clicking the Search Button.
    e.preventDefault(); //this string will stop the page from reloading whenever the search button is clicked.
    unsplash.search
      .photos(query, 1, 10)
      //This will define how many photos we'd want to render after the Search button is pressed.   I have it set to 10 for performance purposes.
      .then(toJson)
      .then((json) => {
        setPics(json.results);
        //This will return the results in a JSON format.
      });

    console.log('Submitting the Form'); //A helper that will tell us the form was submitted when the search button is clicked.
  };
  return (
    <>
      <form className='form' onSubmit={searchPhotos}>
        <label className='label' htmlFor='query'>
          {' '}
          📷
        </label>

        <input // This is our Search Field
          type='text' //The search input will be a string
          name='query'
          className='input'
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)} //This will update the state of our value
        />

        <button type='submit' className='button'>
          Search
        </button>
      </form>

      {/**=======Card List Scope=========== */}

      <div className='card-list'>
        {pics.map((pic, index) => (
          <div className='card' key={index}>
            <img
              className='card--image'
              alt={pic.alt_description} //alt desctription of the image
              src={pic.urls.regular} //path of the image
              width='50%'
              height='50%'
              onClick={() => {
                setModal(!modal);
                setCurrentPic(pic);
              }}
            ></img>
          </div>
        ))}
      </div>

      {/**=======   MODAL   =========== */}

      {modal ? (
        <Modal>
          <div className='modal'>
            <img className='modal-body' src={currentPic.urls.regular}></img>
            <button onClick={() => addToCollection([currentPic, ...likedPic])}>
              {' '}
              ❤️{' '}
            </button>

            <button onClick={() => setModal(!modal)}>❌</button>
          </div>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
}

//keyword, page, per_page, filters
