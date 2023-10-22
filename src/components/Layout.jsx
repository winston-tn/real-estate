import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Restateal</title>
    </Head>
    <Box maxWidth="container.xl" m="auto">
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
)

export default Layout;
