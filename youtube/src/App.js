import Header from "./Components/header/Header";
import HomeScreen from "./Components/screens/homeScreen/HomeScreen";
import Sidebar from "./Components/sidebar/Sidebar";
import {Container} from 'react-bootstrap';
import './app.scss'


function App() {
  return (
    <>
       <Header/>
       <div className="app__container border border-info">
       <Sidebar/>
           <Container fluid className="app__main border border-warning">
            <HomeScreen/>
           </Container>
       </div>

    </>
  )
}

export default App;
