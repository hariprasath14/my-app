import { useState, useEffect,useRef} from 'react';
import '../../App.css';
import '../../scss/home.scss';
import myImage from '../../assets/images/me.jpg'
import gunFireMp3 from '../../assets/audio/bullet.mp3'
import '../../scss/myStyle.scss'
import '../../scss/genaral.scss'
import Nav from '../navbar/Nav';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };
  

function Home() {
    
    const [audio] = useState(new Audio(gunFireMp3));
    const [hi,sethi] = useState(false);
    const [frontRow,setfrontRow] = useState([]);
    const [backRow,setbackRow] = useState([]);
    
    useEffect(() => {
        hi?audio.play():audio.pause()
      },
      [hi] 
    )
    useEffect(() => {
        audio.addEventListener('ended', () => sethi(false));
        return () => {
            audio.removeEventListener('ended', () => sethi(false));
        };
    }, []);

    const makeItRain =(e)=> {
      var increment = 0;
      while(increment<100){
          let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
          //random number between 5 and 2
          let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
          //increment
          let incrementValue = increment+randoFiver;
          increment = incrementValue;
          console.log(incrementValue+randoFiver,";")

          setfrontRow(prevfrontRow=>[...prevfrontRow,<div class="drop" style={{left: `${incrementValue}%`, bottom: `${randoFiver + randoFiver - 1 + 100}%`, animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s`,}}>
            <div class="stem" style={{animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s`}}></div>
            <div class="splat" style={{animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s`}}></div>
          </div>])            
          setbackRow(prevbackRow=>[...prevbackRow,<div class="drop" style={{right:`${incrementValue}%`, bottom: `${randoFiver + randoFiver - 1 + 100}%`,  animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s`,}}>
            <div class="stem" style={{animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s`}}></div>
            <div class="splat" style={{animationDelay: `0.${randoHundo}s`, animationDuration: `0.5${randoHundo}s`}}></div>
          </div>])
      }
    }
  return (
    <>
      <Nav/>
      <div className='d-flex profile-container'>
        <img src={myImage} className="profile-pic" />
        <div className="waviy">
          <span style={{"--i":"1"}}>H</span>
          <span style={{"--i":"2"}}>A</span>
          <span style={{"--i":"3"}}>R</span>
          <span style={{"--i":"4"}}>I</span>
          <span style={{"--i":"5"}}>&nbsp;</span>
          <span style={{"--i":"6"}}>P</span>
          <span style={{"--i":"7"}}>R</span>
          <span style={{"--i":"8"}}>A</span>
          <span style={{"--i":"9"}}>S</span>
          <span style={{"--i":"10"}}>A</span>
          <span style={{"--i":"11"}}>T</span>
          <span style={{"--i":"12"}}>H</span>
        </div>
      </div>
      <div className="App">
        <header className="App-header">
        

          <div class="rain-flow back-row-toggle splat-toggle">
            <div class="rain front-row">
                {frontRow.map((drop)=>{
                  return drop
                })}
            </div>
            <div class="rain back-row">
                {backRow.map((drop)=>{
                  return drop
                })}
            </div>
          </div>
            
          <p onClick={(e)=>makeItRain(e)}>Play</p>
            
          <p>
            Page
          </p>
          <p
            href="#"
            rel="noopener noreferrer"
            onClick={()=>sethi(!hi)}
            className="App-link mt-5 cursor-pointer">
            In Construction
          </p>
        </header>
      </div>
    </>
  );
}
export default Home;


// https://csshint.com/html-css-play-pause-button/
// https://codepen.io/alongequeue/pen/weWoLv


// https://codepen.io/arickle/pen/XKjMZY