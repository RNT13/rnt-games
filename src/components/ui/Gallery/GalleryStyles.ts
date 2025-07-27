import { media, theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const GalleryContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const GalleryContent = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid ${theme.colors.baseBlue.light30};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const GalleryIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: ${transitions.default};

  svg {
    z-index: 10;
    font-size: 32px;
    color: ${theme.colors.baseBlue.light30};
    transition: ${transitions.default};
  }

  &:hover {
    opacity: 1;
  }
`
export const GalleryModal = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1000px;
  max-height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  button {
    right: 30px;
  }

  ${media.tablet}, ${media.mobile} {
    width: 90%;
    height: auto;
  }
`

export const GalleryModalContent = styled.div`
  position: relative;
  border-radius: 12px;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    top: -30px;
    right: -30px;
    font-size: 32px;
    color: ${theme.colors.baseCyan.base};
  }

  img,
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  iframe {
    width: 1000px;
    height: 500px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
    border: 3px solid ${theme.colors.baseBlue.light30};
  }
`
