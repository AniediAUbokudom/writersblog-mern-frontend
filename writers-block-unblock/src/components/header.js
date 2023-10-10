import '../styles/header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header(){
    const homePageUrl='/'
    const aboutUrl='/about'
    return(
        <div>
            <div className='header-style'>
                <div className='logo-container'>
                    <img className='logo-size' src={logo}/>
                    <Link className='header-home-link' to={homePageUrl}>
                        <h2 className="pageName">Writer's Block-Unblock</h2>
                    </Link>
                </div>
                <Link className='header-about-link' to={aboutUrl}>
                <h3 className='about-us'>About Page</h3>
                </Link>
            </div>
            <hr className='line-through'/>
        </div>
    )
}

export default Header