import React from 'react';
import Navbar from './nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


import './styles/Home.css'
import tabletalk from "../images/tabletalk.jpg";
import saved from "../images/Saved.jpg";
import events from "../images/events.png";
import pages from "../images/pages.png";
import friends from "../images/friends.jpg";
import settings from "../images/settings.jpg";
import seemore from "../images/seemore.jpg";
import picture from '../images/picture.png'

class Home extends React.Component{
render(){
    return(
        <div>
            <Navbar></Navbar>
                <div className="Box-home">
                    <div className="container-fluid">
                        <div className="home-content">
                            <h3 >Home</h3> <a  className="elements-home" href="#">Create</a>
                        </div>
                        <div>
                        <a href="#"><img className="picture-User" src={picture}/> &nbsp;&nbsp; Josephine Williams</a>
                        </div>
                        <div>
                        <a href="#"><FontAwesomeIcon size="lg" icon={faUserPlus}/>&nbsp;&nbsp;&nbsp;2 pending friends requests</a>
                        </div> 
                        <div class="linea"></div>
                        <ul>
                            <li><img className="imageslist" src={tabletalk}/><a href="#">Red Table Talk Group</a></li>
                            <li><img className="imageslist" src={events}/><a href="#">Events</a></li>
                            <li><img className="imageslist" src={saved}/><a href="#">Saved</a></li>
                            <li><img className="imageslist" src={pages}/><a href="#">Pages</a></li>
                            <li><img className="imageslist" src={friends}/><a href="#">Friends</a></li>
                            <li><img className="imageslist" src={settings}/><a href="#">Settings & Privacity</a></li>
                            <li><img className="imageslist" src={seemore}/><a href="#">See More</a></li>
                        </ul>
                    </div>
                    <footer>
                        <div >Privacity - Terms - Advertising - Ad Choices - Cookies </div>
                        <div >- More - Facebook © 2019</div>
                    </footer>
                </div>
        </div>

    )
}

}

export default Home;
