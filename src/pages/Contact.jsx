import React from 'react';
import { Typography, Container, Box, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="body1" gutterBottom>
          Póngase en contacto con nosotros para obtener más información sobre nuestros servicios. Complete el siguiente formulario y nos comunicaremos con usted a la brevedad.
        </Typography>
        <Box component="form" sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="Nombre"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Correo electrónico"
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Mensaje"
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;