import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faComment, faCubes, faHome, faSearch, faStore, faTv, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

import './styles/Navbar.css'
import logo from '../images/logo.png'
import picture from '../images/picture.png'

class Navbar extends React.Component{
    render(){
        return (
            <nav >
                    <div>
                    <img className="Navbar-logo" src={logo}/>
                    
                    <input  type="text"  className="search_input" placeholder=" Search Facebook"/>
                    </div>
                    
                    <ul>
                        <li>
                            <a href="#"><FontAwesomeIcon size="lg" icon={faHome}/></a></li>

                        <li>
                            <a><FontAwesomeIcon  size="lg" icon={faTv}/></a></li>

                        <li>
                            <a><FontAwesomeIcon size="lg" icon={faStore}/></a></li>

                        <li>
                            <a><FontAwesomeIcon size="lg" icon={faUsers}/></a></li>

                        <li>
                            <a><FontAwesomeIcon size="lg" icon={faCubes}/></a></li>
                    </ul>
                    
                <div className="options-nav">
                <a className="option" href="#"><FontAwesomeIcon size="lg" icon={faBell}/></a>
                <a className="option"href="#"><FontAwesomeIcon size="lg" icon={faComment}/></a>
                <a className="option" href="#"><img className="pictureUser" src={picture} alt="profile picture"/></a>
                </div>

              

            </nav>
        )
    }
}

export default Navbar;