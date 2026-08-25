import "./NavBar.css";
export default function NavBar(){
    return(
        <nav>
            <span>Seja bem-vindo(a)!</span>
            <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/carro">Carro</a></li>
                <li><a href="/concessionaria">Concessionárias</a></li>
            </ul>
        </nav>

    )
}