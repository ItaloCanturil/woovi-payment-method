"use client"

import { Box, Button } from "@mui/material";
import { CheckCircle, CircleOutlined } from "@mui/icons-material";
import { useState } from "react";
import Badge from "../Badge";

type StackProps = {
  badge: string,
  hasNotification?: boolean,
  notification?: string,
  description: string,
  descriptionColor?: string,
  amount: string,
  numberPart: string,
}

export default function Accordion(props: StackProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const boo = isActive

    setIsActive(!boo);
  }

  return (
    <Button sx={{ display: "block", border: '2px solid #E5E5E5', borderRadius: 2, minWidth: '429px', minHeight: '137px', p: 2 }}  onClick={handleClick}>
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