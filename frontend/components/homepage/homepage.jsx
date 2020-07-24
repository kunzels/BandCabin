import React from 'react';

const HomePage = () => {
    return(
    <div className="homepage-container">
        <div className="homepage">
            <div className="item-container">
                <div className="big-item">
                        <a href="https://bandcabin.herokuapp.com/#/albums/73">
                    <img className="weatherbox" src={window.weatherbox} />
                        </a>
                   {/* <p className="BI-Description">Weatherbox Return, With a New Halfway Home Live Session</p> */}
                </div>
                <div className="small-items">
                        <a href="https://bandcabin.herokuapp.com/#/albums/68" className="gizzLink">
                    <img className="gizzard" src={window.gizzard} />
                        </a>
                        <a href="https://bandcabin.herokuapp.com/#/albums/72" className="manManLink">
                   <img className="gizzard" src={window.manman} />
                        </a>
                        <a href="https://www.grammy.com/musicares/get-help/musicares-coronavirus-relief" className="manManLink">
                   <img className="gizzard" src={window.mf} />
                        </a>
                </div>
            </div>
            <p className="factoid">Fans have paid artists $484 million using BandCabin, and $17.7 million in the last 30 days alone.</p>
        </div>
    </div>
    );
}

export default HomePage;