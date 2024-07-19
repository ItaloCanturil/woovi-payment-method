import { Box, Container, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import wooviTheme from './theme';
import { LogoHeader } from './components/molecules/LogoHeader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={wooviTheme}>
              <Container maxWidth="sm" sx={{ fontFamily: "'Nunito', sans-serif"}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <LogoHeader title="João, como você quer pagar?"></LogoHeader>
                  {children}
                </Box>
              </Container>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
    </html>
  );
}
