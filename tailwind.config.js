module.exports = {
    content: ["public/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'bgBanner': "linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 52.03%), url(images/hero-banner-desktop.png)",
        
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
          
        },

        fontFamily: {
            'nunito': ['Nunito'],
        },
        
        fontSize: {
          sm: ['14px', '20px'],
          // base: ['16px', '24px'],
          // lg: ['20px', '28px'],
          xl: ['24px', '32px'],
          'dh-head4': ['30px', '40px'], 
          'dh-head6': ['20px', '28px'],  
          'db-small': ['16px', '24px'],   
          'dc-large': ['14px','21px'],    
          'mh-head3': ['24px', '30px'],
          'mh-head6': ['18px', '24px'],
          'mb-small': ['14px', '21px'],
          'mc-large': ['12px', '18px'],
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
          '40': '40px',
          '72': '72px',
          '74': '74px',
        },
      }
      
    },
    plugins: [],
  }