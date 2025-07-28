'use client'

import { Button } from "@/components/ui/Button/Button";
import { TitleH2 } from "@/styles/globalStyles";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { ButtonDiv, PricingCardBody, PricingCardHeader, PricingContainer, PricingContent, PricingPlan, PricingPlanCard } from "./pricingStyles";

export default function Pricing() {
  return (
    <PricingContainer className="container">
      <PricingContent >
        <TitleH2>Escolha seu plano</TitleH2>
        <PricingPlan>

          <PricingPlanCard className="free">
            <PricingCardHeader>
              <TitleH2>GRATUITO</TitleH2>
              <p>R$ 0 / Mês</p>
            </PricingCardHeader>
            <ButtonDiv>
              <Button className="freeButton">Seu plano atual</Button>
            </ButtonDiv>
            <PricingCardBody>
              <li>
                <FaCheck />
                <p>Acesso ao catalogo completo</p>
              </li>
              <li>
                <FaCheck />
                <p>Sem cobrança mensal</p>
              </li>
              <li>
                <ImCross className="svgRed" />
                <p>Acesso ao PlayNuvem</p>
              </li>
            </PricingCardBody>
          </PricingPlanCard>

          <PricingPlanCard className="premium">
            <PricingCardHeader>
              <div>
                <TitleH2>PREMIUM</TitleH2>
                <span>Mais popular</span>
              </div>
              <p>R$ 4.99 / Mês</p>
            </PricingCardHeader>
            <ButtonDiv>
              <Button className="premiumButton">Obter plano premium</Button>
            </ButtonDiv>
            <PricingCardBody>
              <li>
                <FaCheck />
                <p>Acesso ao catalogo com diversos descontos</p>
              </li>
              <li>
                <FaCheck />
                <p>Participa de sorteios de jogos todo mês</p>
              </li>
              <li>
                <FaCheck />
                <p>Pode baixar jogos gratis ilimitados</p>
              </li>
              <li>
                <FaCheck />
                <p>Acesso limitado ao PlayNuvem</p>
              </li>
            </PricingCardBody>
          </PricingPlanCard>

          <PricingPlanCard className="pro">
            <PricingCardHeader>
              <TitleH2>PRO</TitleH2>
              <p>R$ 14.99 / Mês</p>
            </PricingCardHeader>
            <ButtonDiv>
              <Button className="proButton">Obter plano PRO</Button>
            </ButtonDiv>
            <PricingCardBody>
              <li>
                <FaCheck />
                <p>Acesso ao catalogo com descontos exclusivos</p>
              </li>
              <li>
                <FaCheck />
                <p>Participa de sorteios de jogos todo semana</p>
              </li>
              <li>
                <FaCheck />
                <p>Pode baixar jogos pagos e testá-los por 1 horas</p>
              </li>
              <li>
                <FaCheck />
                <p>Acesso ilimitado ao PlayNuvem. Jogue seus jogos onde quiser</p>
              </li>
            </PricingCardBody>
          </PricingPlanCard>

        </PricingPlan>
      </PricingContent >
    </PricingContainer >
  )
}
