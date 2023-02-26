import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./modules/homePage/HomePage";
import "./App.css";
import { ContainerStyled } from "./layouts/container/ContainerStyled";

import Header from "./layouts/header/Header";

const App : React.FC = () => {
  return (
    <BrowserRouter>
      <ContainerStyled>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ContainerStyled>
    </BrowserRouter>
  );
}

export default App;
