'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { StyledButton, StyledLink } from './ButtonStyles'

interface ButtonProps {
  title?: string
  href?: string
  children?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  target?: string
  rel?: string
  isActive?: boolean
  className?: string
}

export const Button = ({ href, onClick, ...ButtonProps }: ButtonProps) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) onClick()

    if (href?.startsWith('/#')) {
      e.preventDefault()

      const targetId = href.split('#')[1]
      setTimeout(() => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const offset = 70
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - offset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }, 350)
    } else if (href) {
      router.push(href)
    }
  }

  if (href) {
    return (
      <StyledLink href={href} onClick={handleClick} {...ButtonProps}>
        {ButtonProps.children}
      </StyledLink>
    )
  }

  return (
    <StyledButton onClick={handleClick} {...ButtonProps}>
      {ButtonProps.children}
    </StyledButton>
  )
}
