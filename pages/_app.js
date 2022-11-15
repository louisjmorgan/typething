import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../components/Footer/Footer'
import { Nav } from '../components/Nav'
import '../styles/globals.css'
import theme from '../styles/theme'
import "@fontsource/glegoo"
import "@fontsource/roboto"

function MyApp({ Component, pageProps }) {
  return (  <ChakraProvider theme={theme} resetCSS>
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </ChakraProvider>
)
}

export default MyApp
