import axios from "axios";
import { token } from "./../../keys/keys";
import { api_key } from "./../../keys/keys";
//
const axiosApi = axios.create({
  baseURL: "https://api.themoviedb.org",

  params: {
    api_key: api_key,
  },
});

axiosApi.interceptors.request.use((config) => {
  const filmToken = token;
  if (filmToken) {
    config.headers["Authorization"] = `Bearer ${filmToken}`;
  }
  return config;
});

// Fonction de test de connexion à l'API
async function testConnection() {
  try {
    // Effectuer une requête GET à l'URL de l'API
    const response = await axiosApi.get("/3/movie/551?language=fr-FR");

    // Vérifier si la réponse est correcte
    if (response.status === 200) {
      console.log("Connexion à l'API réussie !");
    } else {
      console.error("La connexion à l'API a échoué.");
    }
  } catch (error) {
    console.error("La connexion à l'API a échoué.", error);
  }
}

// Appeler la fonction de test de connexion
testConnection();

export default axiosApi;
