import React, {useEffect} from 'react';

const App = () => {
  useEffect(()=>{
    const script = document.createElement('script')
    script.src = process.env.REACT_APP_SCRIPT_SOURCE
    script.id = process.env.REACT_APP_INSTANT_GAME_ID
    document.body.appendChild(script)
    script.onload = () => window.FBInstant.initializeAsync().then(()=>window.FBInstant.startGameAsync().then())
  },[])

  return (
    <div className="App">
      My camel game
    </div>
  );
}

export default App
