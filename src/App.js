
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// Wouldn't it be better to use react-bootstrap-sidebar
// As of now the navbar ain't working. FIX IT


import cat from './imgs/cat.png';
import grumpy_cat from './imgs/grumpy-cat.jpg';
import doge from './imgs/doge.jpg';

// const memes = axios.get('./memes.json')
// // const memes = JSON.parse(img_json);
// alert(memes.Cat);

const names =["Cat", "Grumpy Cat", "Doge"];
const imgs = [cat, grumpy_cat, doge];



function App() {

  return (
    <div className="Meme Maker">
      <header className="App-header">

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="progress">
                <div className="progress-bar w-75">
                </div>
              </div>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Popular</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>

              </ul>
              <div className="page-header">
                <h1>
                  Meme Maker
                </h1>
              </div>
              <div className="row">

                {imgs.map((value, index) => {
                  return <div className="col-md-4">
                    <div className="card">
                    <img className="card-img-top" alt="{names[index]}" src={value} />
                    <div className="card-block">
                      <h5 className="text">
                        {names[index]}
                      </h5>
                      
                      <p>
                        <a className="btn btn-primary" href="#">Make Meme</a>
                        <a className="btn" href="#">Download</a>
                      </p>
                    </div>
                  </div>
                  </div>
                })}


              </div>
            </div>
          </div>
        </div>


      </header>
    </div>
  );
}

export default App;
