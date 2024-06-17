import { useState } from "react"

function Filmes() {

    const [filmes, setFilmes] = useState([])

    const apiKey= '7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase ='https://api.themoviedb.org/3/movie/' 
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    fetch(`${urlBase}popular?api_key=${apiKey}`)
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(erro => console.log(erro))
    return ( 
    <>
        <h1>Filmes</h1>
        {
            filmes.map(filme => (
                <div className="card-filme" key={filme.id}>
                <h1>{filme.title}</h1>
                    <img src={`${urlImg}${filme.poster_path}`}/>
                    <p>{filme.overview}</p>
                    </div>
            ))
        }
    
    </> );
}

export default Filmes;
