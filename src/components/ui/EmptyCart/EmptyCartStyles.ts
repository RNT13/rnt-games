import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const EmptyCartContainer = styled.div``

export const EmptyCartContent = styled.div`
  height: 100%;
  padding: 24px;
  margin: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${theme.colors.baseBlue.light30};
  font-weight: 600;

  h2,
  p {
    color: ${theme.colors.baseBlue.dark30};
    margin-bottom: 24px;
  }

  ${media.mobile} {
    margin: 0;
  }
`

export const EmptyCartImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
