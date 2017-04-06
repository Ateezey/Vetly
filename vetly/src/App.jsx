import React, { Component } from 'react';
import './App.css';
import startimg from './start_img.png';
import archer from './archer.jpg';
import malory from './malory.jpg';
import lana from './lana.jpg';
import krieger from './krieger.jpg';

class App extends Component {
  render() {
    return (
        <div>
            <div className="nav">
                <a href="#">Logga in</a>
                <a href="#">Registering</a>
                <a href="#">F.a.Q</a>
                <a href="#">Process</a>
                <a href="#">Veterinärer</a>
                <a href="#">Info</a>
            </div>
            {/*All code except the fixed nav goes here!*/}
                <div className="start">
                    <div className="start-text">
                        <h1 className="heading-start">Träffa veterinär online</h1>
                            <ul className="start-list">
                                <li>✓   Träffa veterinär via videomöte</li>
                                <li>✓   Få råd, recept eller remiss</li>
                                <li>✓   Legitimerade veterinärer & specialister</li>
                                <li>✓   Hemleverans av läkemedel</li>
                                <li>✓   Snabb diagnos eller remiss</li>
                            </ul>
                    </div>
                    
                    <img src={startimg} className="img-start" alt= "logo" />
                    
                
                </div>

                                        
                
                    
                {/*Login / Registration !*/}
                <hr/>
                <div className="sign">
                    <div className="signup">
                        <h1>Sign Up</h1>
                        <form>
                        <input type="name" placeholder="name"/>
                        <input type="name" placeholder="name"/>
                        <input type="name" placeholder="name"/>
                        <input type="name" placeholder="name"/>
                        </form>
                    </div>
                    <div className="signin">
                        <h1>Sign in </h1>
                        <form>
                        <input type="name" placeholder="name"/>
                        <input type="name" placeholder="name"/>
                        <input type="name" placeholder="name"/>
                        <input type="name" placeholder="name"/>
                        </form>
                    </div>
                </div>
                <hr/>
                {/*General info regarding the process*/}
                <div className="info">
                    <center><h1>Att boka möte är lika lätt som 1 2 3</h1></center>
                    <div className="row">  
                        <div className="col-md-4">
                            <h1>stage 1</h1>
                        </div>
                        <div className="col-md-4">
                            <h1>Stage 2</h1>
                        </div>
                        <div className="col-md-4">
                            <h1>stage 3</h1>
                        </div>
                    </div>
                
                </div>
                <hr/>
                {/*A page about the Vets*/}
                <div className="vets">
                    <center>
                    <h3>Veterinärer</h3> 
                    <h4> Vetly erbjuder dem bästa veterinärerna.</h4> 
                    </center> 
                    <div className="col-md-3">
                        <img src={malory} className="malory" alt= "malory" />
                        <h2>Malory</h2>
                        <p>Running the Cyril Agency</p>
                    </div>
                    <div className="col-md-3">
                        <img src={archer} className="archer" alt= "archer" />
                        <h2>Archer</h2>
                        <p>World best secret agent who is into phrasing</p>
                    </div>
                    <div className="col-md-3">
                        <img src={lana} className="lana" alt= "lana" />
                        <h2>Lana</h2>
                        <p>Secret agent and a mother with huge hands</p>
                    </div>
                    <div className="col-md-3">
                        <img src={krieger} className="krieger" alt= "krieger" />
                        <h2>Krieger</h2>
                        <p>Crazy scientist who fancys pigglies</p>
                    </div>
                </div>
                <hr/>
                <div className="faq">
                    <h1>F.a.Q</h1>
                </div>
                <div className="footer">
                    <h1>Footer</h1>
                </div>
            {/*Container ends*/}

               {/*Footer*/}
                
        </div>



      
     );
  }
}

export default App;
