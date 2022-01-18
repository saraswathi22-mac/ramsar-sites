import { useContext } from 'react';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';
import { ThemeContext } from "../../App";
import { AppTheme } from "../../utils/AppTheme";
import ThemeToggle from "../../utils/ThemeToggle";

const pages = ['Home', 'About', 'Portfolio', 'Contact'];

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const headerStyle: AppTheme = {
    dark: {
      backgroundColor: 'black',
      color: 'white',
    },
    light: {
      backgroundColor: '#e0e0e0',
      color: 'black',
    },
    common: {
      transition: 'all 1s ease',
    }
  };

  const themeStyle = {
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
    ...headerStyle.common,
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="header" style={themeStyle}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            MyPortfolio
          </Typography>
          <Box sx={{ flexGrow: 1 }} style={{display: 'flex'}}>
            {pages.map((page) => (
              <Typography
                key={page}
                sx={{ mr: 2, display: 'block' }}
              >
                {page}
              </Typography>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;