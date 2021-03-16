import React from 'react';
import Contacts from './Contacts';
import './styles/Stories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contacto1 from "../images/contacto1.jpg";
import contacto2 from "../images/contacto2.jpg";
import contacto3 from "../images/contacto3.jpg";
import contacto5 from "../images/contacto5.jpg";
import picture from '../images/picture.png';
import photo from '../images/iconsfacebook.jpg';
import tagfriends from '../images/tagfriends.png';
import feeling from '../images/feeling.png';
import add from "../images/add.png";
import FotoUsuario from "../images/FotoUsuario.jpg";
import post from "../images/post.jpg";


import { faCommentAlt, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


class Stories extends React.Component{
    render(){
        return(
            <div>
                <Contacts></Contacts>
                
                    <div class="story owl-carousel owl-theme">
                        <div class="story-item item"  style={{ backgroundImage: `url('${picture}')`}}> 
                            <div class="rounded"  style={{ backgroundImage: `url('${add}')`}}></div>
                            <span>Add to Story</span>
                        </div>
                        <div class="story-item item"  style={{ backgroundImage: `url("https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59a669fc5bafe88febb3d6cc/gatito-cesped_0.jpg")`}}> 
                            <div class="rounded"  style={{ backgroundImage: `url('${contacto2}')`}}></div>
                            <span>Tom Russo</span>
                        </div>

                        <div class="story-item item"  style={{ backgroundImage: `url("https://aws.glamour.mx/prod/designs/v1/assets/620x414/202063.jpg")`}}> 
                            <div class="rounded"  style={{ backgroundImage: `url('${contacto5}')`}}></div>
                            <span>Betty Chen</span>
                        </div>

                        <div class="story-item item"  style={{ backgroundImage: `url("https://image.freepik.com/foto-gratis/macetas-plantulas-plantacion-plantulas-plantitas-plantas-suculentas-sempervivum_87646-7980.jpg")`}}> 
                            <div class="rounded"  style={{ backgroundImage: `url('${contacto1}')`}}></div>
                            <span>Dennis Han</span>
                        </div>

                        <div class="story-item item"  style={{ backgroundImage: `url("https://nebula.wsimg.com/c1b385757ed97934963ab4e6323bbd37?AccessKeyId=75084DE0FCCF93BBA482&disposition=0&alloworigin=1")`}}> 
                            <div class="rounded"  style={{ backgroundImage: `url('${contacto3}')`}}></div>
                            <span>Cynthia Lopez</span>
                        </div>
                    </div>

                    
                    <div className="add-post">
                        
                        <img  className="pictureUsuario" src={picture}/>
                        <input  type="text"  className="addpost" placeholder="What's on your mind, Josephine?"/>
                        
                        <div className="option-post">
                            <a href="#"><img src={photo}/>Photo/Video</a>
                            <a href="#"><img src={tagfriends}/>Tag Friends</a>
                            <a href="#"><img src={feeling}/>Feeling/Activity</a>
                        </div>
                    </div>

                    

                    <div className="posts">
                        <p><img className="pictureUsuario"src={FotoUsuario}/><b>Fiona Ozeri</b> </p>
                        
                           
                        
                        <p>This has some great healthy recipes</p>
                        <img className="post-picture" src={post}/>

                        <div className="option-post">
                            <div className="options">
                            <a href="#"><FontAwesomeIcon size="lg" icon={faThumbsUp}/>&nbsp;Me gusta</a>
                            <a href="#"><FontAwesomeIcon size="lg" icon={faCommentAlt}/>&nbsp;Comentar</a>
                            <a href="#"><FontAwesomeIcon size="lg" icon={faShare}/>&nbsp;Compartir</a>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Stories