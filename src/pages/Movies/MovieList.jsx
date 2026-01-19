import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=avengers&apikey=YOUR_API_KEY")
      .then((res) => {
        setMovies(res.data.Search || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {movies.map((m) => (
        <p key={m.imdbID}>{m.Title}</p>
      ))}
    </div>
  );
}
