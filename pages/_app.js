import React, { useEffect } from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../components/registerComponent.css'
import '../components/loginComponent.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
  return <Component {...pageProps} />
}

export default MyApp
