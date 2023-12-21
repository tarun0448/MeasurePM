/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
      boxShadow: {
        // Define custom shadow variations
        'bs-focus-primary': '0px 0px 0px 4px rgba(82, 139, 255, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'bs-focus-error': '0px 0px 0px 4px rgba(240, 68, 56, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'bs-focus-gray': '0px 0px 0px 4px rgba(152, 162, 179, 0.14), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'bs-gray': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary-white': '#ffffff',
        'primary-black': '#000000',
        'primary-tarnsparent': '#FFFFFF00',
        'gray-light': {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7', //4
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#182230',
          900: '#101828',
          950: '#0C111D'
        },
        'gray-dark': {
          25: '#FAFAFA',
          50: '#F5F5F6',
          100: '#F0F1F1',
          200: '#ECECED',
          300: '#CECFD2',
          400: '#94969C',
          500: '#85888E',
          600: '#61646C',
          700: '#333741',
          800: '#1F242F',
          900: '#161B26',
          950: '#0C111D'
        },
        'brand': {
          25: '#F5F8FF',
          50: '#EFF4FF',
          100: '#D1E0FF',
          200: '#B2CCFF',
          300: '#84ADFF',
          400: '#528BFF',
          500: '#2970FF',
          600: '#155EEF', // 1 , 3
          700: '#004EEB', // 2
          800: '#0040C1',
          900: '#00359E',
          950: '#002266'
        },
        'error': {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
          950: '#55160C'
        },
        'warning': {
          25: '#FFFCF5',
          50: '#FFFAEB',
          100: '#FEF0C7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009',
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#7A2E0E',
          950: '#4E1D09'
        },
        'success': {
          25: '#F6FEF9',
          50: '#ECFDF3',
          100: '#DCFAE6',
          200: '#A9EFC5',
          300: '#75E0A7',
          400: '#47CD89',
          500: '#17B26A',
          600: '#079455',
          700: '#067647',
          800: '#085D3A',
          900: '#074D31',
          950: '#053321'
        },

        'gray-blue': {
          25: '#FCFCFD',
          50: '#F8F9FC',
          100: '#EAECF5',
          200: '#D5D9EB',
          300: '#B3B8DB',
          400: '#717BBC',
          500: '#4E5BA6',
          600: '#3E4784',
          700: '#363F72',
          800: '#293056',
          900: '#101323',
          950: '#0D0F1C'
        },
        'gray-cool': {
          25: '#FCFCFD',
          50: '#F8F9FC',
          100: '#EAECF5',
          200: '#D5D9EB',
          300: '#B3B8DB',
          400: '#717BBC',
          500: '#4E5BA6',
          600: '#3E4784',
          700: '#363F72',
          800: '#293056',
          900: '#101323',
          950: '#0D0F1C'
        },
      },
    },
  },
  plugins: [],
}