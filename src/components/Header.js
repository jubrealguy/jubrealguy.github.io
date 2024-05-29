import logo from '../img/logo.png';

const Header = () => {
    const handleClick = (anchor) => (event) => {
        event.preventDefault();
        const id = anchor;
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            behavior: "smooth",
            top: element.offsetTop,
          });
        }
    }

    return (
        <header className='header'>
            <div className="logo-box">
                <img src={logo} alt='' className='header__logo' />
            </div>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'><a href='#about' className='header__nav-link' onClick={handleClick("about")}>About Me</a></li>
                    <li className='header__nav-item'><a href='#project' className='header__nav-link' onClick={handleClick("project")}>Projects</a></li>
                    <li className='header__nav-item'><a href='#tool' className='header__nav-link' onClick={handleClick("tool")}>Tools</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;