"use client"

import { Box, Button } from "@mui/material";
import { CheckCircle, CircleOutlined } from "@mui/icons-material";
import { useState } from "react";
import Badge from "../../atoms/Badge";

export type PaymentProps = {
  hasNotification?: boolean,
  notification?: string,
  description: string,
  descriptionColor?: string,
  amount: string,
  numberPart: string,
  label: string
}

export default function PaymentMethodButton(props: PaymentProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const boo = isActive

    setIsActive(!boo);
  }

  return (
    <Button sx={{
      display: "block",
      position: "relative",
      border: '2px solid #E5E5E5',
      borderRadius: 2,
      minWidth: '429px',
      minHeight: '137px',
      p: 2,
      textTransform: 'none'
    }} onClick={handleClick}>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          left: '20px',
          top: '-13px',
          backgroundColor: '#E5E5E5',
          fontSize: '18px',
          fontWeight: '800',
          borderRadius: 100,
          padding: '0 20px',
        }}
      >
        {props.label}
      </Box>

      <Box sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flex: '1'}}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box component="div" sx={{ display: "flex", alignItems: "center", gap: 2}}>
            <Box sx={{ fontWeight: 800, fontSize: "24px", textTransform: 'lowercase' }}>
              {props.numberPart}x
            </Box>
            <Box sx={{ fontSize: "23px" }}>R$ {props.amount}</Box>
          </Box>

          <Box color={props.descriptionColor ? props.descriptionColor : "#AFAFAF"}>{ props.description }</Box>

          {/* {props.hasNotification ?
            (
            ) :
            (
              ""
            )
          } */}

        </Box>
        {isActive ? (
            <Box sx={{ color: "secondary.main"}}>
              <CheckCircle></CheckCircle>
            </Box>
          )
          :
          (
            <Box sx={{ color: "primary.light"}}>
              <CircleOutlined></CircleOutlined>
            </Box>
          )
        }
        
      </Box>
      <Badge strong="🤑 R$ 300,00" text=" de volta no seu Pix na hora" />
    </Button>
  )
}