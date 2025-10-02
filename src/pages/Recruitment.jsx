import React from 'react';
import { Typography, Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

function Recruitment() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reclutamiento y Selección de Personal
        </Typography>
        <Typography variant="body1" gutterBottom>
          Nos especializamos en la búsqueda y selección de talento para una amplia gama de perfiles, garantizando que encuentre a los candidatos ideales para su organización.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
          Nuestras áreas de especialización incluyen:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <PeopleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Personal Operativo" secondary="Búsqueda de personal para puestos de nivel inicial, producción y soporte." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocalShippingIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Flotillas de Transporte" secondary="Reclutamiento de conductores, personal de logística y gestión de flotas." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BusinessCenterIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Perfiles Ejecutivos y Gerenciales" secondary="Selección de líderes y gerentes para puestos de alta dirección." />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default Recruitment;