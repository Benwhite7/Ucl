import React from "react";
import Players from "../components/players";
import Teams from "../components/teams";
import Matchs from "../components/matchs";
import "../styles/Ucl.css";

const MainPage = () => {
    return (
        <>
            <div className="card">
                <h1>La liga de Campeones</h1>
                <p>Uno de los principales torneos del mundo donde participan clubes de diferentes paises europeos como Inglaterra,
                    Alemania ,España , Italia , Francia , Austria , Belgica , Paises Bajos , etc </p>

                <div className="history">
                    <h1>Historia</h1>
                    <div className="history-container">
                        <div className="img-container">
                            <img src="https://static.inter.it/img/381449-1260da171760530479fba406c30590c53df5991b301c7dc5a074887e63876a95.jpg" alt="Imagen del torneo" />
                        </div>
                        <p>
                            La historia de la UEFA Champions League nació como la antigua Copa de Europa en 1955 gracias a
                            la revista francesa LEquipe. El periodista Gabriel Hanot ideó una competición que enfrentase a los clubes
                            campeones de toda Europa para decidir quién era el mejor del continente.La UEFA fue fundada el 15 de junio de
                            1954
                            en Basilea, Suiza, después de conversaciones entre las asociaciones de fútbol francés, italiano y belga. La
                            sede
                            estaba en París hasta 1959, cuando la organización se trasladó a Berna. Henri Delaunay fue el primer
                            Secretario
                            General y Ebbe Schwartz el presidente.
                        </p>
                    </div>
                </div>
                <h2>Los principales goleadores de esta competicion son :</h2>
            </div>
            <Players/>
            <Teams/>
            <Matchs/>
        </>
    );
}

export default MainPage;