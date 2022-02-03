import React, {Component} from 'react';
import './style.css';
import israel from "../../images2/israelVarelaLogo2.png";
import {Link} from "react-router-dom";


export default class Header extends Component {
    render(){
        return(
            <div>
            <div className="logoDiv">
                <img style={{backgroundColor: "black"}} alt={"logo"} src={israel}></img>
            </div>

                <div className="nav">
                <p>
                    <Link to="/About">About Me</Link>
                </p>
                <p>
                    <Link to="/Projects">Projects</Link>
                </p>
                <p>
                    <Link to="/Contact">Contact</Link>
                </p>
                </div>
            </div>
        )
    }
}
