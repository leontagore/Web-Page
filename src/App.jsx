import React from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, ThemeProvider, CssBaseline, Box } from '@mui/material';
import Home from './pages/Home';
import SocioeconomicStudies from './pages/SocioeconomicStudies';
import Recruitment from './pages/Recruitment';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" component={RouterLink} to="/">Inicio</Button>
              <Button color="inherit" component={RouterLink} to="/estudios-socioeconomicos">Estudios Socioeconómicos</Button>
              <Button color="inherit" component={RouterLink} to="/reclutamiento">Reclutamiento</Button>
              <Button color="inherit" component={RouterLink} to="/contacto">Contacto</Button>
            </Toolbar>
          </AppBar>
          <Container component="main" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/estudios-socioeconomicos" element={<SocioeconomicStudies />} />
              <Route path="/reclutamiento" element={<Recruitment />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;