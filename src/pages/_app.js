import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import {SessionProvider} from 'next-auth/react'
import { StateContextProvider } from '../context/StateContext';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
    <StateContextProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </StateContextProvider>
    </SessionProvider>
  );
}
