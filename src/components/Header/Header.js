import React, {Component} from 'react';
import './style.css';
import israel from "../images/israel-varela-logo-2.png";
import {Link} from "react-router-dom"

export default class Header extends Component {
    render(){
        return(
            <div>
                <img style={{backgroundColor: "black"}} alt={"logo"} src={israel}></img>
                <div className="nav">
                <p>
                    <Link to="/home">About Me</Link>
                </p>
                <p>
                    <Link to="/home">Portfolio</Link>
                </p>
                <p>
                    <Link to="/contact">Contact</Link>
                </p>
                <p>
                    <Link to="/resume">Resume</Link>
                </p>
                </div>
            </div>
        )
    }
}
