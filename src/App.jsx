import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './component/Greeting';
import { ToggleSwitch } from './component/ToggleSwitch';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Greeting name="Yale" />
    <ToggleSwitch/>
    </>
  )
}

export default App
