import React from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenido a nuestra Consultoría de RR.HH.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Soluciones integrales para la gestión de su capital humano.
        </Typography>
        <Button variant="contained" color="primary" component={RouterLink} to="/contacto" sx={{ mt: 2 }}>
          Contáctenos
        </Button>
      </Box>
    </Container>
  );
}

export default Home;