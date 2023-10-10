import '../styles/home.css'
import Header from '../components/header'
import Quotes from '../components/quotes'
import Navigation from '../components/navigation';

function HomePage(){
    return (
        <div className='pageBody'>
            <Header></Header>
            <Quotes></Quotes>
            <Navigation></Navigation>
        </div>
    )
}

export default HomePage;