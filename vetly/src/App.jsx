import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import account from './account.jpg';
import startimg from './start_img.png';
import doc from './doc.png';
import doctor from './doctor.jpg';
import startimg2 from './phone1.png';
import appstore from './app-store.png';
import cal from './cal.jpg';
import convo from './convo.jpg';
import map from './map.jpg';
import vetlylogo from './VETLYLOGO.png';
import logo from './vetly_logo.png';
import footerlogo from './vetly_logo_white.png';
import computerimg from './btn_computer.png';
import star from './star.png';
import Form from './form.jsx';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home.js';
import Headroom from'react-headroom';



{/*asdadasda*/}
class App extends Component {

  render() {
    
 
    configureAnchors({offset: -70, scrollDuration: 400});
    return (
      <div>
      <Router>
        <div>

            <Headroom>
            <nav>
            <a href='#start'><Link to='/'><img src={logo} className="vetly_logo" alt= "vetly.se" /></Link></a>
                <input id="nav" type="checkbox" />
                <label htmlFor="nav">
                    <span />
                    <span />
                    <span />
                </label>
                
                <ul className="menu">
                    <li><a href='/#services'>Funktion</a></li>
                    <li><a href='/#vets'>Veterinärer</a></li>
                    <li><Link to="/Form">Skapa konto</Link></li>
                    <li><Link to="/Form">Logga in</Link></li>
                </ul>
            </nav>
            </Headroom>
            <Route exact={true} path="/" component={Home} />
            <Route path="/Form" component={Form} />
            
          </div>
            </Router>


            {/*All code except the fixed nav goes here!*/}
            

            </div>











     );
  }
}

export default App;
