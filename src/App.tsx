import './App.css'
import { Calculator } from './components/Calculator'
import { MathBackground } from './components/MathBackground'

function App() {
  return (
    <>
      <MathBackground />
      <div className="credentials">
        <h3>lab 7 web</h3>
        <h4>autor:</h4>
        <p>Pedro Caso</p>
        <h4>carnet:</h4>
        <p>241286</p>
      </div>
      <Calculator />
    </>
  )
}

export default App
