import React, { Component } from 'react';
import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import meme from '../memes.json'
import Header from './header'
class Home extends Component {
  render() {
    let rows = meme.map((value, index) => {
      return <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" alt="{names[index]}" src={value.img} />
          <div className="card-block">
            <h5 className="text">
              {value.title}
            </h5>
            <p>
              <a className="btn btn-primary" href="#">Make Meme</a>
              <a className="btn" href="#">Download</a>
            </p>
          </div>
        </div>
      </div>
    })


    return (
      <div className="Meme Maker">
        <Header />
        <div className="row">
          {rows}
        </div>
      </div>
    )
  }
}

export default Home;