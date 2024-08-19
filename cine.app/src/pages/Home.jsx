import React, { useState } from 'react';
import data from '../../artigos.json'; // Certifique-se de que o caminho está correto
import Carrosel from '../componentes/Carrosel/Carrosel.jsx';

function Home() {
  // Estado para armazenar o termo de pesquisa
  const [searchTerm, setSearchTerm] = useState('');

  // Função para lidar com mudanças no campo de pesquisa
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtra os filmes com base no termo de pesquisa
  const filteredFilmes = data.filter(filme => 
    filme.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Search Term:', searchTerm);
  console.log('Filtered Filmes:', filteredFilmes);

  return (
    <main className="bg-black min-h-screen">
      <div className="container mx-auto p-4">
        <Carrosel />
        <h1 className="text-white text-4xl mb-8">FILMES EM DESTAQUE</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar filmes..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div className='grid grid-cols-3 font-bold text-xl text-white gap-4'>
          {filteredFilmes.length > 0 ? (
            filteredFilmes.map(filme => (
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
            ))
          ) : (
            <p className="text-gray-500">Nenhum filme encontrado.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
