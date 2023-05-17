import logo from '../img/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <div className="logo-box">
                <img src={logo} alt='' className='header__logo' />
            </div>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'><a href='##' className='header__nav-link'>About Me</a></li>
                    <li className='header__nav-item'><a href='##' className='header__nav-link'>Projects</a></li>
                    <li className='header__nav-item'><a href='##' className='header__nav-link'>Tools</a></li>
                    <li className='header__nav-item'><a href='##' className='header__nav-link'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;