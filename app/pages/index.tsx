// pages/index.tsx
import Navbar from '../components/NavBar';
import { useAppContext } from '../context/AppContext';
import { Container, Typography } from '@mui/material';

export default function Home() {
  const { user } = useAppContext();
  return (
    <Container>
      <Navbar />
      <Typography variant="h4">Welcome to the Home Page, {user}!</Typography>
    </Container>
  );
}

// Repeat similarly for about.tsx and contact.tsx
