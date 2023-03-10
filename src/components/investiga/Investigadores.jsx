import React from "react";
import corro from "../../img/corro.png";
import bruque from "../../img/bruque.png";
import salgado from "../../img/salgado.png";
import pelorosso from "../../img/pelorosso.png";
import almeida from "../../img/almeida.png";
import "../../components/investiga/investigadores.css";

const Investigadores = () => {
    return (
    <div className="container mb-5">
        <h2 className="mt-5">Investigadores responsables</h2>
        <hr />
        <div className="all">
            <a className="containerLink" data-bs-toggle="collapse" href="#cvBruque">
                <div className="containerInvestigadores">
                    <div className="containerImgInv">
                        <img className="imgInv" src={bruque} alt="foto" />
                    </div>
                    <p>David Bruque</p>
                </div>
            </a>
            <a className="containerLink" data-bs-toggle="collapse" href="#cvCorro">
                <div className="containerInvestigadores">
                    <div className="containerImgInv">
                        <img className="imgInv" src={corro} alt="foto" />
                    </div>
                    <p>Guillermo Corró</p>
                </div>
            </a>
            <a className="containerLink" data-bs-toggle="collapse" href="#cvSalgado">
                <div className="containerInvestigadores">
                    <div className="containerImgInv">
                        <img className="imgInv" src={salgado} alt="foto" />
                    </div>
                    <p>Maria Victoria Salgado</p>
                </div>
            </a>
            <a className="containerLink" data-bs-toggle="collapse" href="#cvPelorosso">
                <div className="containerInvestigadores">
                    <div className="containerImgInv">
                        <img className="imgInv" src={pelorosso} alt="foto" />
                    </div>
                    <p>Facundo Pelorosso</p>
                </div>
            </a>
            <a className="containerLink" data-bs-toggle="collapse" href="#cvAlmeida">
                <div className="containerInvestigadores">
                    <div className="containerImgInv">
                        <img className="imgInv" src={almeida} alt="foto" />
                    </div>
                    <p>Virna Almeida</p>
                </div>
            </a>
        </div>
        {/* <div>
            <div className="collapse" id="cvBruque">
                <iframe src="assets/files/cv/cvBruque.pdf#toolbar=0"
                type="application/pdf"
                title="cvBruque"
                width="80%"
                height="400px"/>
            </div>
            <div className="collapse" id="cvCorro">
                <iframe src="assets/files/cv/cvCorro.pdf#toolbar=0"
                type="application/pdf"
                title="cvCorro"
                width="80%"
                height="400px"/>
            </div>
            <div className="collapse" id="cvSalgado">
                <iframe src="assets/files/cv/cvSalgado.pdf#toolbar=0"
                type="application/pdf"
                title="cvSalgado"
                width="80%"
                height="400px"/>
            </div>
            <div className="collapse" id="cvPelorosso">
                <iframe  src="assets/files/cv/cvPelorosso.pdf#toolbar=0"
                type="application/pdf"
                title="cvPelorosso"
                width="80%"
                height="400px" />
            </div>
            <div className="collapse" id="cvAlmeida">
                <iframe src="assets/files/cv/cvAlmeida.pdf#toolbar=0"
                type="application/pdf"
                title="cvAlmeida"
                width="80%"
                height="400px"/>
            </div>
    </div> */}
    </div>
    );
};

export default Investigadores