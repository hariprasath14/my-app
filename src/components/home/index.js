import { useState, useEffect } from 'react';
import '../../App.css';
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
  return (
    <>
      <Nav/>
      <div className='d-flex profile-container'>
        <img src={myImage} className="profile-pic" />
        <div class="waviy">
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
          <p>
            Page
          </p>
          <a
            className="App-link"
            href="#"
            rel="noopener noreferrer"
            onClick={()=>sethi(!hi)}
          >
            In Construction
          </a>
        </header>
      </div>
    </>
  );
}
export default Home;
