import Image from 'next/image'
import { styled } from 'styled-components'

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    margin-top: 12px;
  }
`

export const LoadingImage = styled(Image)`
  width: 100%;
  height: 100%;
`
