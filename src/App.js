
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import Textedit from './component/Textedit';


const App = ()=> {

  return (
      //Route of homejs and textedit js
    <div>
    <BrowserRouter>
<Route path="/" exact component = {Home}></Route>
<Route path="/textedit" component = {Textedit}></Route>
    </BrowserRouter>
</div>
  );
}

export default App;
