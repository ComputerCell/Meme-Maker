
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Home from './component/Home'
// Wouldn't it be better to use react-bootstrap-sidebar
// As of now the navbar ain't working. FIX IT

// import meme from './memes.json'
// import cat from './imgs/cat.png';
// import grumpy_cat from './imgs/grumpy-cat.jpg';
// import doge from './imgs/doge.jpg';

//  const memes = axios.get('./memes.json')
//  const memes = JSON.parse(meme);
//  alert(memes.Cat);

// const names =["Cat", "Grumpy Cat", "Doge"];
// const imgs = [cat, grumpy_cat, doge];


function App() {

  return (
    <Home />
  );
}

export default App;
