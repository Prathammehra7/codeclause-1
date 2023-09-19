import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {MdOutlineClose} from 'react-icons/md'
import Logo from '../Images/logo.jpg'
import { links } from '../data'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Navbar.css'

const Navbar = () => {
   const [isNavShowing, setIsNavShowing] = useState(false);
   
    return (
        <nav>
            <div className="container nav__container">
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Nav logo" />
                </Link>
                <ul className=  {` nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}` }   >
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}
                                    onClick={() => setIsNavShowing (prev => !prev)}>  {name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing (prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose/> : <GiHamburgerMenu/>
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar