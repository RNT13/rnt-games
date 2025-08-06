
import { useAppSelector } from "@/hooks/useAppDispatch";
import { RootState } from "@/redux/store";
import { FaHouseUser } from "react-icons/fa";
import { Button } from "../Button/Button";
import { HeaderButtons, HeaderLogin, HeaderRegister, HeaderUserAvatar, UserAvatar } from "./HeaderAuthStyles";

export default function HeaderAuth() {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth)
  const { user } = useAppSelector((state: RootState) => state.auth)


  if (isAuthenticated && user)
    return (
      <HeaderUserAvatar>
        <UserAvatar>
          <Button href={`/dashboard/${user.id}`} title={`Ir para o dashboard de ${user.name}`}>
            <FaHouseUser />
            <span>{user.name}</span>
          </Button>
        </UserAvatar>
      </HeaderUserAvatar>
    )

  return (
    <HeaderButtons>
      <HeaderLogin>
        <Button href="/sign-in" title="Fazer Login" >Login</Button>
      </HeaderLogin>
      <HeaderRegister>
        <Button href="/register" title="Fazer Cadastro" >Cadastro</Button>
      </HeaderRegister>
    </HeaderButtons>
  )
}
