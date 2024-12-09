import "../globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

type AppProps = {
    Component: React.ComponentType;
    pageProps: any;
  };
  
  function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
      AOS.init();
    }, []);
    return <Component {...pageProps} />;
  }
  
  export default App;
