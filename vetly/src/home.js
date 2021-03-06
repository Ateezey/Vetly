import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import TextCarousel from 'react-text-carousel';
import account from './img/account.jpg';
import startimg from './img/start_img.png';
import doc from './img/doc.png';
import doctor from './img/doctor.jpg';
import startimg2 from './img/phone1.png';
import appstore from './img/app-store.png';
import cal from './img/cal.jpg';
import convo from './img/convo.jpg';
import map from './img/map.jpg';
import vetlylogo from './img/VETLYLOGO.png';
import logo from './img/vetly_logo.png';
import footerlogo from './vetly_logo_white.png';
import computerimg from './img/btn_computer.png';
import star from './img/star.png';
import horsebg from './img/horsebg.jpeg';

class Home extends Component {

  render() {
    configureAnchors({offset: -70, scrollDuration: 400});
    const phrases = ["hältutredningar", "ledbehandlingar", "tandundersökningar", "besiktningar", "röntgen", "endoskopi", "och mer därtill.."]; // Required
    const interval = 2600; // The time to wait before rendering the next string
    const typistProps = {} // Props that are passed to the react-typist component
    return (

    <ScrollableAnchor id={'start'}>
    <div>
    {/*All code except the fixed nav goes here!*/}
    <div className="start">
        <div className="start-text">
            <h1 className="heading-start">Träffa veterinär online</h1>
            <p className="start-infotext">Få experthjälp snabbt och enkelt vart än du befinner dig till<br />
            en tredjedel av kostnaden av ett traditionellt veterinärbesök</p>
            <div className="button-box">
                <a href="#" className="button">Boka tid</a>
            </div>
            <img src={appstore} className="img-appstore" alt= "ladda ner vetly från appstore" />
            <img src={computerimg} className="img-computer" alt= "kör vetly från datorn" />
        </div>
    </div>{/*start*/}
    
    <ScrollableAnchor id={'services'}>
    <div className="services">
    <div className="row">
        <center><h2 className="vetlyheading">Vetly fungerar på följande sätt:</h2></center>
            <div className="col-md-4">
                <h2>Registrering</h2>
                <i className="fa fa-user fa-4x iconz" aria-hidden="true"></i>
                <p className="vetlytext">Skapa ett konto för att boka ditt första veterinärmöte.</p>
            </div>
            <div className="col-md-4">
                <h2>Bokning</h2>
                <i className="fa fa-calendar fa-4x iconz" aria-hidden="true"></i>
                <p className="vetlytext">
                Fyll i information om din häst och beskriv ditt ärende när du bokar ditt videosamtal.
                </p>
            </div>
        <div className="col-md-4">
            <h2>Videosamtal</h2>
            <i className="fa fa-video-camera fa-4x iconz" aria-hidden="true"></i>
            <p className="vetlytext">När det har blivit dags för ditt möte så ringer veterinären upp dig genom appen.
            </p>
        </div>
    </div>
    </div>{/*HOW IT WORKS SECTION*/}
    </ScrollableAnchor>

    <center>
        <div className="check">
            <h2 className="check-heading">Upptäck fördelen med digital veterinärvård</h2>
                <ul className="check-list">
                    <li><p>Träffa en legitimerad veterinär vart du än befinner dig</p></li>
                    <li><p>Slipp långa väntetider och få hjälp även kvälllar och helger</p></li>
                    <li><p>Boka tid snabbt och enkelt via din mobiltelefon</p></li>
                </ul>  
        </div>
    </center>
    <ScrollableAnchor>
    <div className="about">
        <div className="row">
            <div className="col-md-12 customers">
                <center>
                    <h2 className="aboutheading">98% Nöjda kunder!</h2>
                </center>
                <br></br>
                <img src={star} className="star" alt= "star" />
                <img src={star} className="star" alt= "star" />
                <img src={star} className="star" alt= "star" />
                <img src={star} className="star" alt= "star" />
                <img src={star} className="star" alt= "star" />
                <hr></hr>
            </div>
            <div className="col-md-4 quotes">
                <p className="qoutetext"><i className="fa fa-quote-right 4x" aria-hidden="true"></i> Kanonbra. Hjälpsamma och trevliga. Jag är supernöjd.</p>
            </div>
            <div className="col-md-4 quotes">
                <p className="qoutetext"><i className="fa fa-quote-right 4x" aria-hidden="true"></i> Mitt absolut bästa veterinärbesök någonsin. Och så skönt att slippa åka iväg.</p>
            </div>
            <div className="col-md-4 fix">
                <p className="qoutetext"><i className="fa fa-quote-right 4x" aria-hidden="true"></i> Riktigt bra! Bokar in ett nytt möte så fort som möjligt.</p>
            </div>
        </div>
    </div>
    </ScrollableAnchor>
    
    <div className="buttondiv">
        <div className="buttoncontainer">
            <center>
                <p className="booktext">Vi kan hjälpa dig med <p className="textcar"><TextCarousel phrases={phrases} interval={interval} typistProps={typistProps} /></p></p>
                <button className="bookbutton" type="button">REGISTRERA</button>
            </center>
        </div>
    </div>
    {/*A page about the Vets*/}
    <ScrollableAnchor id={'vets'}>
    <div className="vets">
        <div className="row">
            <center><h2 className="vetheading">Vetlys veterinärer</h2>
                <p className="vettext">Vetly har legitimerade veterinärer med specialkompetens inom hästar. Vill du läsa mer om deras specialområden kan du klicka på tillhörande bild.
                Veterinärerna är utbildade för att tillgodose dina behov på bästa möjliga sätt.</p>
            </center>
            <div className="col-md-3">
                <img src={doctor} className="doc" alt= "doc" />
                <h2 className="doctorname">Pierre Massamiri</h2>
                <p className="vettext2">Leg. Veterinär</p>
            </div>
            <div className="col-md-3">
                <img src={doctor} className="doc" alt= "doc" />
                <h2 className="doctorname">Joseph Prasant</h2>
                <p className="vettext2">Leg. Veterinär</p>
            </div>
            <div className="col-md-3">
                <img src={doctor} className="doc" alt= "doc" />
                <h2 className="doctorname">WARMACHINE</h2>
                <p className="vettext2">Leg. Veterinär</p>
            </div>
            <div className="col-md-3">
                <img src={doctor} className="doc" alt= "doc" />
                <h2 className="doctorname">Cena</h2>
                <p className="vettext2">Leg. Veterinär</p>
            </div>
        </div>
    </div>{/*VET DOCTORS*/}
    </ScrollableAnchor>
    
    <div className="buttondiv">
        <div className="buttoncontainer2">
            <center>
                <p className="booktext">Kom igång direkt och boka ditt första veterinärmöte.</p>
                <button className="bookbutton" type="button">BOKA NU</button>
            </center>
        </div>
    </div>
    {/*Footer*/}
    <footer className="footer-distributed">
        <div className="row">
            <div className="footer-left">
                <img src={footerlogo} className="vetly_logo_footer" alt= "veterinär på nätet" />
            </div>
            <div className="footer-center">
            <div>
                <i className="fa fa-phone"></i>
                <p>073-645689</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:support@vetly.com">support@vetly.com</a></p>
            </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>Om Vetly</span>
                    Kvalitativ djurvård behöver inte vara kostsam eller tidskrävande. Med Vetly kan du snabbt
                    och enkelt träffa en veterinär via din mobil eller dator, oavsett vart du befinner dig.
                </p>
            <div className="footer-icons">

            <a href="https://www.facebook.com/" className="facebook"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/" className="twitter"><i className="fa fa-twitter"></i></a>
            <a href="https://se.linkedin.com/" className="linkedin"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/" className="github"><i className="fa fa-github"></i></a>
            </div>
            </div>
        </div>
        <a href='#start'><i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i></a>
    </footer>
    </div>
    </ScrollableAnchor>
    );
  }
}
export default Home;
