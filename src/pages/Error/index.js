import { Link } from 'react-router-dom';

function Error() {
    return(
        <div>
            <h2>Ops, pagina inexistente.</h2>
            <br/>

            <span>Encontramos as seguintes paginas:</span> <br/>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}

export default Error;