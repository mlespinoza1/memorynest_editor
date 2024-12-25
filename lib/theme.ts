export type Theme = 'light' | 'dark' | 'system'

export const themeConfig = {
  colors: {
    light: {
      primary: '143 184 143',    // #8FB88F - Sage Green
      accent: '241 194 125',     // #F1C27D - Warm Sand
      background: '250 250 250', // #FAFAFA - Off White
      surface: '255 255 255',    // #FFFFFF - White
      border: '224 224 224',     // #E0E0E0 - Light Gray
      foreground: '33 33 33',    // #212121 - Dark Gray
    },
    dark: {
      primary: '143 184 143',    // #8FB88F - Sage Green (unchanged)
      accent: '241 194 125',     // #F1C27D - Warm Sand (unchanged)
      background: '33 33 33',    // #212121 - Dark Gray
      surface: '41 41 41',       // #292929 - Slightly lighter dark gray
      border: '48 48 48',        // #303030 - Dark border
      foreground: '250 250 250', // #FAFAFA - Off White
    },
  },
  spacing: {
    base: 'clamp(0.5rem, 2vw, 1rem)',
    large: 'clamp(1rem, 3vw, 2rem)',
  },
  radius: {
    default: '0.5rem',
    large: '0.75rem',
    pill: '9999px',
  },
} as const
