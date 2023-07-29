import Header from "./Components/header/Header";
import HomeScreen from "./Components/screens/homeScreen/HomeScreen";
import Sidebar from "./Components/sidebar/Sidebar";
import {Container} from 'react-bootstrap';
import './app.scss'
import { useState } from "react";
 
import LoginScreen from "./Components/LoginScreen/LoginScreen";


function App() {
  const[showsideBar, setToggleSideBar] = useState(false);

  const handletoogle = ()=>{
    setToggleSideBar(value => !value)
  }


  return (
    <>
       {/* <Header handletoogle={handletoogle}/>
       <div className="app__container border ">
       <Sidebar showsideBar={showsideBar} handletoogle={handletoogle}/>
           <Container fluid className="app__main border">
            <HomeScreen/>
           </Container>
       </div> */}
       <LoginScreen/>
       

    </>
  )
}

export default App;
