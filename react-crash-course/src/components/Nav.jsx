import { Link } from 'react-router-dom';


function Nav () {
    return (
        <nav>
            {/* Link way of doing things: MUST be in the <Router> block */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {/* HREF way of doing things */}
            {/* <a href="/contact">Contact</a> */}
            {/* Users is dynamic */}
            <Link to="/users/nate">Nate</Link>
            <Link to="/users/dude">Dude</Link>

        </nav>
    )
}

export default Nav;