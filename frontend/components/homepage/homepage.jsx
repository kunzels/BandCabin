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
        this.filteredAlbums = this.filteredAlbums.bind(this);
        this.albumTitles = this.albumTitles.bind(this);
        this.genreButtons = this.genreButtons.bind(this);
        this.allSelected = this.allSelected.bind(this);
    }

    updateSelected(e){
        let text = e.currentTarget.innerText;
        this.setState({ selected: text.charAt(0).toUpperCase() + text.slice(1), first: 0, second:4})
    }

    componentDidMount (){
        this.props.fetchAlbums()
        .then(albums => {this.setState({albums: Object.values(albums.albums)})})
    }

    handleNext(){
        let filteredAlbums = this.filteredAlbums();
        if(this.state.second + 4 <= filteredAlbums.length){
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

    filteredAlbums(){
        let filteredAlbums;
        if(this.state.selected === "Recent"){
            filteredAlbums = this.state.albums.slice().reverse()
        }
        else if (this.state.selected !== "All") {
            filteredAlbums = this.state.albums.filter(album => album.genre.includes(this.state.selected.charAt(0).toUpperCase() + this.state.selected.slice(1)));
        } else {
            filteredAlbums = this.state.albums
        }
        return filteredAlbums
    }

    albumTitles(filteredAlbums){
        let albumTitles;
        if (filteredAlbums.length === 0) {
            albumTitles = <div className="noSeeds">We could use more seeds, but I assure you this works...</div>
        } else {
            albumTitles = filteredAlbums.slice(this.state.first, this.state.second).map(album => {
                if (this.state.selected === "All" || this.state.selected ==="Recent" || album.genre.includes(this.state.selected.charAt(0).toUpperCase() + this.state.selected.slice(1))) {
                    return <div key={album.id}>
                        <Link to={`/albums/${album.id}`} className="album-link">
                            <img className="homepage-profile-picture" src={album.photoURL} alt="profile-picture" />
                            <div className="homepage-album-title">{album.title}</div>
                        </Link>
                        <Link to={`/users/${album.user_id}`} className="album-link">
                            <div className="homepage-album-artist">{album.artistName}</div>
                        </Link>
                    </div>
                }
            })
        }
        return albumTitles
    }

    genreButtons(){
        let genreButtons;
        // let genreTypes = ["electronic", "rock", "metal", "alternative", "hip-hop/rap", "experimental", "punk", "folk", "pop", "ambient", "soundtrack", "world", "jazz", "acoustic", "funk", "r&b/soul", "devotional", "classical", "reggae", "podcasts", "country", "spokenword", "comedy", "blues", "kids", "audiobooks", "latin"]
        // could create carousel for types, someday, someday... ^
        let genreTypes = ["recent", "electronic", "rock", "metal", "alternative", "rap", "experimental", "punk", "folk", "pop", "ambient", "soundtrack", "jazz", "acoustic", "classical", "spokenword"]
        genreButtons = genreTypes.map(type => {
            let classSelect;
            if ((this.state.selected.charAt(0).toUpperCase() + this.state.selected.slice(1)) === type.charAt(0).toUpperCase() + type.slice(1)){
                classSelect = "homepage-filters-on"
            } else {
                classSelect = "homepage-filters"
            }
            return <div className={classSelect} onClick={this.updateSelected}>{type}</div>
        })
        return genreButtons
    }

    allSelected(){
        let allSelected;
        if (this.state.selected === "All")
            allSelected = "homepage-filters-all"
        else {
            allSelected = "homepage-filters-all-off"
        }
        return allSelected;
    }

    render(){
        let filteredAlbums = this.filteredAlbums();
        let albumTitles = this.albumTitles(filteredAlbums);
        let genreButtons = this.genreButtons();
        let filterColor = "album-display-filter-" + this.state.selected;
        let allSelected = this.allSelected();

    return(
    <div className="homepage-container">
        <div className="homepage">
            <div className="item-container">
                <div className="big-item">
                        <a href="https://bandcabin.herokuapp.com/#/albums/112">
                    <img className="weatherbox" src={window.weatherbox} />
                        </a>
                   {/* <p className="BI-Description">Weatherbox Return, With a New Halfway Home Live Session</p> */}
                </div>
                <div className="small-items">
                        <a href="https://bandcabin.herokuapp.com/#/albums/107" className="gizzLink">
                    <img className="gizzard" src={window.gizzard} />
                        </a>
                        <a href="https://bandcabin.herokuapp.com/#/albums/111" className="manManLink">
                   <img className="gizzard" src={window.manman} />
                        </a>
                        <a href="https://www.grammy.com/musicares/get-help/musicares-coronavirus-relief" className="manManLink">
                   <img className="gizzard" src={window.mf} />
                        </a>
                </div>
            </div>
            <p className="factoid">Fans have paid artists $484 million using BandCabin, and $17.7 million in the last 30 days alone.</p>
            <div className={filterColor}>
                    <div className={allSelected}onClick={this.updateSelected}>all</div>
                    {genreButtons}
            </div>
            {/* <div className="album-display-filter-2"></div> */}
            {/* uncomment when ready for subgenres / new filters*/}
            <div className="homepage-wrapper">
                {albumTitles}
            </div>
            <div className="homepage-album-navigation">
                <div className="previous" onClick={this.handlePrevious}>Previous</div>
                <div className="next" value="test" onClick={this.handleNext}>Next</div>
            </div>
        </div>
    </div>
    )
}
}


export default Homepage;