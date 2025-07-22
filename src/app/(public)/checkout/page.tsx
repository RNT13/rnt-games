'use client'

import { Button } from "@/components/ui/Button/Button";
import { FormCard } from "@/components/ui/FormCard/FormCard";
import { formatToBRL } from "@/utils/converterUtils";
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, useForm } from 'react-hook-form';
import { CiBarcode } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa";
import { z } from "zod";
import { CheckoutContainer, CheckoutContent, InputGroup, Row, TabStyledButton } from "./checkoutStyles";

const checkoutSchema = z.object({
  fullName: z.string().min(1, "Nome completo é obrigatório"),
  email: z.string().email("Email inválido"),
  cpf: z.string().min(11, "CPF inválido"),
  deliveryEmail: z.string().email("Email de entrega inválido"),
  confirmDeliveryEmail: z.string().email("Confirmação de email inválido"),
  payWithCard: z.boolean(),

  // Campos de cartão opcionais aqui
  cardOwner: z.string().optional(),
  cpfCardOwner: z.string().optional(),
  cardName: z.string().optional(),
  cardNumber: z.string().optional(),
  expiresMonth: z.string().optional(),
  expiresYear: z.string().optional(),
  cardCode: z.string().optional(),
  instalments: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.payWithCard) {
    if (!data.cardName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Número do cartão é obrigatório",
        path: ["cardName"],
      });
    }
    if (!data.cardOwner) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Nome do titular é obrigatório",
        path: ["cardOwner"],
      });
    }
    if (!data.cpfCardOwner) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "CPF do titular é obrigatório",
        path: ["cpfCardOwner"],
      });
    }
    if (!data.expiresMonth) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Mês de validade é obrigatório",
        path: ["expiresMonth"],
      });
    }
    if (!data.expiresYear) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Ano de validade é obrigatório",
        path: ["expiresYear"],
      });
    }
    if (!data.cardCode) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Código de segurança é obrigatório",
        path: ["cardCode"],
      });
    }
    if (!data.instalments) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Selecione o número de parcelas",
        path: ["instalments"],
      });
    }
    if (!data.cardNumber) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Número do cartão é obrigatório",
        path: ["cardNumber"],
      });
    }
  }
});

type formSchemaType = z.infer<typeof checkoutSchema>

export default function Checkout() {
  const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm<formSchemaType>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      payWithCard: false,
    },
  });

  const payWithCard = watch('payWithCard');

  const onSubmit = (data: formSchemaType) => {
    console.log("submit");
    console.log("Dados do form:", data);
  }

  const onError = (errors: FieldErrors<formSchemaType>) => {
    console.log('Erro no formulário:', errors);
  };

  return (
    <CheckoutContainer $marginTop="24px" >
      <CheckoutContent>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormCard title="Dados de Cobranças">
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Nome completo</label>
                <input id="fullName" {...register("fullName")} type="text" placeholder="Seu nome completo" />
                {errors.fullName && <span>{errors.fullName.message}</span>}
              </InputGroup>
              <InputGroup>
                <label htmlFor="email" >Seu e-mail</label>
                <input id="email" {...register('email')} type="email" placeholder="Seu e-mail" />
                {errors.email && <span>{errors.email.message}</span>}
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf" >CPF</label>
                <input id="cpf" {...register('cpf')} type="text" placeholder="Seu CPF" />
                {errors.cpf && <span>{errors.cpf.message}</span>}
              </InputGroup>
            </Row>
            <h3 className="marginTop">Dados de entrega - Conteúdo digital</h3>
            <Row>
              <InputGroup>
                <label htmlFor="deliveryEmail" >E-mail</label>
                <input id="deliveryEmail" {...register('deliveryEmail')} type="text" placeholder="Seu e-mail" />
                {errors.deliveryEmail && <span>{errors.deliveryEmail.message}</span>}
              </InputGroup>
              <InputGroup>
                <label htmlFor="confirmDeliveryEmail" >Confirme seu E-mail</label>
                <input id="confirmDeliveryEmail" {...register('confirmDeliveryEmail')} type="text" placeholder="Confirme seu E-mail" />
                {errors.confirmDeliveryEmail && <span>{errors.confirmDeliveryEmail.message}</span>}
              </InputGroup>
            </Row>
          </FormCard>
          <FormCard title="Dados de Pagamento">
            <Row $marginBottom="24px">
              <TabStyledButton type="button" $isActive={!payWithCard} onClick={() => setValue("payWithCard", false)}>
                <CiBarcode />
                Boleto bancario
              </TabStyledButton>
              <TabStyledButton type="button" $isActive={payWithCard} onClick={() => setValue("payWithCard", true, { shouldValidate: true })}>
                <FaRegCreditCard />
                Cartão de crédito
              </TabStyledButton>
            </Row>

            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner" >Nome do titular do Cartão</label>
                    <input id="cardOwner" {...register('cardOwner')} type="text" placeholder="Nome do titular do Cartão" />
                    {errors.cardOwner && <span>{errors.cardOwner.message}</span>}
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner" >CPF do titular do Cartão</label>
                    <input id="cpfCardOwner" {...register('cpfCardOwner')} type="text" placeholder="CPF do titular do Cartão" />
                    {errors.cpfCardOwner && <span>{errors.cpfCardOwner.message}</span>}
                  </InputGroup>
                </Row>
                <Row $marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardName" >Nome no Cartão</label>
                    <input id="cardName" {...register('cardName')} type="text" placeholder="Nome no Cartão" />
                    {errors.cardName && <span>{errors.cardName.message}</span>}
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber" >Numero do Cartão</label>
                    <input id="cardNumber" {...register('cardNumber')} type="text" placeholder="Numero do Cartão" />
                    {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
                  </InputGroup>
                  <InputGroup $maxWidth="150px">
                    <label htmlFor="expiresMonth" >Mes de vencimento</label>
                    <input id="expiresMonth" {...register('expiresMonth')} type="text" placeholder="MM/AA" />
                    {errors.expiresMonth && <span>{errors.expiresMonth.message}</span>}
                  </InputGroup>
                  <InputGroup $maxWidth="150px">
                    <label htmlFor="expiresYear" >Ano de vencimento</label>
                    <input id="expiresYear" {...register('expiresYear')} type="text" placeholder="MM/AA" />
                    {errors.expiresYear && <span>{errors.expiresYear.message}</span>}
                  </InputGroup>
                  <InputGroup $maxWidth="50px">
                    <label htmlFor="cardCode" >CVV</label>
                    <input id="cardCode" {...register('cardCode')} type="text" placeholder="CVV" />
                    {errors.cardCode && <span>{errors.cardCode.message}</span>}
                  </InputGroup>
                </Row>
                <Row $marginTop="24px">
                  <InputGroup $maxWidth="150px">
                    <label htmlFor="instalments" >Parcelas</label>
                    <select id="instalments" {...register('instalments')}>
                      <option value="">Selecione</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}x {formatToBRL(500 / (i + 1))}
                        </option>
                      ))}
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
            <Button type="submit">
              Finalizar compra
            </Button>
          </Row>
        </form>
      </CheckoutContent>
    </CheckoutContainer >
  )
}


