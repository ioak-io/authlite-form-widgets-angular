module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
<<<<<<< HEAD
    "storybook-addon-angular-router",
=======
    'storybook-addon-angular-router',
>>>>>>> 5a4393a4c4d83b9c4c7d49a676b9e17a372a2db6
  ],
  
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  docs: {
    autodocs: true
  }
}