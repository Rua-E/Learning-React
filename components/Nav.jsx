import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/users/rua">Rua</Link>
            <Link to="/users/azeez">Azeez</Link>
            <Link to="/users/ronaldo">Ronaldo</Link>
            <Link to="/users/messi">Messi</Link>
            {/* <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
            {/* <a href='/' > Home</a>
            <a href='/about' > About</a>
            <a href='/contact' > Contact</a> */}
        </nav>
    )
}

export default Nav