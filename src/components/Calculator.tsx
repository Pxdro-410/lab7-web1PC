import { useCalcPC } from '../hooks/useCalcPC'
import { Display } from './Display'
import { Keypad } from './Keypad'
import './Calculator.css'

export function Calculator() {
  const { display, handleAction } = useCalcPC()
  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad onAction={handleAction} />
    </div>
  )
}
