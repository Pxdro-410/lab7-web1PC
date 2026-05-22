import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calculator } from './Calculator'

const meta: Meta<typeof Calculator> = {
  title: 'Calculadora/Calculator',
  component: Calculator,
}
export default meta
type Story = StoryObj<typeof Calculator>

export const Default: Story = {}