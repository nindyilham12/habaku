module.exports = {
    content: ["public/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'bgApaHabakuDesk': "url('images/bg-desk-about-habaku.png')",  
          'bgApaHabakuMob': "url('images/bg-mob-about-habaku.png')",  
          'bgHabakuLogoPromo': "url('images/produk-habaku-logo.png')",
          //background color
          'tk-blue': 'linear-gradient(92.95deg, #9BB0DA -9.11%, #DAE3F4 104.82%)',
          'tk-green': 'linear-gradient(92.65deg, #C6DDC8 -22.05%, #7FAE83 105.09%)',
        },

        backgroundSize : {
          '80%': '80%',
        },

        borderRadius : {
          'none': '0px',
          'sm': '2px',
          'md': '6px',
          'lg': '8px',
          'xl': '12px',
          '2xl': '16px',
          '3xl': '24px',
        },

        borderWidth : {
          '0': '0px',
          '2': '2px',
          '3': '3px',
          '4':  '4px',
          '8': '8px',
        },

        dropShadow: {
          'dropBlue': '0px 0px 16px #9BB0DA',
          'dropBlueButton': '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          'dropOutlineBlue': '0px 0px 11px #1D4AA7',
        },

        colors: {
          //Primary
          'blue-100': '#EFF4FC',
          'blue-200': '#DAE3F4',
          'blue-300': '#9BB0DA',
          'blue-400': '#1D4AA7',
          'blue-500': '#112C64',
          'blue-600': '#091632',

          'green-100': '#E9F5EA',
          'green-200': '#C6DDC8',
          'green-300': '#7FAE83',
          'green-400': '#387E3F',
          'green-500': '#224C26',
          'green-600': '#112613',

          //Accent
          'success-0': '#EDFBEE',
          'success-20': '#DCF8DD',
          'success-40': '#95E998',
          'success-60': '#4FDA53',
          'success-80': '#3FAF42',
          'success-100': '#205821',

          'warning-0': '#FFF7E9',
          'warning-20': '#FFEFD2',
          'warning-40': '#FFD079',
          'warning-60': '#FFB020',
          'warning-80': '#CC8D1A',
          'warning-100': '#66460D',

          'error-0': '#FFEEEA',
          'error-20': '#FFCCC1',
          'error-40': '#FF9A83',
          'error-60': '#FF5630',
          'error-80': '#CD4526',
          'error-100': '#6A2313',

          //Greyscale
          'greyscale-0': '#FFFFFF',
          'greyscale-20': '#F7F7F7',
          'greyscale-40': '#DDDDDD',
          'greyscale-60': '#888888',
          'greyscale-80': '#666666',
          'greyscale-100': '#222222',
          
          'nav-overlay': 'rgba(0, 0, 0, 0.35)',
        },

        fontFamily: {
            'lato': ['Lato'],
            'montserrat' : ['Montserrat']
        },
        
        fontSize: {
          sm: ['14px', '20px'],
          xl: ['24px', '32px'],
          'dh-head3': ['34px', '44px'],
          'dh-head4': ['30px', '40px'], 
          'dh-head5': ['24px','36px'],
          'dh-head6': ['20px', '28px'],  
          'db-small': ['16px', '24px'],  
          'db-large': ['18px', '28px'],
          'dc-large': ['14px','21px'],
          'mh-head2': ['26px', '30px'],    
          'mh-head3': ['24px', '30px'],
          'mh-head4': ['22px', '30px'],
          'mh-head6': ['18px', '24px'],
          'mh-head7': ['16px', '24px'],
          'mb-small': ['14px', '21px'],
          'mc-large': ['12px', '18px'],
        },

        animation: {
          bounceNoInfinite: 'bounce 2s',
          fadeInUp: 'fadeInUp 2s',
          scale: 'scale 2s',
        },

        keyframes: {
          fadeInUp: {
            '0%, 50%': {
                opacity: '0',
                transform: 'translateY(20%)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)',
            }
          },

          scale: {
            '0%': {
              opacity: '0',
              transform: 'scale(0.5)',
            },
            '100%': {
              opacity: '1',
              transform: 'scale(1)',
            },
          },
        },

        lineHeight: {
            '3': '12px',
            '4': '16px', 
            '5': '20px', 
            '6': '24px', 
            '7': '28px', 
            '8': '32px',
            '9': '36px', 
            '10': '40px',
        },

        fontWeight: {
          thin: '100',
          hairline: '100',
          extralight: '200',
          light: '300',
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
          black: '900',
        },

        //padding, margin, width, height, maxHeight, flex-basis, 
        //gap, inset, space, translate, scrollMargin, scrollPadding, and textIndent.
        spacing: {
          '10': '10px',
          '38': '38px',
          '40': '40px',
          '48': '48px',
          '52': '52px',
          '56': '56px',
          '70': '70px',
          '72': '72px',
          '74': '74px',
          '80': '80px',
          '85': '85px',
          '95': '95px',
          '100': '100px',
          '105': '105px',
          '140': '140px',
          '160': '160px',
          '180': '180px',
          '200': '200px',
          '210': '210px',
          '215': '215px',
          '220': '220px',
          '250': '250px',
          '262': '262px',
          '416': '416px',
        },
      }
      
    },
    plugins: [],
  }