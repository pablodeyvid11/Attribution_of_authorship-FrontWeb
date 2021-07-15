import './styles.css';
import { ReactComponent as Logo } from './../logo.svg';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Portal } from './portal.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as YouTube } from './youtube.svg';

function Footer() {
    return (
        <footer className="main-footer">
            <Logo className="Logo" />

            <div className="div-links">
                <a href="#">Sobre nós</a>
                <a href="#">O projeto</a>
                <a href="#">Contato</a>
                <a href="#">Ajuda</a>
                <a href="#">Privacy Policy</a>
            </div>

            <div>
                <hr />
                <div className="last-links">
                    <div className="last-links-PORRA">
                        <div className="direitos-reservados">© 2021 WhoAuthor. Todos os direitos reservados.</div>
                        <div className="social">
                            <div className ="social-aux">
                                <a href=""><Instagram /></a>
                                <a href=""><Portal /></a>
                                <a href=""><Twitter /></a>
                                <a href=""><YouTube /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;