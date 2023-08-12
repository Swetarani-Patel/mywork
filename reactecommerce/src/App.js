import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import { Provider } from 'react-redux';
import myStore from './redux/store';
import Footer from './Components/Footer';

function App() {
  return (
    <Provider store={myStore}>
    <div className="App">
    <Navbar/>
    <AllRoutes/> 
    <Footer/>
    </div>
    </Provider>
  );
}

export default App;
