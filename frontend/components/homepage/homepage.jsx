import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            albums: [],
            selected: "All",
            first: 0,
            second: 4
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.updateSelected = this.updateSelected.bind(this);
    }

    updateSelected(e){
        let text = e.currentTarget.innerText
        this.setState({ selected: text.charAt(0).toUpperCase() + text.slice(1), first: 0, second:4})
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
        let filteredAlbums;
        if(this.state.selected !== "All"){
            filteredAlbums = this.state.albums.filter(album => album.genre.includes(this.state.selected.charAt(0).toUpperCase() + this.state.selected.slice(1)));
        } else{
            filteredAlbums = this.state.albums;
        }
        let albumTitles;
        if(filteredAlbums.length === 0){
            albumTitles = <div>We could use more seeds, though I assure you this works</div>
        } else{
            albumTitles = filteredAlbums.slice(this.state.first, this.state.second).map(album => {
            if (this.state.selected === "All" || album.genre.includes(this.state.selected.charAt(0).toUpperCase() + this.state.selected.slice(1))){
            return <div key={album.id}>
                    <Link to={`/albums/${album.id}`} className="album-link">
                        <img className="homepage-profile-picture" src={album.photoURL} alt="profile-picture" />
                        <div className="homepage-album-title">{album.title}</div>
                        <div className="homepage-album-artist">{album.artistName}</div>
                        </Link>
                    </div>
            }
        })
    }
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
                    <div className="homepage-filters-all" onClick={this.updateSelected}>all</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>electronic</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>rock</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>metal</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>alternative</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>hip-hop/rap</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>experimental</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>punk</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>pop</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>jazz</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>acoustic</div>
                    <div className="homepage-filters" onClick={this.updateSelected}>folk</div>
            </div>
            <div className="homepage-wrapper">
                {albumTitles}
            </div>
            <div className="homepage-album-navigation">
                <div onClick={this.handlePrevious}>Previous</div>
                <div className="next" onClick={this.handleNext}>Next</div>
                </div>
        </div>
    </div>
    )
}
}


export default Homepage;