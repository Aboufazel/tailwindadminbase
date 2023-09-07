const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Estedad", "sans-serif"],
    },
    colors:{
      'primary':{
        '100': '#3A57E833',
        '600':'#3A57E8',
      },
      'secondary':{
        '100':'#6C757D33',
        '600':'#6C757D',
      },
      'info':{
        '100':'#079AA233',
        '600':'#079AA2',
      },
      'success':{
        '100':'#1AA05333',
        '600':'#1AA053',
      },
      'danger':{
        '100':'#C0322133',
        '600':'#C03221',
      },
      'warning':{
        '100':'#F16A1B33',
        '600':'#F16A1B'
      },
      'light':{
        '100':'#DEE2E633',
        '600':'#DEE2E6',
      },
      'dark':{
        '100':'#21252933',
        '600':'#212529',
      }
    },
  },
  plugins: [],
});