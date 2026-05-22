import './Display.css'

interface Props { value: string }

export function Display({ value }: Props) {
  const isError = value === 'ERROR'
  return (
    <div className={`display${isError ? ' display--error' : ''}`}>
      {value}
    </div>
  )
}
