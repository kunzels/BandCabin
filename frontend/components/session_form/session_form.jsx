import React from 'react';

// const demo_user = {username: 'King Gizzard', artist: 'King Gizzard and the Lizard Wizard', email:'gizz@gmail.com', password:'demoguy5000', location:"Austrailia", description:"King Gizzard & the Lizard Wizard is an Australian rock band formed in 2010 in Melbourne, Victoria. The band consists of Stu Mackenzie (vocals, guitar, bass, keyboards, flute), Ambrose Kenny-Smith (vocals, harmonica, keyboards), Cook Craig (guitar, bass, vocals), Joey Walker (guitar, bass, keyboards, vocals), Lucas Skinner (bass, keyboards), Michael Cavanagh (drums, percussion), and Eric Moore (drums, percussion, management). They are known for their energetic live shows and prolific recording output, having released two EPs, fifteen studio albums, and four live albums since their formation.", genre:"Prog Rock"}
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            artist: '',
            email: '',
            password: '',
            imageUrl: null,
            imageFile: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.props.formType === "Sign Up"){ 
            const formData = new FormData();
            formData.append('user[username]', this.state.username);
            formData.append('user[artist]', this.state.artist);
            formData.append('user[email]', this.state.email);
            formData.append('user[password]', this.state.password);
        if (this.state.imageFile) {
            formData.append('user[photo]', this.state.imageFile);
        }
            this.props.processForm(formData)
        } else {
            e.preventDefault();
            const user = Object.assign({}, this.state);
            this.props.processForm(user);
        }
    }
    
    handleDemoUser(e) {
        e.preventDefault();
        this.props.processForm({ username: 'King Gizzard', password:'demoguy5000' });
    }
    
    renderErrors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </div>
        );
    }
    
    render() {
        let button;
        if (this.props.formType === 'Log In') {
            button = <div className="button-container">
                <button className="session-submit" onClick={this.handleDemoUser}>Demo User Login</button>
            </div>
        } else {
            button = <div></div>
        }

        let imagePreview;
        if (this.state.imageUrl) {
            imagePreview = <img src={this.state.imageUrl} className="user-square" alt="" />
        }

        let form;
        if (this.props.formType === 'Sign Up') {
            form = <div className="login-page">
                <div className="user-profile-picture">
                    <div className="user-square">{imagePreview}</div>
                    <div className="user-file-container">
                        <div >
                            <label for="files" className="custom-file-input"></label>
                            <input type="file" id="files" accept=".jpg, .jpeg, .png" className="hidden" onChange={this.handleFile} />
                        </div>
                    </div>
                </div>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                    <br />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <div className="signup-form">
                            <br />
                            <label className="username-password">
                                <br />
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                    placeholder="Username"
                                />
                            </label>
                            <br />
                            <label className="username-password">
                                <br />
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    placeholder="Email Address"
                                />
                            </label>
                            <br />
                            <label className="username-password">
                                <br />
                                <input type="text"
                                    value={this.state.artist}
                                    onChange={this.update('artist')}
                                    className="login-input"
                                    placeholder="Artist Name"
                                />
                            </label>
                            <br />
                            <label className="username-password">
                                <br />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input-pass"
                                    placeholder="Password"
                                />
                            </label>
                            <br />
                            <div className="button-container">
                                <input className="session-submit" type="submit" value={this.props.formType} />
                            </div>
                            <br />
                            <div className="linker">
                                {this.props.navLink}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        } else {
            form = <div className="login-page">
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
                        <div className="errors">
                            {this.renderErrors()}
                        </div>
                        <div className="login-form">
                            <br />
                            <label className="username-password">
                                <br />
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                    placeholder="Username"
                                />
                            </label>
                            <br />
                            <label className="username-password">
                                <br />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input-pass"
                                    placeholder="Password"
                                />
                            </label>
                            <br />
                            <div className="button-container">
                                <input className="session-submit" type="submit" value={this.props.formType} />
                            </div>
                            {button}
                            <br />
                            <div className="linker">
                                {this.props.navLink}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        }

        return (
            <div className = "login-signup-main" >
                {form}
            </div>
        )
    }
}


export default SessionForm;
