import './CalcButton.css'

interface Props {
  label: string
  onClick: () => void
  variant?: 'operator' | 'equals' | 'special' | 'default'
  wide?: boolean
}

export function CalcButton({ label, onClick, variant = 'default', wide = false }: Props) {
  const cls = `calc-btn calc-btn--${variant}${wide ? ' calc-btn--wide' : ''}`
  return (
    <button className={cls} onClick={onClick}>{label}</button>
  )
}
