import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // todo, advertencia en la accesibilidad
      // error, fallo en la accesibilidad
      // off, desactiva la regla de accesibilidad
      test: 'todo'
    }
  },
}

export default preview