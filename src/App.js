import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import './App.css';

function App() {
  return (
    <>
    <Header logo="Logo" firstLink="Home" secondLink="About" thirdLink="Contact Us" />
    <Body />
    <Footer owner="jatinbalajisailada" id="@jatinbalajisailada" />
    </>
  );
}

export default App;
