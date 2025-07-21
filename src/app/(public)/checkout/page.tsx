'use client'

import { Button } from "@/components/ui/Button/Button";
import { FormCard } from "@/components/ui/FormCard/FormCard";
import { useState } from "react";
import { CiBarcode } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa";
import { CheckoutContainer, CheckoutContent, InputGroup, Row } from "./checkoutStyles";

export default function Checkout() {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <CheckoutContainer $marginTop="24px">
      <CheckoutContent>
        <FormCard title="Dados de Cobranças">
          <Row>
            <InputGroup>
              <label htmlFor="fullName" >Nome completo</label>
              <input id="fullName" type="text" placeholder="Seu nome completo" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email" >Seu e-mail</label>
              <input id="email" type="email" placeholder="Seu e-mail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf" >CPF</label>
              <input id="cpf" type="text" placeholder="Seu CPF" />
            </InputGroup>
          </Row>
          <h3 className="marginTop">Dados de entrega - Conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail" >E-mail</label>
              <input id="deliveryEmail" type="text" placeholder="Seu e-mail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail" >Confirme seu E-mail</label>
              <input id="confirmDeliveryEmail" type="text" placeholder="Confirme seu E-mail" />
            </InputGroup>
          </Row>
        </FormCard>
        <FormCard title="Dados de Pagamento">
          <Row $marginBottom="24px">
            <Button type="button" onClick={() => setPayWithCard(false)}>
              <CiBarcode />
              Boleto bancario
            </Button>
            <Button type="button" onClick={() => setPayWithCard(true)}>
              <FaRegCreditCard />
              Cartão de crédito
            </Button>
          </Row>

          {payWithCard ? (
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="cardOwner" >Nome do titular do Cartão</label>
                  <input id="cardOwner" type="text" placeholder="Nome do titular do Cartão" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpfCardOwner" >CPF do titular do Cartão</label>
                  <input id="cpfCardOwner" type="text" placeholder="CPF do titular do Cartão" />
                </InputGroup>
              </Row>
              <Row $marginTop="24px">
                <InputGroup>
                  <label htmlFor="cardName" >Nome no Cartão</label>
                  <input id="cardName" type="text" placeholder="Nome no Cartão" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="securityCode" >CVC</label>
                  <input id="securityCode" type="text" placeholder="CVC" />
                </InputGroup>
                <InputGroup $maxWidth="150px">
                  <label htmlFor="expiresMonth" >Mes de vencimento</label>
                  <input id="expiresMonth" type="text" placeholder="MM/AA" />
                </InputGroup>
                <InputGroup $maxWidth="150px">
                  <label htmlFor="expiresYear" >Ano de vencimento</label>
                  <input id="expiresYear" type="text" placeholder="MM/AA" />
                </InputGroup>
                <InputGroup $maxWidth="50px">
                  <label htmlFor="cardCode" >CVV</label>
                  <input id="cardCode" type="text" placeholder="CVV" />
                </InputGroup>
              </Row>
              <Row $marginTop="24px">
                <InputGroup $maxWidth="150px">
                  <label htmlFor="instalments" >Número do Cartão</label>
                  <select id="instalments">
                    <option value="1">1x R$ 200,00</option>
                    <option value="2">2x R$ 100,00</option>
                    <option value="3">3x R$ 66,67</option>
                    <option value="4">4x R$ 50,00</option>
                    <option value="5">5x R$ 40,00</option>
                    <option value="6">6x R$ 33,33</option>
                  </select>
                </InputGroup>
              </Row>
            </>
          ) : (
            <p>
              Ao optar por essa forma de pagamento, é importante lembrar que a confirmação pode levar até 24 horas, dependendo do banco emissor. Portanto, a liberação do código de ativação do jogo adquirido ocorre somente após a aprovação do pagamento do boleto.
            </p>
          )}



        </FormCard>

        <Row $marginBottom="24px">
          <Button type="submit">Finalizar compra</Button>
        </Row>

      </CheckoutContent>
    </CheckoutContainer>
  )
}
