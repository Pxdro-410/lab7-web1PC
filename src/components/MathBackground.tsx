import './MathBackground.css'

const CHARS = '0123456789+-×÷=%.√π∞()^∑∂∫≈≠±'
const CONTENT = Array.from({ length: 3000 }, (_, i) => CHARS[i % CHARS.length]).join('')

export function MathBackground() {
  return <div className="math-bg" aria-hidden="true">{CONTENT}</div>
}
