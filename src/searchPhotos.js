// import React from "react";
import React, { useState } from 'react';
import Unsplash, {toJson } from 'unsplash-js';

 //toJson is a helper function in the unsplash-js library that is used to convert the response into JSON format.

const unsplash = new Unsplash({
    accessKey: "fh5tKV6AI5-k6RljpGlqQVWy8z0aVe7PZzlmKIBfh0U", //Access key to make API calls to Unsplash
});

export default function SearchPhotos(keyword, page, per_page, filters) {
    const [query, setQuery] = useState(""); //Defining the State
    const [pics, setPics] = useState([]);
    

    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search
        .photos(query, 1, 50)
        .then(toJson)
        .then((json) => {
            setPics(json.results);
           
        });
        console.log("Submitting the Form")
    };
  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input // This is our Search Field
          type="text" //The search input will be a string
          name="query" 
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)} //This will update the state of our value
        />
        <button type="submit" className="button">Search</button>
        
        
      </form>
      <div className="card-list">
          {
          pics.map((pic) => <div className="card">
              <img
                className="card--image"
                alt={pic.alt_description} //alt desctription of the image
                src={pic.urls.full} //path of the image
                width="50%"
                height="50%"
                ></img>
          </div>)
          }
      </div>
    </>
  );
}
