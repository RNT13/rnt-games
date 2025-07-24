'use client'

import { Button } from "@/components/ui/Button/Button";
import { FormCard } from "@/components/ui/FormCard/FormCard";
import { usePostPurchaseMutation } from "@/redux/slices/apiSlice";
import { formatToBRL } from "@/utils/converterUtils";
import { useFormik } from 'formik';
import { useState } from "react";
import { CiBarcode } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa";
import * as yup from 'yup';
import { CheckoutContainer, CheckoutContent, Disclaimer, InputGroup, Row, TabStyledButton } from "./checkoutStyles";


export default function Checkout() {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isSuccess, data }] = usePostPurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',

      payWithCard: false,
      cardOwner: '',
      cpfCardOwner: '',
      cardName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      instalments: '1',
    },
    validationSchema: yup.object({
      fullName: yup.string().min(5, 'Minimo de 5 caracteres').required('Campo obrigatório'),
      email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
      cpf: yup.string().min(14, 'Minimo de 14 caracteres').max(14, 'Maximo de 14 caracteres').required('Campo obrigatório'),
      deliveryEmail: yup.string().email('E-mail inválido').required('Campo obrigatório'),
      confirmDeliveryEmail: yup.string().email('E-mail inválido').required('Campo obrigatório').oneOf([yup.ref('deliveryEmail')], 'E-mail não confere'),

      cardOwner: yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      cpfCardOwner: yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      cardName: yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      cardNumber: yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      expiresMonth: yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      expiresYear: yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      cardCode: yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
      instalments: yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullName,
          email: values.email,
          document: values.cpf
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          card: {
            active: payWithCard,
            code: values.cardCode,
            name: values.cardName,
            number: values.cardNumber,
            owner: {
              name: values.cardOwner,
              document: values.cpfCardOwner
            },
            expires: {
              month: parseInt(values.expiresMonth),
              year: parseInt(values.expiresYear)
            }
          },
          installments: parseInt(values.instalments),
        },
        products: [
          {
            id: 1,
            name: 'Red Dead Redemption 2',
            price: 299
          }
        ]
      })

      //e se eu passar alguma  coisa aqui para o  isSuccess ser true?
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const hasError = fieldName in form.errors

    if (isTouched && hasError) {
      return (
        <small>{message}</small>
      )
    } else {
      return null
    }
  }

  return (
    <CheckoutContainer $marginTop="24px" >
      <CheckoutContent>
        {isSuccess ? (
          <FormCard title="Resumo da compra">
            <Disclaimer >
              <h3>Muito obrigado por comprar conosco</h3>
              <p>
                É com satisfação que informamos que recebemos seu pedido com sucesso! <br /> Abaixo estão os detalhes da sua compra:<br /> Número do pedido: {data.orderId}<br /> Valor total: R$ {data.totalPrice} <br /> Forma de pagamento: {payWithCard ? 'Cartão de crédito' : 'Boleto'}
              </p>
              <p className="marginTop">
                Caso tenha optado pelo pagamento via boleto bancário, lembre-se de que a confirmação pode levar até 3 dias úteis. Após a aprovação do pagamento, enviaremos um e-mail contendo o código de ativação do jogo.
              </p>
              <p className="marginTop">
                Se você optou pelo pagamento com cartão de crédito, a liberação do código de ativação ocorrerá após a aprovação da transação pela operadora do cartão.
              </p>
              <p className="marginTop">
                Você receberá o código no e-mail cadastrado em nossa loja.
                Pedimos que verifique sua caixa de entrada e a pasta de spam para garantir que receba nossa comunicação.
              </p>
              <p className="marginTop">
                Caso tenha alguma dúvida ou necessite de mais informações, por favor, entre em contato conosco através dos nossos canais de atendimento ao cliente.
              </p>
              <p>
                Agradecemos por escolher a EPLAY e esperamos que desfrute do seu jogo!
              </p>
            </Disclaimer>
          </FormCard>
        ) : (
          <form onSubmit={form.handleSubmit}>
            <FormCard title="Dados de Cobranças">
              <Row>

                <InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input id="fullName" name="fullName" type="text" placeholder="Seu nome completo" value={form.values.fullName} onChange={form.handleChange} onBlur={form.handleBlur} />
                  {getErrorMessage('fullName', form.errors.fullName)}
                </InputGroup>

                <InputGroup>
                  <label htmlFor="email" >Seu e-mail</label>
                  <input id="email" name="email" type="email" placeholder="seu@email.com" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
                  {getErrorMessage('email', form.errors.email)}
                </InputGroup>

                <InputGroup>
                  <label htmlFor="cpf" >CPF</label>
                  <input id="cpf" name="cpf" type="text" placeholder="000.000.000-00" value={form.values.cpf} onChange={form.handleChange} onBlur={form.handleBlur} />
                  {getErrorMessage('cpf', form.errors.cpf)}
                </InputGroup>

              </Row>
              <h3 className="marginTop">Dados de entrega - Conteúdo digital</h3>
              <Row>

                <InputGroup>
                  <label htmlFor="deliveryEmail" >E-mail</label>
                  <input id="deliveryEmail" name="deliveryEmail" type="email" placeholder="seu@email.com" value={form.values.deliveryEmail} onChange={form.handleChange} onBlur={form.handleBlur} />
                  {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
                </InputGroup>

                <InputGroup>
                  <label htmlFor="confirmDeliveryEmail" >Confirme seu E-mail</label>
                  <input id="confirmDeliveryEmail" name="confirmDeliveryEmail" type="email" placeholder="Confirme seu@email.com" value={form.values.confirmDeliveryEmail} onChange={form.handleChange} onBlur={form.handleBlur} />
                  {getErrorMessage('confirmDeliveryEmail', form.errors.confirmDeliveryEmail)}
                </InputGroup>

              </Row>
            </FormCard>
            <FormCard title="Dados de Pagamento">
              <Row $marginBottom="24px">
                <TabStyledButton type="button" $isActive={!payWithCard} onClick={() => setPayWithCard(false)}>
                  <CiBarcode />
                  Boleto bancario
                </TabStyledButton>
                <TabStyledButton type="button" $isActive={payWithCard} onClick={() => setPayWithCard(true)}>
                  <FaRegCreditCard />
                  Cartão de crédito
                </TabStyledButton>
              </Row>

              {payWithCard ? (
                <>
                  <Row>

                    <InputGroup>
                      <label htmlFor="cardOwner" >Nome do titular do Cartão</label>
                      <input id="cardOwner" name="cardOwner" type="text" placeholder="Nome do titular do Cartão" value={form.values.cardOwner} onChange={form.handleChange} onBlur={form.handleBlur} />
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </InputGroup>

                    <InputGroup>
                      <label htmlFor="cpfCardOwner" >CPF do titular do Cartão</label>
                      <input id="cpfCardOwner" name="cpfCardOwner" type="text" placeholder="000.000.000-00" value={form.values.cpfCardOwner} onChange={form.handleChange} onBlur={form.handleBlur} />
                      {getErrorMessage('cpfCardOwner', form.errors.cpfCardOwner)}
                    </InputGroup>

                  </Row>

                  <Row $marginTop="24px">

                    <InputGroup>
                      <label htmlFor="cardName" >Nome no Cartão</label>
                      <input id="cardName" name="cardName" type="text" placeholder="Nome no Cartão" value={form.values.cardName} onChange={form.handleChange} onBlur={form.handleBlur} />
                      {getErrorMessage('cardName', form.errors.cardName)}
                    </InputGroup>

                    <InputGroup>
                      <label htmlFor="cardNumber" >Numero do Cartão</label>
                      <input id="cardNumber" name="cardNumber" type="text" placeholder="Numero do Cartão" value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur} />
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </InputGroup>

                    <InputGroup $maxWidth="150px">
                      <label htmlFor="expiresMonth" >Mes de vencimento</label>
                      <input id="expiresMonth" name="expiresMonth" type="text" placeholder="MM" value={form.values.expiresMonth} onChange={form.handleChange} onBlur={form.handleBlur} />
                      {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
                    </InputGroup>

                    <InputGroup $maxWidth="150px">
                      <label htmlFor="expiresYear" >Ano de vencimento</label>
                      <input id="expiresYear" name="expiresYear" type="text" placeholder="AA" value={form.values.expiresYear} onChange={form.handleChange} onBlur={form.handleBlur} />
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </InputGroup>

                    <InputGroup $maxWidth="50px">
                      <label htmlFor="cardCode" >CVV</label>
                      <input id="cardCode" name="cardCode" type="text" placeholder="CVV" value={form.values.cardCode} onChange={form.handleChange} onBlur={form.handleBlur} />
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </InputGroup>
                  </Row>

                  <Row $marginTop="24px">

                    <InputGroup $maxWidth="150px">
                      <label htmlFor="instalments">Parcelas</label>
                      <select id="instalments" name="instalments" value={form.values.instalments} onChange={form.handleChange} onBlur={form.handleBlur}>
                        <option value="">Selecione</option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}x {formatToBRL(500 / (i + 1))}
                          </option>
                        ))}
                      </select>
                      {getErrorMessage('instalments', form.errors.instalments)}
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
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Finalizando...' : 'Finalizar compra'}
              </Button>
            </Row>
          </form>
        )}
      </CheckoutContent>
    </CheckoutContainer >
  )
}

