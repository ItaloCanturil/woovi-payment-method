import { Box, Container } from "@mui/material";
import Accordion from "../components/accordion";
import { useRef } from "react";

export default function Home() {

  return (
    <>
      <Accordion badge='Pix' amount='30.500,00' numberPart='1' description='Ganhe 3% de Cashback' descriptionColor="secondary.main" hasNotification={true}></Accordion>

    </>
  );
}
