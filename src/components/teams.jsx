import React from "react";
import "../styles/Ucl.css";

const Teams = () => {
    return (
        <div className="team-main-container">
            <div className="subtitle">Los equipos que ganaron mas veces esta competicion son :</div>
            <div className="team-container">

                <div className="team-card Real">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png" alt="Rm" className="Rm-borde" />
                    <div className="team-info">
                        Real Madrid <br /> 14 Titulos
                    </div>
                </div>

                <div className="team-card Milan">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png" alt="Mi" className="Mi-borde" />
                    <div className="team-info">
                        Milán <br /> 7 Titulos
                    </div>
                </div>

                <div className="team-card Liverpool">
                    <img src="https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/65.png" alt="Lv" className="Lv-borde" />
                    <div className="team-info">
                        Liverpool<br /> 6 Titulos
                    </div>
                </div>

                <div className="team-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/800px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png" alt="Bm" className="Bm-borde" />
                    <div className="team-info">
                        Bayern Múnich<br /> 6 Titulos
                    </div>
                </div>

                <div className="team-card">
                    <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png" alt="Br" className="Br-borde" />
                    <div className="team-info">
                        Barcelona<br /> 5 Titulos
                    </div>
                </div>

                <div className="team-card">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Ajax_Amsterdam.svg/1200px-Ajax_Amsterdam.svg.png" alt="Br" className="Br-borde" />
                    <div className="team-info">
                        Ajax<br /> 4 Titulos
                    </div>
                </div>

                <div className="team-card">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png" alt="Br" className="Br-borde" />
                    <div className="team-info">
                        Manchester United<br /> 3 Titulos
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Teams;