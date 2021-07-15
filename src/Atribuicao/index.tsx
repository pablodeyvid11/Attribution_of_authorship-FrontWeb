import './styles.css';
import { ReactComponent as Icon } from './icon.svg';
function Atribuicao() {
    return (
        <>
           <div className="all">
                <div className="roxo"></div>

                <div className="container">
                    <h1>Atribuir autoria</h1>
                    <p>Cole o texto de autoria desconhecida no campo reservado abaixo e depois aperte o botão “Atribuir”. Caso haja alguma dúvida de como usar o WhoAuthor é só acessar a página <i><b><a href="">Como usar.</a></b></i> </p>
                    <textarea name="atribuicao" id="" placeholder="Cole seu texto aqui!"></textarea>
                    <br />
                    <button>Atribuir <Icon className="icon"/></button>
                </div>
           </div>
        </>
    );
}

export default Atribuicao;