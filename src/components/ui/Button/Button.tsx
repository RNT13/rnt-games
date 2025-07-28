'use client'

import React from 'react'
import { StyledButton, StyledLink } from './ButtonStyles'

interface ButtonProps {
  title?: string
  href?: string
  children?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean,
  target?: string,
  rel?: string
  isActive?: boolean
  className?: string
}

export const Button = ({ href, ...ButtonProps }: ButtonProps) => {
  if (href) {
    return (
      <StyledLink href={href} {...ButtonProps}>
        {ButtonProps.children}
      </StyledLink>
    )
  } else {
    return (
      <StyledButton {...ButtonProps}>
        {ButtonProps.children}
      </StyledButton>
    )
  }
}
