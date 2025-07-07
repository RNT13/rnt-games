import { colorHSLVariants } from '@/utils/colorUtils'

export const media = {
  sm: '@media (max-width: 480px)',
  md: '@media (max-width: 768px)',
  lg: '@media (max-width: 1024px)'
}

export const transitions = {
  default: 'all 0.3s ease'
}

export const baseBlue = colorHSLVariants(220, 80, 50)
export const baseGreen = colorHSLVariants(100, 100, 50)
export const baseRed = colorHSLVariants(0, 100, 50)
export const baseCyan = colorHSLVariants(180, 150, 50)

export const theme = {
  colors: {
    baseBlue: baseBlue,
    baseGreen: baseGreen,
    baseRed: baseRed,
    baseCyan: baseCyan,
    primaryColor: '#011627',
    secondaryColor: '#023864',
    thirdColor: '#0d6efd',
    forthColor: '#E25010',
    textColor: '#fff',
    yellow: '#ffff00',
    yellow2: '#E1A32A',
    blue: '#0000FF',
    blue2: '#1E90FF',
    gray: '#666666',
    gray2: '#a1a1a1',
    orange: '#ff4500',
    orange2: '#ff7f50',
    black: '#000',
    red: '#FF0000',
    redHover: '#FF4837',
    error: '#AB2E46',
    green: '#008000',
    green2: '#44BD32',
    neonBlue: '#00FFD5 ',
    neonGree: '#00FF6A '
  }
}
