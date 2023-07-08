'use client';
import Navbar from './components/navbar/Navbar';
import Container from './components/Container';

import AppActions from './components/AppActions';
import Listings from './components/listings/Listings';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Listings />
      </Container>
      <AppActions />
      <Footer />
    </>
  );
}
