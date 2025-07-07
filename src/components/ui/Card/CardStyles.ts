'use client'

import { theme } from '@/styles/theme'
import Image from 'next/image'
import { styled } from 'styled-components'
import { StyledButton } from '../Button/ButtonStyles'

export const CardContainer = styled.div``

export const CardContent = styled.div`
  height: 100%;
  background-color: ${theme.colors.baseBlue.dark40};
  border-radius: 12px;
  overflow: hidden;
`

export const CardHeader = styled.div`
  position: relative;
`

export const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardTags = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;

  span {
    font-size: 12px;
    background-color: blue;
    padding: 4px 8px;
    border-radius: 50px;
  }
`

export const CardBody = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CardTitle = styled.div``

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  div {
    display: flex;
    gap: 8px;
    margin-top: 4px;
  }

  p {
    display: flex;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const CardCategory = styled.div``

export const CardStars = styled.div`
  font-size: 14px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

export const CardPrice = styled.div``

export const CardFooter = styled.div`
  width: 100%;
  padding: 8px;
  gap: 8px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  ${StyledButton} {
    width: 100%;

    svg {
      font-size: 16px;
    }
  }
`
