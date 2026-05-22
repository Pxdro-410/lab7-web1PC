import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCalcPC } from '../hooks/useCalcPC'

function setup() {
  return renderHook(() => useCalcPC())
}

function press(result: ReturnType<typeof setup>['result'], ...actions: string[]) {
  actions.forEach(a => act(() => result.current.handleAction(a)))
}

describe('useCalcPC', () => {
  it('concatenates multiple digits correctly', () => {
    const { result } = setup()
    press(result, '4', '2')
    expect(result.current.display).toBe('42')
  })

  it('shows ERROR when subtraction result is negative', () => {
    const { result } = setup()
    press(result, '3', '-', '5', '=')
    expect(result.current.display).toBe('ERROR')
  })

  it('shows ERROR when result exceeds 999999999', () => {
    const { result } = setup()
    press(result, '9', '9', '9', '9', '9', '9', '9', '9', '9', '*', '2', '=')
    expect(result.current.display).toBe('ERROR')
  })

  it('computes result on chained operator press (2+3+)', () => {
    const { result } = setup()
    press(result, '2', '+', '3', '+')
    expect(result.current.display).toBe('5')
  })

  it('truncates repeating decimals to 9 chars (22/7)', () => {
    const { result } = setup()
    press(result, '2', '2', '/', '7', '=')
    expect(result.current.display.length).toBeLessThanOrEqual(9)
    expect(result.current.display).not.toBe('ERROR')
  })

  it('shows ERROR on division by zero', () => {
    const { result } = setup()
    press(result, '5', '/', '0', '=')
    expect(result.current.display).toBe('ERROR')
  })

  it('modulo operation: 10 % 3 = 1', () => {
    const { result } = setup()
    press(result, '1', '0', '%', '3', '=')
    expect(result.current.display).toBe('1')
  })
})
