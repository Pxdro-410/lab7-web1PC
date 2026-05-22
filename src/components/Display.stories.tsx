import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from './Display'

const meta: Meta<typeof Display> = {
  title: 'Calculadora/Display',
  component: Display,
}
export default meta
type Story = StoryObj<typeof Display>

export const Number: Story = { args: { value: '12345' } }
export const Decimal: Story = { args: { value: '3.1415926' } }
export const Error: Story = { args: { value: 'ERROR' } }
