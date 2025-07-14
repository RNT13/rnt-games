import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export type TagProps = {
  title?: string
  color?: 'blue' | 'red' | 'green'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const sizeMap = {
  sm: { fontSize: '0.7rem', padding: '4px 8px' },
  md: { fontSize: '0.9rem', padding: '8px 16px' },
  lg: { fontSize: '1.2rem', padding: '12px 24px' }
}

const getColor = (color: string) => {
  switch (color) {
    case 'blue':
      return theme.colors.baseBlue.dark
    case 'red':
      return theme.colors.baseRed.dark
    case 'green':
      return theme.colors.baseGreen.dark
    default:
      return '#000'
  }
}

export const TagContainer = styled.div<TagProps>`
  padding: ${props => sizeMap[props.size || 'md'].padding};
  font-size: ${props => sizeMap[props.size || 'md'].fontSize};
  border-radius: 15px;
  color: ${theme.colors.baseBlue.light50};
  background-color: ${props => getColor(props.color || 'blue')};
`
