import './styles.css';
import { ReactComponent as Card } from './card.svg';
import { ReactComponent as PictureClara} from './pictureClara.svg';
import { ReactComponent as PicturePablo} from './picturePablo.svg';
import { ReactComponent as PictureElenilson} from './pictureElenilson.svg';
import { ReactComponent as PictureIrlan} from './pictureIrlan.svg';
import { ReactComponent as PictureMagno} from './pictureMagno.svg';

import Ifrn from "./ifrn.png";

function Sobre() {
    return (
        <>
            <div className="container-all">

                <h1>Quem somos nós?</h1>
                <p>Conheça um pouco sobre as pessoas por trás do Who Author</p>

                <div className="colum">
                    <div className="container">
                        <div className="cardi">
                            <div className="card-text">
                                <h1>Orientação</h1>
                                <p>BLABLABLABLABLABLA</p>
                            </div>
                            <Card className="z"></Card>
                        </div>

                        <div className="info-sobre">
                            <PictureIrlan/>
                            <h1>Irlan Arley</h1>
                            <p>bla bla bla</p>
                        </div>
                    </div>


                    <div className="container">
                        <div className="cardi">
                            <div className="card-text">
                                <h1>Orientação</h1>
                                <p>BLABLABLABLABLABLA</p>
                            </div>
                            <Card className="z"></Card>
                        </div>

                        <div className="info-sobre">
                            <PictureElenilson/>
                            <h1>Elenilson Vieira</h1>
                            <p>bla bla bla</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="cardi">
                            <div className="card-text">
                                <h1>Coorientação</h1>
                                <p>BLABLABLABLABLABLA</p>
                            </div>
                            <Card className="z"></Card>
                        </div>

                        <div className="info-sobre">
                            <PictureMagno/>
                            <h1>Francisco Magno</h1>
                            <p>bla bla bla</p>
                        </div>
                    </div>
                
                    <div className="container">
                        <div className="cardi">
                            <div className="card-text">
                                <h1>Orientandos</h1>
                                <p>BLABLABLABLABLABLA</p>
                            </div>
                            <Card className="z"></Card>
                        </div>

                        <div className="info-sobre">
                            <PictureClara/>
                            <h1>Clara Yasmin</h1>
                            <p>Aluna de informática no IFRN <i>campus </i> Pau dos Ferros</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="cardi">
                            <div className="card-text">
                                <h1>Orientandos</h1>
                                <p>BLABLABLABLABLABLA</p>
                            </div>
                            <Card className="z"></Card>
                        </div>

                        <div className="info-sobre">
                            <PicturePablo/>
                            <h1>Pablo Deyvid</h1>
                            <p>Aluno de informática no IFRN <i>campus </i> Pau dos Ferros</p>
                        </div>
                    </div>

                </div>
                <img src={Ifrn} alt=""/>
            </div>
            

        </>
    );
}

export default Sobre;