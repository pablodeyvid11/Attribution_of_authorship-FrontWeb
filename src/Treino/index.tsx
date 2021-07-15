import './styles.css'
import {ReactComponent as Icon} from './doc-new.svg';

function Treino() {
    return (
        <>
            <div className='roxo'></div>
            <div className='container'>
                <h1>Treinar autor no Who Author</h1>
                <p>Preencha os dados a seguir para cadastrar um autor no WhoAuthor.</p>

                <div className='files'>
                    <div className='file-container'>
                        <div className='file-div'>

                            <label htmlFor="arquivo1">
                                Escolher Arquivo
                                <input type="file" id="arquivo1" hidden />
                            </label>

                            <div className="file-info">
                                <h2>215 Kbs</h2>
                                <p>Tamanho do texto base colocado</p>
                            </div>
                        </div>

                        <div className='file-div'>

                            <label htmlFor="arquivo2">
                                Escolher Arquivo
                                <input type="file" id="arquivo2" hidden />
                            </label>

                            <div className="file-info">
                                <h2>215 Kbs</h2>
                                <p>Tamanho do texto base colocado</p>
                            </div>
                        </div>

                        <div className='file-div'>

                            <label htmlFor="arquivo3">
                                Escolher Arquivo
                                <input type="file" id="arquivo3" hidden />
                            </label>

                            <div className="file-info">
                                <h2>215 Kbs</h2>
                                <p>Tamanho do texto base colocado</p>
                            </div>
                        </div>

                        <div className='file-div'>

                            <label htmlFor="arquivo4">
                                Escolher Arquivo
                                <input type="file" id="arquivo4" hidden />
                            </label>

                            <div className="file-info">
                                <h2>215 Kbs</h2>
                                <p>Tamanho do texto base colocado</p>
                            </div>
                        </div>


                    </div>


                    <div className='file-aux'>
                    <h3>Imagem do autor</h3>
                        <div className='file-image'>
                            
                            <label htmlFor="file-image-author">
                                <Icon></Icon>
                                <p>Arraste para fazer upload da imagem do autor ou clique para fazer upload.</p>
                                <input type="file" name="" id="file-image-author" hidden />
                            </label>
                        </div>

                        <h3>Informações adicionais</h3>
                        <p className="info">
                            O autor será treinado em todos os contextos padrões (2, 3, 4 e 5) e nos tamanhos de arquivos 48KB e 200KB. Certifique-se que o texto informado seja do tamanho adequado.
                        </p>
                    </div>

                </div>

                <button>Realizar treinamento</button>
            </div>

        </>
    );
}

export default Treino;