import { StyledButton } from '@/components/ui/Button/ButtonStyles'
import { theme } from '@/styles/theme'
import Image from 'next/image'
import { styled } from 'styled-components'

export const DashboardContainer = styled.div`
  margin: 12px;
  font-weight: 700;
`

export const DashboardContent = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  gap: 24px;
`

export const DashboardRightBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 200px;
  background-color: ${theme.colors.baseBlue.light30};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
`

export const DashboardAvatar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid ${theme.colors.baseBlue.dark40};

  p:last-child {
    margin-bottom: 12px;
  }
`

export const DashboardButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 12px;
  margin-top: 12px;
`

export const DashboardButton = styled(StyledButton)<{ $isActive?: boolean }>`
  width: 100%;
  background-color: ${({ $isActive }) => ($isActive ? theme.colors.baseBlue.dark20 : theme.colors.baseBlue.light30)};
  border: ${({ $isActive }) => ($isActive ? `2px solid ${theme.colors.baseCyan.light}` : `2px solid ${theme.colors.baseBlue.light30}`)};
  color: ${({ $isActive }) => ($isActive ? theme.colors.baseCyan.light : theme.colors.baseBlue.dark30)};

  svg {
    font-size: 20px;
    color: ${({ $isActive }) => ($isActive ? theme.colors.baseCyan.light : theme.colors.baseBlue.dark30)};
  }

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? theme.colors.baseBlue.dark30 : 'trasparent')};
    border: ${({ $isActive }) => ($isActive ? `2px solid ${theme.colors.baseCyan.light}` : `2px solid ${theme.colors.baseBlue.light30}`)};
    color: ${({ $isActive }) => ($isActive ? theme.colors.baseCyan.light : theme.colors.baseBlue.light30)};
  }
`

export const DashboardAvatarImage = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 100px;
`

export const DashboardColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h3,
  h2 {
    margin: 4px 14px;
  }
`

export const DashboardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  .buttonGrey {
    background-color: ${theme.colors.baseBlue.dark40};
    border: 2px solid ${theme.colors.baseBlue.dark40};
  }
`

export const DashboardHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  gap: 24px;

  h3 {
    margin: 12px;
  }
`

export const DashboardHeaderItem = styled.div`
  display: flex;
  gap: 4px;
  padding: 16px;
  height: 150px;
  width: 100%;
  border-radius: 8px;
  background-color: ${theme.colors.baseBlue.light30};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);

  .svgBlue {
    color: ${theme.colors.baseBlue.dark30};
    font-size: 40px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.6));
  }

  .svgCyan {
    color: ${theme.colors.baseCyan.dark20};
    font-size: 30px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.6));
  }

  .svgGreen {
    color: ${theme.colors.baseGreen.dark20};
    font-size: 30px;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.6));
  }
`

export const DashboardBody = styled.div`
  padding: 16px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${theme.colors.baseBlue.light30};
  overflow-y: auto;
  scrollbar-width: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
`

export const DashboardCardLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  background-color: ${theme.colors.baseBlue.dark20};

  h3 {
    color: ${theme.colors.baseBlue.light30};
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }

  span {
    color: ${theme.colors.baseGreen.light30};
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`

export const DashboardCardItem = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${theme.colors.baseBlue.dark20};

  img {
    width: 100%;
    height: 100%;
  }

  h3 {
    color: ${theme.colors.baseBlue.light30};
  }

  > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;

    ${StyledButton} {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`
