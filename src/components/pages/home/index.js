import { useState, useEffect, useRef } from 'react';
import '../../../App.css';
import '../../../scss/home.scss';
import myImage from '../../../assets/images/me.jpg'
import gunFireMp3 from '../../../assets/audio/bullet.mp3'
import johnyMp3 from '../../../assets/audio/johny.mp3'
import thunderMp3 from '../../../assets/audio/thunder.mp3'
import '../../../scss/genaral.scss'
import NavHead from '../navbar/navHeader';


function Home() {

  const [audio] = useState(new Audio(gunFireMp3));
  const [johnyBGM] = useState(new Audio(johnyMp3));
  const [thunderBGM] = useState(new Audio(thunderMp3));
  const [playjohny, setPlayJohny] = useState(false);
  const [hideRain, sethideRain] = useState(false);
  const [gunFire, setgunFire] = useState(false);
  const [frontRow, setfrontRow] = useState([]);
  const [backRow, setbackRow] = useState([]);
  const [thunder, setThunder] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const timeOutID = useRef(null)
  useEffect(() => {
    gunFire ? audio.play() : audio.pause()
  },
    [gunFire, audio]
  )
  useEffect(() => {
    audio.addEventListener('ended', () => setgunFire(false));
    return () => {
      audio.removeEventListener('ended', () => setgunFire(false));
    };
  }, [audio]);
  useEffect(() => {
    if (playjohny) {
      thunderBGM.play()
    }
    timeOutID.current = setTimeout(() => {
      playjohny ? johnyBGM.play() : johnyBGM.pause()
    }, 3000);
  },
    [playjohny, thunderBGM, johnyBGM]
  )
  useEffect(() => {
    return () => {
      stopAll()
      console.log("in cleanup")
    }
  }, [])
  const fetchOnScroll = (e) => {
    if (e.target.scrollTop > 400) {
      sethideRain(true)
    } else {
      sethideRain(false)
    }
  }
  const makeThunder = () => {
    setTimeout(() => {
      setThunder(true)
      setShowBanner(true)
    }, 5000);
  }
  const makeItRain = () => {
    for (var i = 1; i <= 2; i++) {
      var increment = 0;
      while (increment < 100) {
        let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        let incrementValue = increment + randoFiver;
        increment = incrementValue;

        setfrontRow(prevfrontRow => [...prevfrontRow, <div className="drop" style={{ left: `${incrementValue}%`, bottom: `${randoFiver + randoFiver - 1 + 100}%`, animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s`, }}>
          <div className="stem" style={{ animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s` }}></div>
          <div className="splat" style={{ animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s` }}></div>
        </div>])
        setbackRow(prevbackRow => [...prevbackRow, <div className="drop" style={{ right: `${incrementValue}%`, bottom: `${randoFiver + randoFiver - 1 + 100}%`, animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s`, }}>
          <div className="stem" style={{ animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s` }}></div>
          <div className="splat" style={{ animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s` }}></div>
        </div>])
      }
    };
  }
  const stopAll = () => {
    clearTimeout(timeOutID.current)
    johnyBGM.pause()
    johnyBGM.currentTime = 0
    thunderBGM.pause()
    thunderBGM.currentTime = 0
    setPlayJohny(false)
    setfrontRow([])
    setbackRow([])
    setThunder(false)
  }
  return (
    <div className='home-container'
      onScroll={(e) => { fetchOnScroll(e); }}
    >
      <NavHead />

      {
        showBanner && <div class="falling-banner">
          <div class="rope"></div>
          <div class="shake-container">
            <div class="message-box">
              <p >Web Application developer</p>
            </div>
          </div>
        </div>
      }
      {/* <Nav/> */}
      <div className='d-flex profile-container rain-flow back-row-toggle splat-toggle additional'>
        <img src={myImage} className={`profile-pic ${frontRow?.length > 0 ? "filter-profile" : ""}  ${thunder ? "thunder" : ""}`} alt="" />
        <div className={`waviy ${frontRow?.length > 0 ? "opacity-100 visible" : "hide-waviy"}`}>
          <div>
            <span style={{ "--i": "1" }}>H</span>
            <span style={{ "--i": "2" }}>A</span>
            <span style={{ "--i": "3" }}>R</span>
            <span style={{ "--i": "4" }}>I</span>
            <span style={{ "--i": "5" }}>&nbsp;</span>
            <span style={{ "--i": "6" }}>P</span>
            <span style={{ "--i": "7" }}>R</span>
            <span style={{ "--i": "8" }}>A</span>
            <span style={{ "--i": "9" }}>S</span>
            <span style={{ "--i": "10" }}>A</span>
            <span style={{ "--i": "11" }}>T</span>
            <span style={{ "--i": "12" }}>H</span>
          </div>
          <p onClick={() => {
            stopAll()
          }} className="stop-play">Stop music && rain</p>
        </div>
        {!hideRain && <div className={`rain front-row ${hideRain ? "hide-spalt" : ""}`}>
          {frontRow.map((drop, i) => {
            return <div key={"frnt" + i}>{drop}</div>
          })}
        </div>}
        {!hideRain && <div className={`rain back-row ${hideRain ? "hide-spalt" : ""}`}>
          {backRow.map((drop, i) => {
            return <div key={"back" + i}>{drop}</div>
          })}
        </div>}
        <div className={`play-rain ${frontRow?.length > 0 ? "opacity-0 invisible " : ""}`} onClick={(e) => {
          makeItRain();
          makeThunder();
          setPlayJohny(true)
        }}>
          Play
        </div>
      </div>
      <div className="App">
        <header className="App-header">
          {/* <p className='cursor-pointer px-4' onClick={(e)=>{console.log(frontRow, backRow);}}>Play</p> */}
          <p>
            Page
          </p>
          <p
            onClick={() => setgunFire(!gunFire)}
            className="App-link mt-3 cursor-pointer">
            In Construction
          </p>
        </header>
      </div>
    </div>
  );
}
export default Home;
// https://csshint.com/html-css-play-pause-button/
// https://codepen.io/alongequeue/pen/weWoLv
// https://codepen.io/arickle/pen/XKjMZY