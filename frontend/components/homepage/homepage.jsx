import React from 'react';

const HomePage = () => {
    return(
        <div className="item-container">
            <div className="big-item">
                <a href="https://www.youtube.com/watch?v=k3_5ZuKBdKo"><img className="weatherbox" src={window.weatherbox} /></a>
            </div>
            <div className="small-items">
                <img className="gizzard" src={window.gizzard} />
                <img className="gizzard" src={window.manman} />
                <img className="gizzard" src={window.mf} />
            </div>
        </div>
    );
}

export default HomePage;