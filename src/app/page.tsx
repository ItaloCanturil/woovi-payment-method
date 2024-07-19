import { Box, Container, List } from "@mui/material";
import PaymentMethodButton, { PaymentProps } from "./components/molecules/PaymentMethodButton";

export default function Home() {
  const arrStackPayment: PaymentProps[] = [
    {
      label:'Pix Parcelado',
      amount:'30.500,00',
      numberPart:'1',
      description:'Ganhe 3% de Cashback',
      descriptionColor:"secondary.main"
    },
    {
      label:'Pix Parcelado',
      amount:'30.500,00',
      numberPart:'1',
      description:'Ganhe 3% de Cashback',
      descriptionColor:"secondary.main"
    },
    {
      label:'Pix Parcelado',
      amount:'30.500,00',
      numberPart:'1',
      description:'Ganhe 3% de Cashback',
      descriptionColor:"secondary.main"
    },
    {
      label:'Pix Parcelado',
      amount:'30.500,00',
      numberPart:'1',
      description:'Ganhe 3% de Cashback',
      descriptionColor:"secondary.main"
    }
  ]

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <PaymentMethodButton label='Pix' amount='30.500,00' numberPart='1' description='Ganhe 3% de Cashback' descriptionColor="secondary.main" ></PaymentMethodButton>

      <List>
        {arrStackPayment.map((payment, index) => (
          <PaymentMethodButton
            label={payment.label}
            amount={payment.amount}
            numberPart={index + 2}
            description={payment.description}
            key={index}
          />
          ))
        }
      </List>
    </Box>
  );
}
