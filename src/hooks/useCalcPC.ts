import { useState } from 'react'

const MAX = 999999999
const MAX_LEN = 9

function applyOp(prev: number, op: string, curr: number): number {
  if (op === '+') return prev + curr
  if (op === '-') return prev - curr
  if (op === '*') return prev * curr
  if (op === '/') return curr === 0 ? -Infinity : prev / curr
  if (op === '%') return curr === 0 ? -Infinity : prev % curr
  return curr
}

function formatResult(n: number): string {
  if (!isFinite(n) || n < 0) return 'ERROR'
  if (n > MAX) return 'ERROR'
  const str = String(n)
  if (str.length <= MAX_LEN) return str
  const fixed = n.toFixed(MAX_LEN - str.indexOf('.') - 1)
  return fixed.length <= MAX_LEN ? fixed : 'ERROR'
}

export function useCalcPC() {
  const [display, setDisplay] = useState('0')
  const [prev, setPrev] = useState<number | null>(null)
  const [op, setOp] = useState<string | null>(null)
  const [waiting, setWaiting] = useState(false)

  function pressDigit(d: string) {
    if (waiting) { setDisplay(d); setWaiting(false); return }
    if (display === '0' && d !== '.') { setDisplay(d); return }
    if (display.length >= MAX_LEN) return
    setDisplay(display + d)
  }

  function pressOperator(nextOp: string) {
    const curr = parseFloat(display)
    if (op !== null && !waiting) {
      const result = formatResult(applyOp(prev!, op, curr))
      setDisplay(result)
      setPrev(result === 'ERROR' ? null : parseFloat(result))
    } else {
      setPrev(curr)
    }
    setOp(nextOp)
    setWaiting(true)
  }

  function pressEquals() {
    if (op === null || prev === null) return
    setDisplay(formatResult(applyOp(prev, op, parseFloat(display))))
    setPrev(null); setOp(null); setWaiting(false)
  }

  function pressDecimal() {
    if (waiting) { setDisplay('0.'); setWaiting(false); return }
    if (display.includes('.') || display.length >= MAX_LEN) return
    setDisplay(display + '.')
  }

  function pressToggle() {
    if (display === '0' || display === 'ERROR') return
    if (display.startsWith('-')) { setDisplay(display.slice(1)); return }
    if (display.length < MAX_LEN) setDisplay('-' + display)
  }

  function pressClear() {
    setDisplay('0'); setPrev(null); setOp(null); setWaiting(false)
  }

  function handleAction(action: string) {
    if (display === 'ERROR' && action !== 'clear') { pressClear(); return }
    if (action === 'clear') pressClear()
    else if (action === '=') pressEquals()
    else if (action === '.') pressDecimal()
    else if (action === 'toggle') pressToggle()
    else if (['+', '-', '*', '/', '%'].includes(action)) pressOperator(action)
    else pressDigit(action)
  }

  return { display, handleAction }
}
