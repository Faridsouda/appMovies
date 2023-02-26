import React, { useEffect, useState } from "react";
import { DivBackgroundStyled } from "../../components/divBackground/divBackgroundStyled";
import FilmCard from "../../components/filmCard/FilmCard";
import { FilmsListStyled } from "../../components/list/FilmsListStyled";
import axiosApi from "../../outils/axios/axios";

export interface InfoFilm {
  id: number;
  backdrop_path: string;
  title: string;
  vote_average: number;
  popularity: number;
  release_date: string;
}

const HomePage: React.FC = () => {
  const [top5films, setTop5Films] = useState<InfoFilm[]>([]);

  useEffect(() => {
    const donnee = axiosApi
      .get("https://api.themoviedb.org/3/movie/popular?language=fr-FR", {
        params: {
          page: 1,
        },
      })
      .then((reponse) => {
        console.log(reponse.data);
        setTop5Films(reponse.data.results.slice(0, 5));
      })

      .catch((erreur) => console.log(erreur));

    console.log(top5films);
  }, []);

  return (
    <>
      <DivBackgroundStyled>
        <h2>Top 5 des films </h2>
        <FilmsListStyled>
          {top5films.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </FilmsListStyled>
      </DivBackgroundStyled>
    </>
  );
};

export default HomePage;
