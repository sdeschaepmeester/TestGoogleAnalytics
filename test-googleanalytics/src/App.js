import React, { useState } from 'react';
import defaultPoutou from './poutou/default.png';
import eatPoutou from './poutou/miam.png';
import drinkPoutou from './poutou/gloups.png';
import './App.css';
import useAnalyticsEventTracker from './useAnalyticsEventTracker';
import ReactGA from 'react-ga';
const TRACKING_ID = "G-LW03WPJDEZ";
ReactGA.initialize(TRACKING_ID);


function App() {
  const [letterContent, setLetterContent] = useState('');
  const [poutouImg, setPoutouImg] = useState(defaultPoutou);
  const [isPlaying, setIsPlaying] = useState(false);
  const gaEventTracker = useAnalyticsEventTracker('Contact us');

  const handleClick = (buttonName) => {
   switch(buttonName){
      case "eat":
        gaEventTracker('eat')
        setPoutouImg(eatPoutou)
        setTimeout(() => {
          setPoutouImg(defaultPoutou)
        }, 700);
        break;
      case "drink":
        gaEventTracker('drink')
        setPoutouImg(drinkPoutou)
        setTimeout(() => {
          setPoutouImg(defaultPoutou)
        }, 700);
        break;
      case "listen":
        gaEventTracker('listen')
        setIsPlaying(true)
        setTimeout(() => {
          setIsPlaying(false)
        }, 5000);
        break;
      default:
        break;
   }
  };

  const handleInputChange = (e) => {
    setLetterContent(e.target.value);
  };

  const handleSendEmail = () => {
    const subject = 'Magnifique oiseau';
    const mailtoLink = `mailto:deschaepmeester.samantha@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(letterContent)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isPlaying ?
          <img src={poutouImg} className="App-logo" alt="logo" />
          :
          <video controls autoPlay style={{height: "40vmin", marginTop: "5%"}}>
            <source src={require('./poutou/sing.mp4')} type="video/mp4" />
          </video>
        }
        <div style={{ marginTop: '20px', justifyContent:"center" }}>
          <button id="btn_eat" onClick={() => handleClick('eat')} style={{ margin: '10px', padding: '10px 20px', background: 'linear-gradient(to right, #e66465, #9198e5)', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Nourris-moi
          </button>
          <button id="btn_drink" onClick={() => handleClick('drink')} style={{ margin: '10px', padding: '10px 20px', background: 'linear-gradient(to right, #e66465, #9198e5)', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Donne-moi à boire
          </button>
          <button id="btn_listen" onClick={() => handleClick('listen')} style={{ margin: '10px', padding: '10px 20px', background: 'linear-gradient(to right, #e66465, #9198e5)', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Écoute-moi
          </button>
        </div>
      <div style={{ marginTop: '20px', justifyContent:"left" }}>
        <p style={{textAlign: 'left'}}>Écris-moi une lettre :</p>
        <textarea
          value={letterContent}
          onChange={handleInputChange}
          style={{ width: '300px', height: '150px' }}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleSendEmail} style={{ padding: '10px 20px', background: 'linear-gradient(to right, #b28dbd, #bfbfc1)', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Envoyer par pigeon voyageur</button>
      </div>
      </header>
    </div>
  );
}

export default App;
