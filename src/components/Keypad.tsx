import { CalcButton } from './CalcButton'
import { BUTTONS } from './buttons'
import './Keypad.css'

interface Props { onAction: (action: string) => void }

export function Keypad({ onAction }: Props) {
  return (
    <div className="keypad">
      {BUTTONS.map(({ label, action, variant, wide }) => (
        <CalcButton key={action + label} label={label} onClick={() => onAction(action)} variant={variant} wide={wide} />
      ))}
    </div>
  )
}
