import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axiosApi from "../../outils/axios/axios";
import { DivStyled } from "../../components/div/DivStyled";
import { H1Styled } from "../../components/titres/H1Styled";
import { PStyled } from "../../components/titres/PStyled";
import { ImgStyled } from "../../components/img/ImgStyled";
import convertDate from "../../outils/convertDate";

interface Film {
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const FilmDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [infofilm, setInfoFilm] = useState<Film>({
    backdrop_path: "",
    original_title: "",
    overview: "",
    poster_path: "",
    release_date: "",
    vote_average: 0,
  });

  const [error, setError] = useState("");

  const afficherId = () => {
    console.log(infofilm);
  };

  const recupereInfoFilm = async () => {
    try {
      const {
        data: {
          backdrop_path,
          original_title,
          overview,
          poster_path,
          release_date,
          vote_average,
        },
      } = await axiosApi.get<Film>(`/3/movie/${id}?language=fr-FR`);
      if (original_title !== undefined) {
        setInfoFilm({
          backdrop_path,
          original_title,
          overview,
          poster_path,
          release_date,
          vote_average,
        });
      } else {
        setError("Impossible de récupérer les informations sur le film.");
      }
    } catch (error) {
      setError(
        "Une erreur est survenue lors de la récupération des informations sur le film."
      );
    }
  };

  useEffect(() => {
    recupereInfoFilm();
  }, []);

  return (
    <>
      <DivStyled
        display="flex"
        bg="CadetBlue"
        color="white"
        width="100%"
        height="100px"
        alignItems="center"
        justifyContent="center"
      >
        <H1Styled fontSize={40}>{infofilm.original_title}</H1Styled>
      </DivStyled>
      <DivStyled
        width="100%"
        display="flex"
        justifyContent="space-around"
        p={20}
      >
        <DivStyled ml={30}>
          <ImgStyled
            src={`https://image.tmdb.org/t/p/w500/${infofilm.backdrop_path}`}
            alt="image du film"
            width={350}
          />
          <DivStyled p={10}>
            <PStyled>{`Date : ${convertDate(infofilm.release_date)}`}</PStyled>
            <PStyled>{`Note : ${infofilm.vote_average}`}</PStyled>
          </DivStyled>
        </DivStyled>
        <DivStyled ml={200} mr={50}>
          <H1Styled fontSize={20}>Synopsis</H1Styled>
          <PStyled fontSize={18} p={10}>
            {infofilm.overview}
          </PStyled>
        </DivStyled>
      </DivStyled>
    </>
  );
};

export default FilmDetailsPage;
