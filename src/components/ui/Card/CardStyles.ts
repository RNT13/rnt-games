'use client'

import { theme, transitions } from '@/styles/theme'
import Image from 'next/image'
import { styled } from 'styled-components'

export type CardProps = {
  $bgColor: 'light' | 'dark'
}

export const CardContainer = styled.div``

export const CardContent = styled.div<CardProps>`
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: ${transitions.default};
  background-color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light30)};
  color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.light30 : theme.colors.baseBlue.dark30)};
  cursor: pointer;

  span {
    svg {
      color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.light30 : theme.colors.baseBlue.dark30)};
    }
  }

  button,
  a {
    font-weight: 600;
    padding: 4px;
    background-color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.light30 : theme.colors.baseBlue.dark30)};
    border: 2px solid ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light30)};
    color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light30)};
    transition: ${transitions.default};

    svg {
      color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light30)};
    }

    &:hover {
      background-color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light30)};
      border: 2px solid ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.light30 : theme.colors.baseBlue.dark30)};
      color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.light30 : theme.colors.baseBlue.dark30)};
      transition: ${transitions.default};

      svg {
        color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.light30 : theme.colors.baseBlue.dark30)};
      }
    }
  }

  &:hover {
    box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
    transform: translateY(-2px);
    transition: ${transitions.default};
  }
`

export const CardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
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

export const CardTitle = styled.div`
  h2 {
    margin-top: 4px;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

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
    font-size: 14px;
    font-weight: 600;
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
    justify-content: center;
    gap: 4px;
  }
`

export const CardPrice = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    text-decoration: line-through;
  }
`

export const CardFooter = styled.div`
  width: 100%;
  padding: 8px;
  gap: 8px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardButtonDiv = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
`
