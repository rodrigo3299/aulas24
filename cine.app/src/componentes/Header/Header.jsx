import Navbar from "../Navbar/Navbar"

function Header() {
    return ( 
        <header className="flex justify-between bg-primary-digolinha text-white p-4">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao CineDigolinha!</h1>
            <Navbar/>
        </header>
     );
}

export default Header;