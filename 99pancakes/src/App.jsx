import "./App.css";
import Header from "./Header/Header";
import  Footer  from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
