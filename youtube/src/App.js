import Header from "./Components/header/Header";
import HomeScreen from "./Components/screens/homeScreen/HomeScreen";
import Sidebar from "./Components/sidebar/Sidebar";
import {Container} from 'react-bootstrap';
import './app.scss'
import { useState } from "react";


function App() {
  const[showsideBar, setToggleSideBar] = useState(false);

  const handletoogle = ()=>{
    setToggleSideBar(value => !value)
  }


  return (
    <>
       <Header handletoogle={handletoogle}/>
       <div className="app__container border border-info">
       <Sidebar showsideBar={showsideBar} handletoogle={handletoogle}/>
           <Container fluid className="app__main border border-warning">
            <HomeScreen/>
           </Container>
       </div>

    </>
  )
}

export default App;
