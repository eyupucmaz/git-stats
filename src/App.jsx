import { useState} from 'react'
import './App.css'
import {getLangs} from './api/getLangs'

function App() {

  const [username, setUsername] = useState("")
  const [langs, setLangs] = useState([])
  const [loaded, setLoaded] = useState(false)
  let data = [];
  const handleKeyDown = async(event) => {
    if (event.key === 'Enter') {
      setLoaded(true)
      await getLangs(username).then(lang=>data=lang).finally(()=>setLoaded(false));
      setLangs(data);
    }
  }

  return (
    <div className="App">
      <div className="header">Type an username and press enter... 🚀</div>
      <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} onKeyDown={handleKeyDown}/>
      {loaded && (<div className='header'>Loading...</div>)}
      <ul>
        {
          Object.entries(langs).map(lang=>(
            <li className='data' key={lang[0]}><strong>{lang[0]}:</strong> %{lang[1]}</li>
          ))
        }  
      </ul>
    </div>
  )
}

export default App
