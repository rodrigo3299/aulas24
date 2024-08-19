import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav >
            <ul className='flex gap-3 '>
                <li><Link to ="/"> Home</Link></li>
                <li><Link to ="filmes"> Filmes </Link></li>
                <li><Link to ="favoritos"> Contato </Link></li>
                <li><Link to ="sobre"> Sobre </Link></li>
                <li><Link to ="noticias"> Notícias </Link></li>
            </ul>
        </nav>
     );
}

export default Navbar
