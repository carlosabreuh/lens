// import React from "react";
import Modal from './Modal';
import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

// import Modal from './Modal';

//toJson is a helper function in the unsplash-js library that is used to convert the response into JSON format.

const unsplash = new Unsplash({
  accessKey: 'fh5tKV6AI5-k6RljpGlqQVWy8z0aVe7PZzlmKIBfh0U', //Access key to make API calls to Unsplash
});

export default function SearchPhotos({ addToCollection, likedPic }) {
  const [query, setQuery] = useState(''); //Defining the State
  const [pics, setPics, likes] = useState([]);
  // const [closeModal, setExpand] = useState(false);

  const [modal, setModal] = useState(false);
  const [currentPic, setCurrentPic] = useState(null);

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query, 1, 10)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
    //Haben's mess>>>>>>> .then(()=> unsplash.search.photos(query,2,30).then(toJson).then((json)=> {setPics([...pics,json.results])}))
    console.log('Submitting the Form');
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

      {modal ? (
        <Modal>
          <div className='modal'>
            <img className='modal-body' src={currentPic.urls.regular}></img>
            <button onClick={() => addToCollection([currentPic, ...likedPic])}>
              {' '}
              ❤️{' '}
            </button>
            {/* <button tittle='Add to collection' className='addtocollection'>
              {' '}
              ➕{' '}
            </button> */}
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
