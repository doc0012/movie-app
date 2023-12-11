import react from 'react';
import './App.css';
import "./Styles.css";
import { useState } from 'react';
import Moviesdata from './Moviedata';
import Movielist from './Movielist';
import Addmovie from './Addmovie';
import Filter from './Filter';
import Moviecard from './Moviecard';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Trailer from './Trailer';
import  './backk.jpg'




 function App() {
  const [movies, setMovies] = useState(Moviesdata);
  const [searchName, setSearchName] = useState("");
  const [searchRating, setSearchRating] = useState("");
  console.log(movies);
  const addHandler = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    
    <div className="wrapper">
      
      
      <Addmovie addHandler={addHandler} />
      <Routes>
        <Route path='/' element={
         <>
                                     <Filter
        setSearchName={setSearchName}
        setSearchRating={setSearchRating}
      />
        <Movielist
                                    movies={movies}
                                    searchName={searchName}
                                    searchRating={searchRating}/>
      
                                  </>                  
                                  }
                                    />

                                    
        <Route path='/Trailer/:IdMovie' element={<Trailer/>}/>
      </Routes>
    </div>
  );
}

export default App;
