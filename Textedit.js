import React,{Component} from 'react';
import header from './header';
import home from './Home';
//import doge from '../imgs/doge.jpg'
import {DISHES} from '../memes';
import 'bootstrap/dist/css/bootstrap.min.css';

import  {Button, ButtonToolbar} from "react-bootstrap";

class Textedit extends Component {
  
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'https://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ allMemeImages: memes })
        })
}

   handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ randomImg: randMemeImg })
  }
  //)
  
  

render() {
    return (

<div>

<form className='meme-form'>
  <input
    type='text'
    name='topText'
    placeholder='Top Text'
    value={this.state.topText}
    onChange={this.handleChange}
  />
  <input
    type='text'
    name='bottomText'
    placeholder='Bottom Text'
    value={this.state.bottomText}
    onChange={this.handleChange}
  />
  <button>gen</button>
   
        <div className='meme'>
         <img src={this.state.randomImg} alt='' />
               <h2 className='top'>{this.state.topText}</h2>
               <h2 className='bottom'>{this.state.bottomText}</h2>
</div>
</form>
      </div>
     
    )
    }
  
  }   


export default Textedit;
