'use client'

import { theme } from '@/styles/theme'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export const ButtonContainer = styled.div`
  display: inline-block;
`

const BaseButton = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;
  padding: 10px 16px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  background-color: ${theme.colors.secondaryColor};
  border: 1px solid ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};

  &:hover {
    background-color: ${theme.colors.thirdColor};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }
`

export const StyledButton = styled.button`
  ${BaseButton}
`

export const StyledLink = styled(Link)`
  ${BaseButton}
`
