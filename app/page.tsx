'use client';
import Navbar from './components/navbar/Navbar';
import Container from './components/Container';

import AppActions from './components/AppActions';
import Listings from './components/listings/Listings';
import Footer from './components/Footer';
import AppProvider from './providers/AppProvider';

export default function Home() {
  return (
    <AppProvider>
      <Navbar />
      <Container>
        <Listings />
      </Container>
      <AppActions />
      <Footer />
    </AppProvider>
  );
}
