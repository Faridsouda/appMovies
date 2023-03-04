import React from "react";
import { Link } from "react-router-dom";
import { DivStyled } from "../../components/div/DivStyled";

const NavBar = () => {
  return (
    <>
      <DivStyled width="100%" height="auto" bg="gray">
        <Link to="/">Accueil</Link>
      </DivStyled>
    </>
  );
};

export default NavBar;
