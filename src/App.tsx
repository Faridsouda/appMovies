import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./modules/homePage/HomePage";
import "./App.css";
import { ContainerStyled } from "./layouts/container/ContainerStyled";

import Header from "./layouts/header/Header";
import FilmDetailsPage from "./modules/filmDetailsPage/FilmDetailsPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ContainerStyled>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filmDetails/:id" element={<FilmDetailsPage />} />
        </Routes>
      </ContainerStyled>
    </BrowserRouter>
  );
};

export default App;
