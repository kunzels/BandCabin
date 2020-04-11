import React from 'react';

const HomePage = () => {
    return(
        <div className="homepage">
            <div className="item-container">
                <div className="big-item">
                    <a href="https://www.youtube.com/watch?v=k3_5ZuKBdKo"><img className="weatherbox" src={window.weatherbox} /></a>
                   {/* <p className="BI-Description">Weatherbox Return, With a New Halfway Home Live Session</p> */}
                </div>
                <div className="small-items">
                   <img className="gizzard" src={window.gizzard} />
                   <img className="gizzard" src={window.manman} />
                   <img className="gizzard" src={window.mf} />
                </div>
            </div>
            <p className="factoid">Fans have paid artists $484 million using Bandcamp, and $17.7 million in the last 30 days alone.</p>
        </div>
    );
}

export default HomePage;