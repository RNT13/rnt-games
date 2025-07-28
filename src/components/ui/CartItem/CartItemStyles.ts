import { theme } from '@/styles/theme'
import Image from 'next/image'
import { styled } from 'styled-components'

export const CartItemContainer = styled.div``

export const CartItemContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 120px;
  background-color: ${theme.colors.baseBlue.light30};
  margin-bottom: 12px;
  border-radius: 12px;
`

export const CartItemImage = styled(Image)`
  object-fit: cover;
  border-radius: 12px 0 0 12px;
`

export const CartItemBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CartItemPrice = styled.div``

export const CartItemNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 8px;

  div {
    display: flex;
    gap: 4px;
  }

  svg {
    font-size: 24px;
    cursor: pointer;
    color: ${theme.colors.baseBlue.dark30};
  }

  span {
    color: ${theme.colors.baseBlue.dark30};
    padding: 0 8px;
    border: 1px solid ${theme.colors.baseBlue.dark30};
    background-color: ${theme.colors.baseBlue.light40};
  }
`
