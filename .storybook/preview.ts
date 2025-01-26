import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from "@storybook/react";
import "../src/globals.css";
import { themes } from 'storybook/internal/theming';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ]
};

export default preview;
