import './Header.css'

function Header() {
    return (
        <header className='navbar-custom'>
            <div className='navbar-title'>ExpeReact</div>
            <nav>
                <ul className='navbar-items'>
                    <li>Home</li>
                    <li>Contato</li>
                    <li>Sobre nós</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header