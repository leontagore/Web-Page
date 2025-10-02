import React from 'react';
import { Typography, Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function SocioeconomicStudies() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Estudios Socioeconómicos
        </Typography>
        <Typography variant="body1" gutterBottom>
          Realizamos estudios socioeconómicos completos y confiables para evaluar a sus candidatos y empleados. Nuestro proceso de investigación exhaustivo y la presentación de informes detallados le proporcionan la información que necesita para tomar decisiones de contratación informadas.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
          Nuestros estudios incluyen:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Verificación de antecedentes personales y familiares" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Investigación del historial laboral" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Evaluación de la situación económica y de vivienda" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Referencias personales y profesionales" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default SocioeconomicStudies;