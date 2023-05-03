import React from "react";
import Cr7 from "../assets/Images/cr7.jpg";
import Rg9 from "../assets/Images/Rg9.jpg";
import Rv10 from "../assets/Images/Rv10.png";
import "../styles/Ucl.css";

const Players = () => {
    return (
        <>
        <div className="cards-container">

            <div className="player-card">
                <img src={Cr7} alt="CR7"/>
                    <div className="player-info">
                        Cristiano Ronaldo <br/> 141 goles
                    </div>
            </div>
            <div className="player-card">
                <img src="https://hoypyspace.sfo2.cdn.digitaloceanspaces.com/imagenes/2023/04/messi-psg.jpg" alt="Messi"/>
                    <div className="player-info">
                        Lionel Messi <br/> 129 Goles
                    </div>
            </div>
            <div className="player-card">
                <img src="https://imagenes.elpais.com/resizer/tVhuhtWs9NnjkKltCvKD8Me7NgU=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VJKH35KEGDVTCJICIKQ25FYBS4.jpg" alt="Lewandowski"/>
                    <div className="player-info">
                        Robert Lewandowski <br/> 91 Goles
                    </div>
            </div>
            <div className="player-card">
                <img src="https://images2.minutemediacdn.com/image/upload/c_crop,w_2436,h_1370,x_0,y_104/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01gyc7tht712sgdt805y.jpg" alt="Benzema"/>
                    <div className="player-info">
                        Karim Benzema <br/> 90 Goles
                        </div>
            </div>
            <div className="player-card">
                <img src={Rg9} alt="Raúl"/>
                    <div className="player-info">
                        Raúl Gonzales <br/> 71 Goles
                    </div>
            </div>
            <div className="player-card">
                <img src={Rv10} alt="Ruud"/>
                    <div className="player-info">
                        Ruud Van Nistelrooy <br/> 60 Goles
                    </div>
            </div>
            <div className="player-card">
                <img src="https://depor.com/resizer/tL1neOgFArkquKBYAjzEU1y8O7Y=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UOJQ5YKPNFFJPDXYXPOVKZSQIU.jpg" alt="adriy"/>
                    <div className="player-info">
                        Adriy Shevchenko <br/> 59 Goles
                    </div>
            </div>
            <div className="player-card">
                <img src="https://cdn.vox-cdn.com/thumbor/EjnAC-ChWLfJ5-KxOtr8bR0ObyY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24597643/1252000459.jpg" alt="thomas"/>
                    <div className="player-info">
                        Thomas Müller <br/> 53 Goles
                    </div>
            </div>
        </div>
        </>
    )
}

export default Players;