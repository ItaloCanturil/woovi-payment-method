/* TODO
  [] CSS para a borda
  [] props de ativação?
*/

import { Box } from "@mui/material";

type BadgeProps = {
  text: string,
  strong: string
}

export default function Badge(props: BadgeProps) {
  
  return (
    <Box sx={{
      width: "100%",
      minHeight: "33px",
      position: "relative",
      backgroundColor: "info.main",
      color: "white",
      textAlign: "left",
      p: "3px",
      borderRadius: 1,
      display: "flex",
      alignItems: "center"
    }}>
      <Box sx={{ fontWeight: "800", paddingRight: "5px"}}>{props.strong}</Box>{ props.text }

      <Box
        sx={{
          position: 'absolute',
          right: -20,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 0,
          height: 0,
          borderRight: '20px solid lightblue',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
        }}
      />
    </Box>
  )
}