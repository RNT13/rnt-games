import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const HeaderUserAvatar = styled.div``

export const UserAvatar = styled.div`
  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: ${theme.colors.baseBlue.dark20};
    border: 2px solid ${theme.colors.baseBlue.dark20};
    color: ${theme.colors.baseBlue.light50};

    &:hover {
      background-color: ${theme.colors.baseBlue.dark30};
      border: 2px solid ${theme.colors.baseBlue.dark30};
      color: ${theme.colors.baseCyan.light};
    }

    svg {
      width: 25px;
      height: 25px;
    }

    span {
      font-size: 12px;
      font-weight: 900;
      max-width: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`

export const HeaderButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.mobile} {
    flex-direction: column;
  }
`

export const HeaderLogin = styled.div`
  width: 100%;

  a {
    width: 100%;
    background-color: ${theme.colors.baseGreen.dark20};
    border: 2px solid ${theme.colors.baseGreen.dark20};
    color: ${theme.colors.baseGreen.light50};

    &:hover {
      background-color: ${theme.colors.baseGreen.dark30};
      border: 2px solid ${theme.colors.baseGreen.dark30};
      box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
      color: ${theme.colors.baseCyan.light};
    }
  }
`

export const HeaderRegister = styled.div`
  width: 100%;

  a {
    width: 100%;
    background-color: ${theme.colors.baseBlue.dark30};
    border: 2px solid ${theme.colors.baseBlue.dark30};
    color: ${theme.colors.baseBlue.light50};

    &:hover {
      background-color: ${theme.colors.baseBlue.dark40};
      border: 2px solid ${theme.colors.baseBlue.dark40};
      box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
      color: ${theme.colors.baseCyan.light};
    }
  }
`
