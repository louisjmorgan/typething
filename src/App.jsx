import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import '@fontsource/glegoo';
import '@fontsource/roboto';
import Footer from 'Components/Footer/Footer';
import { Nav } from './Components/Nav';
import Home from './Pages/Home';
import theme from './theme';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
