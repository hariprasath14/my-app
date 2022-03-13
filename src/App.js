import './App.css';
import myImage from './images/me.jpg'
import './myStyle.scss'
import './genaral.scss'
import Nav from './Nav';

function App() {
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
          >
            In Construction
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
