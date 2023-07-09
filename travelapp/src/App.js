// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Main/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;

