import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalcButton } from './CalcButton'

const meta: Meta<typeof CalcButton> = {
  title: 'Calculadora/CalcButton',
  component: CalcButton,
  args: { onClick: () => {} },
}
export default meta
type Story = StoryObj<typeof CalcButton>

export const Default: Story = { args: { label: '7' } }
export const Operator: Story = { args: { label: '+', variant: 'operator' } }
export const Equals: Story = { args: { label: '=', variant: 'equals' } }
