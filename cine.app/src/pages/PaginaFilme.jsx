import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


function PaginaFilme(){

    const {id} = useParams();

    const [filme, setFilme] = useState([])

    const apiKey='api_key=d1bef122d48992b960cc79c7306f5c1b'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w400/'

    useEffect( () => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(erro => console.log(erro))
    },[])

    return(
        <main className="bg-black text-white ">
        <>
            <img src= {`${urlImg}${filme.backdrop_path}`} alt="" />
            <h1>{filme.title}</h1>
            <p>{filme.overview}</p>
        </>
        
        </main>
    )
}

export default PaginaFilme