import '../styles/header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header(){
    const homePageUrl='/'
    return(
        <div>
            <div className='header-style'>
                <div className='logo-container'>
                    <img className='logo-size' src={logo}/>
                    <Link className='header-home-link' to={homePageUrl}>
                        <h3>Writer's Block-Unblock</h3>
                    </Link>
                </div>
                <p className='about-us'>About us</p>
            </div>
            <hr className='line-through'/>
        </div>
    )
}

export default Header