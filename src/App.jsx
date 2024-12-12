import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LightBillCalculator from './LightBillCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<LightBillCalculator/>
    </>
  )
}

export default App
