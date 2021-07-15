import './styles.css';
import { ReactComponent as Bolinha4 } from './bolinha4.svg';
import { ReactComponent as Bolinha3 } from './bolinha3.svg';
import { ReactComponent as Bolinha2 } from './bolinha2.svg';
import { ReactComponent as Bolinha1 } from './bolinha1.svg';

import { ReactComponent as Imagem1 } from './imagem1.svg';
import { ReactComponent as Imagem2 } from './imagem2.svg';
import { ReactComponent as Imagem3 } from './imagem3.svg';

import { Link } from 'react-router-dom';


function Comece() {
  return (
    <>
      <div className="container-all">
        <div className='roxo'></div>

        <div className="info">
          <div className="info-aux">
            <div className='info-container'>
              <Bolinha1 className="info-icon"></Bolinha1>
              <h1>30</h1>
              <p>Autorias treinados</p>
            </div>

            <div className='info-container'>
              <Bolinha2 className="info-icon"></Bolinha2>
              <h1>960</h1>
              <p>Modelos de autores</p>
            </div>

            <div className='info-container'>
              <Bolinha3 className="info-icon"></Bolinha3>
              <h1>100%</h1>
              <p>Confiabilidade específica</p>
            </div>

            <div className='info-container'>
              <Bolinha4 className="info-icon"></Bolinha4>
              <h1>85%</h1>
              <p>Confiabilidade geral</p>
            </div>
          </div>
        </div>


        <div className="buttons">
          <div className="buttons-aux">
            <Link to="/treino" className="a">
            
                <Imagem1></Imagem1>
                <h2>Treine o sistema</h2>
                <p> Treinar um autor a partir de um texto.</p>
            </Link>


            <Link to="/treino" className="a">
              <Imagem2></Imagem2>
              <h2>Teste o sistema</h2>
              <p> Testar o sistema em lotes.</p>
            </Link>

            <Link to="/atribuicao" className="a">
              <Imagem3></Imagem3>
              <h2>Atribua autoria</h2>
              <p>Atribuir autoria de um fragmento de texto.</p>
              </Link>

          </div>

        </div>

      </div>

    </>
  );
}

export default Comece;