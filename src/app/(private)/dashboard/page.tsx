'use client'

import { Button } from "@/components/ui/Button/Button";
import { logout } from "@/redux/slices/authSlice";
import { MinorTextH4, TitleH2, TitleH3 } from "@/styles/globalStyles";
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaCalendar, FaDownload } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import { IoBag, IoMenu, IoPerson } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { AvatarInfo, AvatarMenu, DashboardAvatar, DashboardAvatarDiv, DashboardAvatarImage, DashboardBody, DashboardButton, DashboardButtonDiv, DashboardCardItem, DashboardCardLine, DashboardColumn, DashboardContainer, DashboardContent, DashboardHeader, DashboardHeaderItem, DashboardRightBar, DashboardRow } from "./dashboardStyles";

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<'visaoGeral' | 'biblioteca' | 'compras'>('visaoGeral');
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const searchParams = useSearchParams();

  const toastShown = useRef(false);

  useEffect(() => {
    const isLogin = searchParams.get('login') === '1';
    if (isLogin && !toastShown.current) {
      toast.success("Logado com sucesso!");
      toastShown.current = true;
    }
  }, [searchParams]);

  const handleLogout = () => {
    // Remove token local
    localStorage.removeItem('token');
    document.cookie = 'token=; Max-Age=0; path=/';

    // Atualiza Redux
    dispatch(logout());

    // Redireciona para login com uma flag para exibir o toast lá
    router.push('/sign-in?logout=1');
  };

  return (
    <DashboardContainer>
      <DashboardContent>
        <DashboardRightBar>

          <DashboardAvatarDiv>
            <DashboardAvatar>
              <DashboardAvatarImage src="/armoredCoreGame.jpg" alt="avatar" width={80} height={80} />
              <AvatarInfo>
                <p>Nome</p>
                <p>email</p>
              </AvatarInfo>
            </DashboardAvatar>

            <AvatarMenu>
              <IoMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </AvatarMenu>
          </DashboardAvatarDiv>

          <DashboardButtonDiv $isOpen={isMenuOpen}>
            <DashboardButton onClick={() => setActiveSection('visaoGeral')} $isActive={activeSection === 'visaoGeral'} title="Visão Geral">
              <IoPerson />
              <p>Visão Geral</p>
            </DashboardButton>
            <DashboardButton onClick={() => setActiveSection('biblioteca')} $isActive={activeSection === 'biblioteca'} title="Biblioteca">
              <IoLogoGameControllerA />
              <p>Biblioteca</p>
            </DashboardButton>
            <DashboardButton onClick={() => setActiveSection('compras')} $isActive={activeSection === 'compras'} title="Compras">
              <IoBag />
              <p>Compras</p>
            </DashboardButton>
            <DashboardButton onClick={handleLogout} title="Sair" >
              <RiLogoutBoxRFill />
              <p>Sair</p>
            </DashboardButton>
          </DashboardButtonDiv>

        </DashboardRightBar>

        {activeSection === 'visaoGeral' && (
          <DashboardColumn>
            <TitleH2>Bem-vindo de volta, Nome</TitleH2>
            <DashboardHeader >
              <DashboardHeaderItem>
                <div>
                  <IoLogoGameControllerA className="svgBlue" />
                </div>
                <DashboardColumn>
                  <TitleH3>Jogos na Biblioteca</TitleH3>
                  <TitleH3>3</TitleH3>
                </DashboardColumn>
              </DashboardHeaderItem>
              <DashboardHeaderItem>
                <div>
                  <IoBag className="svgCyan" />
                </div>
                <DashboardColumn>
                  <TitleH3>Total Gasto</TitleH3>
                  <TitleH3>3</TitleH3>
                </DashboardColumn>
              </DashboardHeaderItem>
              <DashboardHeaderItem>
                <div>
                  <FaCalendar className="svgGreen" />
                </div>
                <DashboardColumn>
                  <TitleH3>Membro desde</TitleH3>
                  <TitleH3>3</TitleH3>
                </DashboardColumn>
              </DashboardHeaderItem>
            </DashboardHeader>
            <DashboardBody>
              <TitleH3>Jogos recentes</TitleH3>
              <DashboardRow>
                <DashboardCardItem>
                  <div>
                    <Image src="/armoredCoreGame.jpg" alt="avatar" width={300} height={150} />
                  </div>
                  <div>
                    <TitleH3>Games</TitleH3>
                    <Button title="Baixar" >
                      <FaDownload />
                    </Button>
                  </div>
                </DashboardCardItem>
                <DashboardCardItem>
                  <div>
                    <Image src="/armoredCoreGame.jpg" alt="avatar" width={300} height={150} />
                  </div>
                  <div>
                    <TitleH3>Games</TitleH3>
                    <Button title="Baixar" >
                      <FaDownload />
                    </Button>
                  </div>
                </DashboardCardItem>
                <DashboardCardItem>
                  <div>
                    <Image src="/armoredCoreGame.jpg" alt="avatar" width={300} height={150} />
                  </div>
                  <div>
                    <TitleH3>Games</TitleH3>
                    <Button title="Baixar" >
                      <FaDownload />
                    </Button>
                  </div>
                </DashboardCardItem>
                <DashboardCardItem>
                  <div>
                    <Image src="/armoredCoreGame.jpg" alt="avatar" width={300} height={150} />
                  </div>
                  <div>
                    <TitleH3>Games</TitleH3>
                    <Button title="Baixar" >
                      <FaDownload />
                    </Button>
                  </div>
                </DashboardCardItem>
                <DashboardCardItem>
                  <div>
                    <Image src="/armoredCoreGame.jpg" alt="avatar" width={300} height={150} />
                  </div>
                  <div>
                    <TitleH3>Games</TitleH3>
                    <Button title="Baixar" >
                      <FaDownload />
                    </Button>
                  </div>
                </DashboardCardItem>
                <DashboardCardItem>
                  <div>
                    <Image src="/armoredCoreGame.jpg" alt="avatar" width={300} height={150} />
                  </div>
                  <div>
                    <TitleH3>Games</TitleH3>
                    <Button title="Baixar" >
                      <FaDownload />
                    </Button>
                  </div>
                </DashboardCardItem>
                <DashboardCardItem>
                  <div>
                    <Image src="/armoredCoreGame.jpg" alt="avatar" width={300} height={150} />
                  </div>
                  <div>
                    <TitleH3>Games</TitleH3>
                    <Button title="Baixar" >
                      <FaDownload />
                    </Button>
                  </div>
                </DashboardCardItem>
              </DashboardRow>
            </DashboardBody>
          </DashboardColumn>
        )}

        {activeSection === 'biblioteca' && (
          <DashboardColumn>
            <TitleH2>Minha Biblioteca</TitleH2>
            <DashboardBody>
              <DashboardCardLine>
                <div>
                  <Image src="/armoredCoreGame.jpg" alt="avatar" width={70} height={70} />
                </div>
                <DashboardColumn>
                  <TitleH2>Games</TitleH2>
                  <MinorTextH4>Games</MinorTextH4>
                  <MinorTextH4>Games</MinorTextH4>
                </DashboardColumn>
                <DashboardRow>
                  <Button title="Baixar" >
                    <FaDownload />
                  </Button>
                  <Button className="buttonGrey" title="Detalhes" >
                    <TbListDetails />
                  </Button>
                </DashboardRow>
              </DashboardCardLine>
              <DashboardCardLine>
                <div>
                  <Image src="/armoredCoreGame.jpg" alt="avatar" width={70} height={70} />
                </div>
                <DashboardColumn>
                  <TitleH2>Games</TitleH2>
                  <MinorTextH4>Games</MinorTextH4>
                  <MinorTextH4>Games</MinorTextH4>
                </DashboardColumn>
                <DashboardRow>
                  <Button title="Baixar" >
                    <FaDownload />
                  </Button>
                  <Button className="buttonGrey" title="Detalhes" >
                    <TbListDetails />
                  </Button>
                </DashboardRow>
              </DashboardCardLine>
              <DashboardCardLine>
                <div>
                  <Image src="/armoredCoreGame.jpg" alt="avatar" width={70} height={70} />
                </div>
                <DashboardColumn>
                  <TitleH2>Games</TitleH2>
                  <MinorTextH4>Games</MinorTextH4>
                  <MinorTextH4>Games</MinorTextH4>
                </DashboardColumn>
                <DashboardRow>
                  <Button title="Baixar" >
                    <FaDownload />
                  </Button>
                  <Button className="buttonGrey" title="Detalhes" >
                    <TbListDetails />
                  </Button>
                </DashboardRow>
              </DashboardCardLine>
              <DashboardCardLine>
                <div>
                  <Image src="/armoredCoreGame.jpg" alt="avatar" width={70} height={70} />
                </div>
                <DashboardColumn>
                  <TitleH2>Games</TitleH2>
                  <MinorTextH4>Games</MinorTextH4>
                  <MinorTextH4>Games</MinorTextH4>
                </DashboardColumn>
                <DashboardRow>
                  <Button title="Baixar" >
                    <FaDownload />
                  </Button>
                  <Button className="buttonGrey" title="Detalhes" >
                    <TbListDetails />
                  </Button>
                </DashboardRow>
              </DashboardCardLine>
              <DashboardCardLine>
                <div>
                  <Image src="/armoredCoreGame.jpg" alt="avatar" width={70} height={70} />
                </div>
                <DashboardColumn>
                  <TitleH2>Games</TitleH2>
                  <MinorTextH4>Games</MinorTextH4>
                  <MinorTextH4>Games</MinorTextH4>
                </DashboardColumn>
                <DashboardRow>
                  <Button title="Baixar" >
                    <FaDownload />
                  </Button>
                  <Button className="buttonGrey" title="Detalhes" >
                    <TbListDetails />
                  </Button>
                </DashboardRow>
              </DashboardCardLine>
            </DashboardBody>
          </DashboardColumn>
        )}

        {activeSection === 'compras' && (
          <DashboardColumn>
            <TitleH2>Histórico de Compras</TitleH2>
            <DashboardBody>
              <DashboardCardLine>
                <Image src="/armoredCoreGame.jpg" alt="avatar" width={70} height={70} />
                <DashboardColumn>
                  <TitleH2>Games</TitleH2>
                  <MinorTextH4>Comprado em 14/04/2023</MinorTextH4>
                </DashboardColumn>
                <DashboardColumn className="right">
                  <p>R$ 199,99</p>
                  <span>Concluida</span>
                </DashboardColumn>
              </DashboardCardLine>
              <DashboardCardLine>
                <Image src="/armoredCoreGame.jpg" alt="avatar" width={70} height={70} />
                <DashboardColumn>
                  <TitleH2>Games</TitleH2>
                  <MinorTextH4>Comprado em 14/04/2023</MinorTextH4>
                </DashboardColumn>
                <DashboardColumn className="right">
                  <p>R$ 199,99</p>
                  <span>Concluida</span>
                </DashboardColumn>
              </DashboardCardLine>
              <DashboardCardLine>
                <Image src="/armoredCoreGame.jpg" alt="avatar" width={70} height={70} />
                <DashboardColumn>
                  <TitleH2>Games</TitleH2>
                  <MinorTextH4>Games</MinorTextH4>
                  <MinorTextH4>Comprado em 14/04/2023</MinorTextH4>
                </DashboardColumn>
                <DashboardColumn className="right">
                  <p>R$ 199,99</p>
                  <span>Concluida</span>
                </DashboardColumn>
              </DashboardCardLine>
            </DashboardBody>
          </DashboardColumn>
        )}

      </DashboardContent>
    </DashboardContainer>
  )
}
