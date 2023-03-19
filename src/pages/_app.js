import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { StateContextProvider } from '../context/StateContext';

export default function App({ Component, pageProps }) {
  return (
    <StateContextProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </StateContextProvider>
  );
}
