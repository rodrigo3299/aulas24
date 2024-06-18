import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

function Filmes() {

    const [filmes, setFilmes] = useState([])

    const apiKey='api_key=d1bef122d48992b960cc79c7306f5c1b'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    
    useEffect( () => {
        fetch(`${urlBase}popular?${apiKey}`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(erro => console.log(erro))
    },[])
    

    
    
    return (
        <main className="bg-black">
        <>
            <h1>Filmes</h1>
            <div className="listaFilmes grid grid-cols-3 text-white">
            {
                filmes.map(filme => (
                    <div className="card-filme" key={filme.id}>
                        <img src={`${urlImg}${filme.poster_path}`}/>
                        <h1>{filme.title}</h1>
                        <Link to={`${filme.id}`} className="bg-blue-500">Saber mais</Link>
                    </div>
                ))
            }
            </div>
            
        </>
        </main>
    );
    
}

export default Filmes;