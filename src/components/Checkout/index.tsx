import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { IMaskInput } from "react-imask";

import { Container, Form, InputGroup, InputWrapper } from "./styles";
import Button from "../Button";
import { usePurchaseMutation } from "../../services/api";
import { Dish } from "../../pages/Perfil";
import { FormattedPrice } from "../Modal";

type Props = {
  onBackToCart: () => void;
  purchase: ReturnType<typeof usePurchaseMutation>[0];
  items: Dish[];
  clearCart: () => void;
  goToSuccess: () => void;
};

const Checkout = ({
  onBackToCart,
  purchase,
  items,
  clearCart,
  goToSuccess,
}: Props) => {
  const [step, setStep] = useState<"delivery" | "payment">("delivery");
  const validationSchema = Yup.object().shape({
    receiver: Yup.string().when("step", {
      is: "delivery",
      then: (schema) =>
        schema
          .min(5, "O nome precisa ter pelo menos 5 caracteres")
          .required("O campo é obrigatório"),
      otherwise: (schema) => schema,
    }),
    address: Yup.string().when("step", {
      is: "delivery",
      then: (schema) => schema.required("O campo é obrigatório"),
      otherwise: (schema) => schema,
    }),
    city: Yup.string().when("step", {
      is: "delivery",
      then: (schema) => schema.required("O campo é obrigatório"),
      otherwise: (schema) => schema,
    }),
    zipCode: Yup.string().when("step", {
      is: "delivery",
      then: (schema) =>
        schema.min(9, "CEP inválido").required("O campo é obrigatório"),
      otherwise: (schema) => schema,
    }),
    number: Yup.string().when("step", {
      is: "delivery",
      then: (schema) => schema.required("O campo é obrigatório"),
      otherwise: (schema) => schema,
    }),

    // Payment fields
    cardName: Yup.string().when("step", {
      is: "payment",
      then: (schema) =>
        schema
          .min(5, "O nome precisa ter pelo menos 5 caracteres")
          .required("O campo é obrigatório"),
      otherwise: (schema) => schema,
    }),
    cardNumber: Yup.string().when("step", {
      is: "payment",
      then: (schema) =>
        schema
          .min(19, "Número do cartão inválido")
          .required("O campo é obrigatório"),
      otherwise: (schema) => schema,
    }),
    cardCode: Yup.string().when("step", {
      is: "payment",
      then: (schema) =>
        schema.min(3, "CVV inválido").required("O campo é obrigatório"),
      otherwise: (schema) => schema,
    }),
    expiresMonth: Yup.string().when("step", {
      is: "payment",
      then: (schema) =>
        schema
          .min(2, "Mês de vencimento inválido")
          .required("O campo é obrigatório"),
      otherwise: (schema) => schema,
    }),
    expireYear: Yup.string().when("step", {
      is: "payment",
      then: (schema) =>
        schema
          .min(2, "Ano de vencimento inválido")
          .required("O campo é obrigatório"),
      otherwise: (schema) => schema,
    }),
  });

  const form = useFormik({
    initialValues: {
      receiver: "",
      address: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expireYear: "",
      step: "delivery",
    },
    validationSchema,
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expireYear),
            },
          },
        },
      }).then(() => {
        clearCart();
        goToSuccess();
      });
    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isTouched && isInvalid) {
      return message;
    }
    return "";
  };

  const goToPayment = () => {
    form.setFieldValue("step", "delivery");
    form.validateForm().then((errors) => {
      const deliveryErrors =
        errors.receiver ||
        errors.address ||
        errors.city ||
        errors.zipCode ||
        errors.number;

      if (!deliveryErrors) {
        setStep("payment");
        form.setFieldValue("step", "payment");
      } else {
        form.setFieldTouched("receiver", true);
        form.setFieldTouched("address", true);
        form.setFieldTouched("city", true);
        form.setFieldTouched("zipCode", true);
        form.setFieldTouched("number", true);
      }
    });
  };

  return (
    <Container>
      <Form onSubmit={form.handleSubmit}>
        {step === "delivery" ? (
          <>
            <h3>Entrega</h3>
            <InputWrapper>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                type="text"
                id="receiver"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage("receiver", form.errors.receiver)}</small>
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage("address", form.errors.address)}</small>
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage("city", form.errors.city)}</small>
            </InputWrapper>
            <InputGroup>
              <InputWrapper>
                <label htmlFor="zipCode">CEP</label>
                <IMaskInput
                  mask="00000-000"
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  onAccept={(value: any) =>
                    form.setFieldValue("zipCode", value)
                  }
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage("zipCode", form.errors.zipCode)}</small>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="number">Número</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage("number", form.errors.number)}</small>
              </InputWrapper>
            </InputGroup>
            <InputWrapper>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputWrapper>
            <div className="marginTop">
              <Button type="button" variant="addCart" onClick={goToPayment}>
                Continuar com o pagamento
              </Button>
              <Button type="button" variant="addCart" onClick={onBackToCart}>
                Voltar para o carrinho
              </Button>
            </div>
          </>
        ) : (
          <>
            <h3>
              Pagamento - Valor a pagar: R$ {FormattedPrice(items[0].preco)}
            </h3>
            <InputWrapper>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage("cardName", form.errors.cardName)}</small>
            </InputWrapper>
            <InputGroup className="card-fields">
              <InputWrapper>
                <label htmlFor="cardNumber">Número do cartão</label>
                <IMaskInput
                  mask="0000 0000 0000 0000"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onAccept={(value: any) =>
                    form.setFieldValue("cardNumber", value)
                  }
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage("cardNumber", form.errors.cardNumber)}
                </small>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="cardCode">CVV</label>
                <IMaskInput
                  mask="000"
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  value={form.values.cardCode}
                  onAccept={(value: any) =>
                    form.setFieldValue("cardCode", value)
                  }
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage("cardCode", form.errors.cardCode)}
                </small>
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <IMaskInput
                  mask="00"
                  type="text"
                  id="expiresMonth"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onAccept={(value: any) =>
                    form.setFieldValue("expiresMonth", value)
                  }
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage("expiresMonth", form.errors.expiresMonth)}
                </small>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="expireYear">Ano de vencimento</label>
                <IMaskInput
                  mask="00"
                  type="text"
                  id="expireYear"
                  name="expireYear"
                  value={form.values.expireYear}
                  onAccept={(value: any) =>
                    form.setFieldValue("expireYear", value)
                  }
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage("expireYear", form.errors.expireYear)}
                </small>
              </InputWrapper>
            </InputGroup>
            <div className="marginTop">
              <Button type="submit" variant="addCart">
                Finalizar compra
              </Button>
              <Button
                type="button"
                variant="addCart"
                onClick={() => setStep("delivery")}
              >
                Voltar para a edição de endereço
              </Button>
            </div>
          </>
        )}
      </Form>
    </Container>
  );
};

export default Checkout;
