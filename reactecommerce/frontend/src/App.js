import './App.css';
import Navbar from './Components/navbar/Navbar';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import { Provider } from 'react-redux';
import myStore from './redux/store';
import Footer from './Components/footer/Footer';

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
