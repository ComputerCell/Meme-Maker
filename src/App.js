
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery"

// Wouldn't it be better to use react-bootstrap-sidebar
import cat from './imgs/cat.png';
import grumpy_cat from './imgs/grumpy-cat.jpg';
import doge from './imgs/doge.jpg';

const imgs = [cat, grumpy_cat, doge, cat, grumpy_cat, doge,cat, grumpy_cat, doge,cat, grumpy_cat, doge];


function App() {
  return (
    <div className="Meme Maker">
      <header className="App-header">
        {window.pageXOffset}
        {window.pageYOffset}

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
                  <a className="nav-link disabled" href="#">Contact</a>
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
                    <img className="card-img-top" alt="{index}" src={value} />
                    <div className="card-block">
                      <h5 className="text">
                        {index}
                      </h5>

                      <p>
                        <a className="btn btn-primary" href="#">Make Meme</a>
                        <a className="btn" href="#">Generate</a>
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
