import React, { Component } from 'react';
import './css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
    render() {
        return (
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
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

export default Header;