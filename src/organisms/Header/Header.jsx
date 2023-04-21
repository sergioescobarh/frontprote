import {Link} from 'react-router-dom'


function Header () {
    
    return (
        <>
        <Link to="/">Home</Link>
        <Link to="/yp">Busca un producto</Link>
        </>
    )
};
export {Header};