'use client'

import { theme, transitions } from '@/styles/theme'
import Link from 'next/link'
import styled, { css } from 'styled-components'

const BaseButton = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  text-decoration: none;
  background-color: ${theme.colors.baseBlue.dark};
  border: 2px solid ${theme.colors.baseBlue.dark};
  color: ${theme.colors.baseBlue.light50};
  transition: ${transitions.default};

  &:hover {
    background-color: ${theme.colors.baseBlue.light};
    border: 2px solid ${theme.colors.baseBlue.light};
    color: ${theme.colors.baseBlue.light50};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
    transition: ${transitions.default};
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
