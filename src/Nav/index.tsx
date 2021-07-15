import './styles.css';
import { ReactComponent as Logo } from './../logo.svg'
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Portal } from './portal.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as YouTube } from './youtube.svg';


function Footer() {
    return (
        <>
            <nav>
                <div className="nav-textos">
                    <a href="">Sobre Nós</a>
                    <a href="">O Projeto</a>
                    <a href="">Como usar</a>
                </div>

                <div className="nav-logo">< Logo /></div>

                <div className="nav-icons">
                    <a href=""><Instagram /></a>
                    <a href=""><Portal /></a>
                    <a href=""><Twitter /></a>
                    <a href=""><YouTube /></a>
                </div>
            </nav>
        </>
    );
}

export default Footer;