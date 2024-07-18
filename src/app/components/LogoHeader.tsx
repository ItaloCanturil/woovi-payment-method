import { Box } from "@mui/material";

type HeaderProps = {
  title: string
}

export function LogoHeader(props: HeaderProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center"}}>
      <Box sx={{ width: "120px" }}>
        <Box sx={{ width: "100%", height: "auto"}} component="img" src="/woovi-logo.png"></Box>
      </Box>

      <Box component="h1">{ props.title }</Box>
    </Box>
  )
}