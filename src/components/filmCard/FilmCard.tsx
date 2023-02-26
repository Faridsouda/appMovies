import React from "react";
import { FilmCardStyled } from "./FilmCardStyled";
import { ImgCardStyled } from "./ImgCardStyled";
import { H3CenterStyled } from "../titres/H3CenterStyled";
import { PDescriptionFilm } from "../titres/PDescriptionCenterFilm";
import { InfoFilm } from "../../modules/homePage/HomePage";
import convertDate from "../../outils/convertDate";
import Rating from "../rating/Rating";

interface Props {
  film: InfoFilm;
}

const FilmCard: React.FC<Props> = ({ film }) => {
  const { id, title, backdrop_path, vote_average, popularity, release_date } =
    film;
  console.log(vote_average);
  return (
    <>
      <FilmCardStyled>
        <ImgCardStyled
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={title}
        />

        <H3CenterStyled>{title}</H3CenterStyled>
        {/* <Rating notation={Math.round(vote_average)} /> */}
        <h4>Score de {Math.round(vote_average)} sur 10</h4>
        <PDescriptionFilm>{convertDate(release_date)}</PDescriptionFilm>
      </FilmCardStyled>
    </>
  );
};

export default FilmCard;
