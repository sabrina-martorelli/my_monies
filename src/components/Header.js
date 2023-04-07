
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Varela Round',
    ].join(','),
  },});


function Header() {
    return (
      <>
      <ThemeProvider theme={theme}>
        <Typography
        variant='h1'
        align='center'
        pb={15}
        pt={5}
        color='#e9c46a'
        >
        My Monies
      </Typography>
      </ThemeProvider>
    
      </>
      
    );
  }
  
export default Header;
