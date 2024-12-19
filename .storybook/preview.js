
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const authCode = urlParams.get('code');
  
  if (authCode) {
    localStorage.setItem('code', authCode);

    setTimeout(() => {
      top?.window.close();
    }, 0);
  } else {
    console.log('No Auth Code found in Storybook URL');
  }
};

export const parameters = {
  docs:{},
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
        method: 'alphabetical',
        order: ['Form Elements'],
        locales: 'en-US',
    }
  },
};

