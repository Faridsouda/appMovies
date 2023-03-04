import React from "react";
import NavBar from "../navBar/NavBar";
import { HeaderStyled } from "./HeaderStyled";

const Header: React.FC = () => {
  return (
    <>
      <HeaderStyled>
        <img
          src="/src/assets/logo.PNG"
          alt="Le logo de la source des données"
          width={500}
        />
        <h3>Les sources de données proviennent du site "themoviedb.org"</h3>
        <NavBar />
      </HeaderStyled>
    </>
  );
};

export default Header;
