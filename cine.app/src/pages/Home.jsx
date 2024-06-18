import data from '../../artigos.json'

function Home() {
  console.log(data)
  
    return (  
      <main className="bg-black">
        <>
      
         <div className='grid grid-cols-3 font-bold text-xl  text-white'>

           {data.map(filme => (
              <div className='card' key={filme.title}>
                <h1>{filme.title}</h1>
                <img src={filme.image} alt={filme.title}/>
                <div className='tag'>
                 {filme.tags.map(tag =>(
                  <span key={tag}className='text-red-900'> {tag}</span>
                 ))}
              </div>
              <div className='text'>
                 {filme.text.map(texto =>(
                  <p key={texto}> {texto}</p>
                 ))}
              </div>
          </div>

            ))
          }
          </div>
      </>
      </main>
    );
}

export default Home ;
