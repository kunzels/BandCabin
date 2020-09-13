import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            albums: [],
            selected: "all",
            first: 0,
            second: 4
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
    }

    componentDidMount (){
        this.props.fetchAlbums()
        .then(albums => {this.setState({albums: Object.values(albums.albums)})})
    }

    handleNext(){
        if(this.state.second + 4 <= this.state.albums.length){
        this.setState({first: this.state.first += 4})
        this.setState({second: this.state.second += 4})
        }
    }

    handlePrevious() {
        if (this.state.first - 4 >= 0) {
            this.setState({ first: this.state.first -= 4 })
            this.setState({ second: this.state.second -= 4 })
        }
    }

    render(){
        const albumTitles = this.state.albums.slice(this.state.first, this.state.second).map(album => {
            return <div key={album.id}>
                    <Link to={`/albums/${album.id}`} className="album-link">
                        <img className="homepage-profile-picture" src={album.photoURL} alt="profile-picture" />
                        <div className="homepage-album-title">{album.title}</div>
                        <div className="homepage-album-artist">{album.artistName}</div>
                        </Link>
                        
                    </div>
        })
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
            <div className="album-display-filter">
                <div className="homepage-filters-all">all</div>
                    <div className="homepage-filters">electronic</div>
                    <div className="homepage-filters">rock</div>
                    <div className="homepage-filters">metal</div>
                    <div className="homepage-filters">alternative</div>
                    <div className="homepage-filters">hip-hop/rap</div>
                    <div className="homepage-filters">experimental</div>
                    <div className="homepage-filters">punk</div>
                    <div className="homepage-filters">pop</div>
                    <div className="homepage-filters">jazz</div>
                    <div className="homepage-filters">acoustic</div>
                    <div className="homepage-filters">folk</div>
            </div>
            <div className="homepage-wrapper">
                {albumTitles}
                <div onClick={this.handlePrevious}>Previous</div>
                <div onClick={this.handleNext}>Next</div>
            </div>
        </div>
    </div>
    )
}
}


export default Homepage;