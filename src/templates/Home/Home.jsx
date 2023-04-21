import './home.scss';
import {Header} from '../../organisms/Header/Header';
import {Main} from '../../organisms/Main/Main';
import {Footer} from '../../organisms/Footer/Footer';


function Home () {
    return (
        <div className='Home'>
        <header> <Header/> </header>
        <main> <Main/> </main>
        <footer> <Footer/> </footer>
        </div>
    )
};
export {Home}

