import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

function Filmes() {

    const [filmes, setFilme] = useState([])

    const apiKey= '7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase ='https://api.themoviedb.org/3/movie/' 
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect( () => {
        fetch(`${urlBase}popular?${apiKey}`)
        .then(response => response.json())
        .then(response => setFilme(response.results))
        .catch(erro => console.log(erro))
    },[])
    return ( 
    <>
        
        <div className="listaFilmes grid grid-cols-3">
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
    );
}

export default Filmes;
