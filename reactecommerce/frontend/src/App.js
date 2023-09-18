import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import { Provider } from "react-redux";
import myStore from "./redux/store";
import Footer from "./Components/footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const path = ["/forgotpassword", "/resetpassword"];
  const isPath = path.includes(location.pathname);
  return (
    <Provider store={myStore}>
      <div className="App">
        {!isPath && <Navbar />}

        <AllRoutes />
        {!isPath && <Footer />}
      </div>
    </Provider>
  );
}

export default App;
