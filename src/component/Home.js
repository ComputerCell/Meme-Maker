import React, { Component } from 'react';
import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DISHES } from '../memes.js'
import Header from './header'
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Card, CardContent } from "@material-ui/core";
import Textedit from './Textedit'



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {

    let rows = DISHES.map((value, index) => {
      return <Card className={styles.card}>
        <div className={styles.con}>
          <CardContent className={styles.content}>
            <div style={{ position: 'relative' }} >
              <CardMedia
                component="img"
                className={styles.media}
                image={value.img}
              />
              <div style={{ position: 'absolute', color: 'white', top: 8, left: '50%', transform: 'translateX(-50%)' }} >
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <input type="text" placeholder="Top Text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                </form>
              </div>
              <div style={{ position: 'absolute', color: 'white', top: '90%', left: '50%', transform: 'translateX(-50%)' }} >
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <input type="text" placeholder="Bottom Text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                </form>
              </div>
            </div>
            <div className="card-block">
              <h5 className="text">
                {value.title}
              </h5>
              <p>
                <a className="btn btn-primary" href="#">Make Meme</a>
                <a className="btn" href="#">Download</a>
              </p>
            </div>
          </CardContent>
        </div>
      </Card>




      // <div className="col-md-4">
      //   <div className="card">
      //     <img className="card-img-top" alt="{names[index]}" src={value.img} />
      //     <Textedit/>
      //     <div className="card-block">
      //       <h5 className="text">
      //         {value.title}
      //       </h5>
      //       <p>
      //         <a className="btn btn-primary" href="#">Make Meme</a>
      //         <a className="btn" href="#">Download</a>
      //       </p>
      //     </div>
      //   </div>
      // </div>
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


const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 15,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  container: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  },
  topasad: {
    color: 'blue',
    position: 'absolute',
    top: '10%',
    left: '50%',
  },

  media: {
    display: 'flex',
    height: 10,
    objectFit: 'contain',
    alignItems: 'left',

  },
})


export default Home;