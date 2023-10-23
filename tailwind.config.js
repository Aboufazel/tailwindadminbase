const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'primary':'0px 2px 4px  rgba(58, 87, 232, 0.30)',
        'secondary':'0px 2px 4px  rgba(108, 117, 125, 0.30)',
        'info':'0px 2px 4px  rgba(7, 154, 162, 0.30)',
        'success':'0px 2px 4px  rgba(26, 160, 83, 0.30)',
        'danger':'0px 2px 4px  rgba(192, 50, 33, 0.30)',
        'warning':'0px 2px 4px  rgba(241, 106, 27, 0.30)',
        'light':'0px 2px 4px rgba(222, 226, 230, 0.30)',
        'dark':'0px 2px 4px rgba(33, 37, 41, 0.30)',
      }
    },
    fontFamily: {
      sans: ["Estedad"],
    },
    colors:{
      'primary':{
        'light':'#ABCDFF',
        'main':'#0D6DFD',
        'dark':'#005AE0',
        'extraLight':"#F2F6FB",
        'veryDark':'#001f4d',
        '100': '#3A57E833',
        '600':'#3A57E8',
      },

      'text-color':{
        '1':'#232d42',
        '2':'#8a92a6',
        '3':'#adb5bd',
      },

      'bg':{
        '2':'#e9ecef',
        '3':'#e3e3e3',
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
    shadow:{
      boxShadow:{
        'primary25':'0 2px 4px 0px rgba(138, 146, 166, 0.3)',
        'card1':'0 10px 30px 0px rgba(17, 38, 146, 0.05)',
        'cards':'0 10px 30px 0px rgba(17,38,146,0.5)',
      },
    },
  },
  plugins: [],
});