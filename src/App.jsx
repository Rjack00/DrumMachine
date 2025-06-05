import { useState } from "react";



const audioClips = {
  q: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
  w: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
  e: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  a: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  s: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  d: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  z: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  x: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  c: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
}

function App() {
  const [displayText, setDisplayText] = useState("");
  const audioRefs = useRef({});

    
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  
  handleKeyDown (e) {
    const key = e.key.toUpperCase();
    if(this.audioRefs[key]){
      const audio = this.audioRefs[key].current;
      if(audio) {
        audio.currentTime = 0;
        audio.play();
        this.setState({displayText: key});
      }
    }
  }
  
  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  
  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  playSound (e) {
    const key = e.target.innerText;
    const audio = this.audioRefs[key].current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      this.setState({displayText: key});
    }
  }
    
  render(){
    return(
      <div id='drum-machine'>
        <div id='display'>{this.state.displayText}
          {["Q","W","E","A","S","D","Z","X","C"].map(key => (
          <button id={audioClips[key.toLowerCase()]} className='drum-pad' key={key} onClick={this.playSound}>
              {key}
              <audio 
                id={key} 
                className='clip' 
                ref={this.audioRefs[key]} 
                src={audioClips[key.toLowerCase()]}>
              </audio>
            </button>))}
        </div>
      </div>
    );
  }
}

export default App
