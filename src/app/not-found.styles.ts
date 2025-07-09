'use client'

import { media } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'

export const NotFoundContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;

  ${(media.sm, media.md)} {
    padding: 0px;
  }
`

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px 0;

  p {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 12px;
  }
`

export const NotFoundImage = styled(Image)`
  width: 600px;
  height: 600px;
  object-fit: cover;

  ${(media.sm, media.md)} {
    width: 100%;
    height: auto;
  }
`
