import React from 'react';
import Navbar from './nav';
import Home from './Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/Contacts.css';
import pizza from "../images/pizza.png";
import pizzaimg from "../images/pizzaimg.jpg";
import regalo from "../images/regalo.png";
import contacto1 from "../images/contacto1.jpg";
import contacto2 from "../images/contacto2.jpg";
import contacto3 from "../images/contacto3.jpg";
import contacto4 from "../images/contacto4.jpg";
import contacto5 from "../images/contacto5.jpg";

class Contacts extends React.Component{
    render(){
        return(
            <div>
            <Home></Home>
            <div className="Box-contact">
                <div>
                    <h3>Sponsored</h3>
                </div>
                
                <div>
                    <p><img className="picture-pizza" src={pizza}/><b>Lebo's Pizza</b> 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;Experience the trendy pizza spot in 
                    &nbsp;&nbsp;Palo Alto being called the next big thing.</p>
                    <img src={pizzaimg} class="anuncio" />
                </div>
                <div class="linea"></div>
                <div>
                    <h3>Birthdays</h3>
                    <p><img className="picture-pizza"src={regalo}/>
                    <b>Jessica, Erica</b> and <b>2 others </b>
                    have birthdays today</p>
                </div>
                <div class="linea"></div>
                <div>
                    <h3>Contacts </h3>
                    
                </div>
                <ul>
                            <li><img className="imageslist" src={contacto1}/><a href="#">Dennis Han</a></li>
                            <li><img className="imageslist" src={contacto2}/><a href="#">Erick Jones</a></li>
                            <li><img className="imageslist" src={contacto3}/><a href="#">Cinthya Lopez</a></li>
                            <li><img className="imageslist" src={contacto1}/><a href="#">Betty Chen</a></li>
                            <li><img className="imageslist" src={contacto4}/><a href="#">Tina Lim</a></li>
                            <li><img className="imageslist" src={contacto5}/><a href="#">Molly Carter</a></li>
                        
                </ul>
                
            </div>
            </div>
        )
    }
}

export default Contacts