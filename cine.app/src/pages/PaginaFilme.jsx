import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PaginaFilme() {
  const { id } = useParams();

  const [filme, setFilme] = useState(null);

  const apiKey = 'api_key=d1bef122d48992b960cc79c7306f5c1b';
  const urlBase = 'https://api.themoviedb.org/3/movie/';
  const urlImg = 'https://image.tmdb.org/t/p/w400/';

  useEffect(() => {
    fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
      .then(response => response.json())
      .then(response => setFilme(response))
      .catch(erro => console.log(erro));
  }, [id]);

  if (!filme) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <img src={`${urlImg}${filme.backdrop_path}`} alt={filme.title} className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0" />
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold">{filme.title}</h1>
          <p className="text-lg">{filme.overview}</p>
        </div>
      </div>
    </main>
  );
}
export default PaginaFilme;