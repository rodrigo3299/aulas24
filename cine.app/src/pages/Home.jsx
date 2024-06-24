import React from 'react';
import data from '../../artigos.json';
import Carrosel from '../componentes/Carrosel/Carrosel.jsx';

function Home() {
  console.log(data);

  return (
    <main className="bg-black min-h-screen">
      <div className="container mx-auto p-4">
        <Carrosel />
        <h1 className="text-white text-4xl mb-8">FILMES EM DESTAQUE</h1>
        <div className='grid grid-cols-3 font-bold text-xl text-white gap-4'>
          {data.map(filme => (
            <div className='card flex flex-col items-center text-center p-4' key={filme.title}>
              <h1 className="mb-2">{filme.title}</h1>
              <img src={filme.image} alt={filme.title} className="w-full h-auto max-w-xs mb-4" />
              <div className='tag mb-2'>
                {filme.tags.map(tag => (
                  <span key={tag} className='text-red-900'> {tag}</span>
                ))}
              </div>
              <div className='text'>
                {filme.text.map(texto => (
                  <p key={texto}> {texto}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
