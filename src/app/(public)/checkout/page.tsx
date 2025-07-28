'use client'

import { Button } from "@/components/ui/Button/Button";
import { FormCard } from "@/components/ui/FormCard/FormCard";
import { usePostPurchaseMutation } from "@/redux/slices/apiSlice";
import { RootState } from "@/redux/store";
import { TitleH2 } from "@/styles/globalStyles";
import { InstallmentType } from "@/types/InstallmentType";
import { formatToBRL } from "@/utils/converterUtils";
import { getTotalPrice } from "@/utils/priceUtils";
import { useFormik } from 'formik';
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiBarcode } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa";
import { useSelector } from "react-redux";
import * as yup from 'yup';
import { CartEmpty, CartEmptyImage, CheckoutContainer, CheckoutContent, Disclaimer, InputGroup, Row, TabDiv, TabStyledButton } from "./checkoutStyles";


export default function Checkout() {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isSuccess, data }] = usePostPurchaseMutation()
  const { items } = useSelector((state: RootState) => state.cart)
  const [installments, setInstallments] = useState<InstallmentType[]>([])

  const totalPrice = getTotalPrice(items)

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
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const hasError = fieldName in form.errors
    const isInvalid = isTouched && hasError

    return isInvalid
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: InstallmentType[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: formatToBRL(totalPrice / i)
        })
      }
      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  if (items.length === 0) {
    return (
      <CheckoutContainer $marginTop="24px" >
        <CartEmpty >
          <TitleH2>O carrinho está vazio!</TitleH2>
          <p>
            Para finalizar a compra, adicione pelo menos um jogo ao carrinho.
          </p>
          <CartEmptyImage>
            <Image src="/empty-cart.png" alt="Carrinho vazio" width={300} height={300} priority />
          </CartEmptyImage>
        </CartEmpty>
      </CheckoutContainer>
    )
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
                  <input id="fullName" name="fullName" type="text" placeholder="Seu nome completo" value={form.values.fullName} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('fullName') ? 'error' : ''} />
                </InputGroup>

                <InputGroup>
                  <label htmlFor="email" >Seu e-mail</label>
                  <input id="email" name="email" type="email" placeholder="seu@email.com" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('email') ? 'error' : ''} />
                </InputGroup>

                <InputGroup>
                  <label htmlFor="cpf" >CPF</label>
                  <input id="cpf" name="cpf" type="text" placeholder="000.000.000-00" value={form.values.cpf} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cpf') ? 'error' : ''} />

                </InputGroup>

              </Row>
              <h3 className="marginTop">Dados de entrega - Conteúdo digital</h3>
              <Row>

                <InputGroup>
                  <label htmlFor="deliveryEmail" >E-mail</label>
                  <input id="deliveryEmail" name="deliveryEmail" type="email" placeholder="seu@email.com" value={form.values.deliveryEmail} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('deliveryEmail') ? 'error' : ''} />
                </InputGroup>

                <InputGroup>
                  <label htmlFor="confirmDeliveryEmail" >Confirme seu E-mail</label>
                  <input id="confirmDeliveryEmail" name="confirmDeliveryEmail" type="email" placeholder="Confirme seu@email.com" value={form.values.confirmDeliveryEmail} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('confirmDeliveryEmail') ? 'error' : ''} />
                </InputGroup>

              </Row>
            </FormCard>
            <FormCard title="Dados de Pagamento">
              <TabDiv>
                <TabStyledButton type="button" $isActive={!payWithCard} onClick={() => setPayWithCard(false)} title="Trocar forma de pagamento para boleto bancario">
                  <CiBarcode />
                  Boleto bancario
                </TabStyledButton>
                <TabStyledButton type="button" $isActive={payWithCard} onClick={() => setPayWithCard(true)} title="Trocar forma de pagamento para cartão de crédito">
                  <FaRegCreditCard />
                  Cartão de crédito
                </TabStyledButton>
              </TabDiv>

              {payWithCard ? (
                <>
                  <Row>

                    <InputGroup>
                      <label htmlFor="cardOwner" >Nome do titular do Cartão</label>
                      <input id="cardOwner" name="cardOwner" type="text" placeholder="Nome do titular do Cartão" value={form.values.cardOwner} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cardOwner') ? 'error' : ''} />
                    </InputGroup>

                    <InputGroup>
                      <label htmlFor="cpfCardOwner" >CPF do titular do Cartão</label>
                      <input id="cpfCardOwner" name="cpfCardOwner" type="text" placeholder="000.000.000-00" value={form.values.cpfCardOwner} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cpfCardOwner') ? 'error' : ''} />
                    </InputGroup>

                  </Row>

                  <Row $marginTop="24px">

                    <InputGroup>
                      <label htmlFor="cardName" >Nome no Cartão</label>
                      <input id="cardName" name="cardName" type="text" placeholder="Nome no Cartão" value={form.values.cardName} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cardName') ? 'error' : ''} />
                    </InputGroup>

                    <InputGroup>
                      <label htmlFor="cardNumber" >Numero do Cartão</label>
                      <input id="cardNumber" name="cardNumber" type="text" placeholder="Numero do Cartão" value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cardNumber') ? 'error' : ''} />
                    </InputGroup>

                    <InputGroup $maxWidth="150px">
                      <label htmlFor="expiresMonth" >Mes de vencimento</label>
                      <input id="expiresMonth" name="expiresMonth" type="text" placeholder="MM" value={form.values.expiresMonth} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('expiresMonth') ? 'error' : ''} />
                    </InputGroup>

                    <InputGroup $maxWidth="150px">
                      <label htmlFor="expiresYear" >Ano de vencimento</label>
                      <input id="expiresYear" name="expiresYear" type="text" placeholder="AA" value={form.values.expiresYear} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('expiresYear') ? 'error' : ''} />
                    </InputGroup>

                    <InputGroup $maxWidth="50px">
                      <label htmlFor="cardCode" >CVV</label>
                      <input id="cardCode" name="cardCode" type="text" placeholder="CVV" value={form.values.cardCode} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('cardCode') ? 'error' : ''} />
                    </InputGroup>
                  </Row>

                  <Row $marginTop="24px">

                    <InputGroup $maxWidth="150px">
                      <label htmlFor="instalments">Parcelas</label>
                      <select id="instalments" name="instalments" value={form.values.instalments} onChange={form.handleChange} onBlur={form.handleBlur} className={checkInputHasError('instalments') ? 'error' : ''}>
                        {installments.map((installment) => (
                          <option key={installment.quantity}>
                            {installment.quantity} x de {''}
                            {installment.formattedAmount}
                          </option>
                        ))}
                        {/* {Array.from({ length: 6 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}x {formatToBRL(getTotalPrice(items) / (i + 1))}
                          </option>
                        ))} */}
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
            <Row $marginBottom="24px" className="container">
              <Button type="submit" disabled={isLoading} title="Finalizar compra">
                {isLoading ? 'Finalizando...' : 'Finalizar compra'}
              </Button>
            </Row>
          </form>
        )}
      </CheckoutContent>
    </CheckoutContainer >
  )
}

