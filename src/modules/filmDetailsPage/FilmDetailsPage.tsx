import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axiosApi from "../../outils/axios/axios";

const FilmDetailsPage = () => {
  const { id } = useParams();
  const [infofilm, setInfoFilm] = useState({});
  const [error, setError] = useState("");

  const afficherId = () => {
    console.log(id);
  };

  const recupereInfoFilm = async () => {
    try {
      const dataFilm = await axiosApi.get(`/3/movie/${id}?language=fr-FR`);
      if (dataFilm.status === 200) {
        setInfoFilm(dataFilm);
        console.log(dataFilm);
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
      <h1 onClick={afficherId}>FilmDetailsPage</h1>
      {infofilm ? <p>Données du film disponibles</p> : <p>{error};</p>}
    </>
  );
};

export default FilmDetailsPage;
