import './styles.css';
import {ReactComponent as Fundo} from './fundo.svg';
import {ReactComponent as Seta} from './seta.svg';
import { Link } from 'react-router-dom';


function Startpage() {
    return (
        <>
            <div className="container-text">
                
                <div className="container-text-aux">
                    <h1><b> Inteligência <br /> Artificial e <br />Educação </b></h1>
                    <p>WhoAuthor: Atribuidor de autoria de textos literários brasileiros utilizando inteligência computacional com base no PPM-C</p>
                    <Link to="/comece"><a>Começar agora <Seta className="seta"></Seta></a></Link>
                    
                </div>
                <div className="fundo"> <Fundo></Fundo></div>
               
               
            </div>
           
        </>
    );
}

export default Startpage;