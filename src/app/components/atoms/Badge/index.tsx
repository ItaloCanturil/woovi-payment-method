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
      backgroundColor: 'info.main',
      width: '100%',
      marginRight: '20px',
      marginTop: '5px',
      padding: { xs: '6px 18px 6px 10px', md: '10px 18px 10px 10px' },
      fontSize: { xs: '14px', sd: '16px', md: '18px' },
      lineHeight: '20px',
      fontWeight: '500',
      position: 'relative',
      borderRadius: '4px',
      clipPath:
        'polygon(0 0, 100% 0%, 100% 4%, 96% 50%, 100% 96%, 100% 100%, 0 100%)',
      maxWidth: '35ch',
      color: 'white'
    }}>
      <Box component='span' sx={{ fontWeight: "800", paddingRight: "5px"}}>{props.strong}</Box>{ props.text }

    </Box>
  )
}