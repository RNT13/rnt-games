'use client'

import React from 'react'
import { ButtonContainer, StyledButton, StyledLink } from './ButtonStyles'

interface ButtonProps {
  title?: string
  href?: string
  children?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean,
  target?: string,
  rel?: string
}

export const Button = ({ title, href, children, onClick, type = 'button', disabled = false, target, rel }: ButtonProps) => {
  return (
    <ButtonContainer>
      {href ? (
        <StyledLink href={href} target={target} rel={rel}>
          {children}
          {title}
        </StyledLink>
      ) : (
        <StyledButton type={type} disabled={disabled} onClick={onClick}>
          {children}
          {title}
        </StyledButton>
      )}
    </ButtonContainer>
  )
}
