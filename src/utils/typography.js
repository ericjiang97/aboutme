import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Merriweather',
    'Poppins',
    'Segoe UI',
    'Helvetica',
    'Arial',
    '-apple-system',
    'sans-serif',
  ],
  bodyFontFamily: ['Poppins', 'sans-serif', 'serif'],
  bodyWeight: 300,
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Poppins',
      styles: ['300', '400', '400i', '700', '700i'],
    },
  ],
})

export default typography
