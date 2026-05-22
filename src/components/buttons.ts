type Variant = 'operator' | 'equals' | 'special' | 'default'
export interface ButtonDef { label: string; action: string; variant?: Variant; wide?: boolean }

export const BUTTONS: ButtonDef[] = [
  { label: 'C', action: 'clear', variant: 'special' },
  { label: '+/-', action: 'toggle', variant: 'special' },
  { label: '%', action: '%', variant: 'operator' },
  { label: '÷', action: '/', variant: 'operator' },
  { label: '7', action: '7' }, { label: '8', action: '8' }, { label: '9', action: '9' },
  { label: '×', action: '*', variant: 'operator' },
  { label: '4', action: '4' }, { label: '5', action: '5' }, { label: '6', action: '6' },
  { label: '-', action: '-', variant: 'operator' },
  { label: '1', action: '1' }, { label: '2', action: '2' }, { label: '3', action: '3' },
  { label: '+', action: '+', variant: 'operator' },
  { label: '0', action: '0', wide: true }, { label: '.', action: '.' },
  { label: '=', action: '=', variant: 'equals' },
]
