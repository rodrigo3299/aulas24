import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Carrosel2 from "../componentes/Carrosel2/Carrosel2";

function Filmes() {
    const [filmes, setFilmes] = useState([]);

    const apiKey = 'api_key=d1bef122d48992b960cc79c7306f5c1b';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w342/';

    useEffect(() => {
        fetch(`${urlBase}popular?${apiKey}`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(erro => console.log(erro));
    }, []);

    return (
        <main className="bg-black min-h-screen">
            <div className="container mx-auto p-4">
            <Carrosel2 />
                <h1 className="text-white text-4xl mb-8 ">EM CARTAZ</h1>
                <div className="listaFilmes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filmes.map(filme => (
                        <div className="card-filme flex flex-col items-center text-center  p-4 " key={filme.id}>
                            <img src={`${urlImg}${filme.poster_path}`} alt={filme.title} className="w-full h-auto max-w-xs mb-4 " />
                            <h1 className="text-white text-xl mb-2">{filme.title}</h1>
                            <Link to={`${filme.id}`} className="bg-primary-digolinha text-white py-2 px-4 ">Saber mais</Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Filmes;
