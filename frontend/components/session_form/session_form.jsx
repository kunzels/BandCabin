import React from 'react';

// const demo_user = {username: 'King Gizzard', artist: 'King Gizzard and the Lizard Wizard', email:'gizz@gmail.com', password:'demoguy5000', location:"Austrailia", description:"King Gizzard & the Lizard Wizard is an Australian rock band formed in 2010 in Melbourne, Victoria. The band consists of Stu Mackenzie (vocals, guitar, bass, keyboards, flute), Ambrose Kenny-Smith (vocals, harmonica, keyboards), Cook Craig (guitar, bass, vocals), Joey Walker (guitar, bass, keyboards, vocals), Lucas Skinner (bass, keyboards), Michael Cavanagh (drums, percussion), and Eric Moore (drums, percussion, management). They are known for their energetic live shows and prolific recording output, having released two EPs, fifteen studio albums, and four live albums since their formation.", genre:"Prog Rock"}
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            artist: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this)
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
        if (this.props.formType === 'Sign Up'){
        return (
        /* signup form */
            <div className="form-container" >
                <form  onSubmit={this.handleSubmit}>
                    <h3 className="signup-title">Sign Up</h3>  
                    {this.renderErrors()}
                    <br/>
                
                    <div className = "login-input">
                        <div className= "input">
                            <label htmlFor="username" className="userNameTitle">Username</label>
                            <input id="username" type="text" className="userNameInput" value={this.state.username} onChange={this.update('username')}/>
                        </div>
                    <br/>
                        <div className="input">
                            <label className="email-input" htmlFor="email">Email</label>
                            <input id="email" type="text" className="userNameInput" value={this.state.email} onChange={this.update('email')} />
                        </div>
                    <br/>
                        <div className="input">
                            <label htmlFor="artist" className="artistTitle">Artist / Band Name</label>
                            <input id="artist" className="userNameInput" type="text" value={this.state.artist} onChange={this.update('artist')} />
                        </div>
                    <br/>
                        <div className= "input">
                            <label htmlFor="password" className="passwordTitle">Password</label>
                            <input id="password" className="userNameInput" type="password" value={this.state.password} onChange={this.update('password')} />
                        </div>
                    <br/>
                        <input className="form-submit-button" type="submit" value={this.props.formType} />
                    </div>
                </form>
                {this.props.navLink}
            </div>
            );
        } else {
            return ( 
                /* login form */
                <div className="form-container" >
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h3 className="signup-title">Log In</h3>
                        <br/>
    <br/>
                          {this.renderErrors()}
                        <div className="login-input">
                            <div className="input">
                                <label htmlFor="username" className="userNameTitle">Username</label>
                                <input id="username" className="userNameInput" type="text" value={this.state.username} onChange={this.update('username')} />
                            </div>
                            <br />
                            <div className="input">
                                <label htmlFor="password" className="userNameTitle">Password</label>
                                <input id="password" type="password" className="userNameInput"  value={this.state.password} onChange={this.update('password')} />
                            </div>
                            <br />
                            <input className="form-submit-button" type="submit" value={this.props.formType} />
                            <br/>
                            <div className='demo'>
                                <button className='demo-login-btn' onClick={this.handleDemoUser}>Demo User Login</button>
                            </div>
                            <br/>
                        </div>
                    </form>
                    {this.props.navLink}
                </div>
            )
        }
    }
}

export default SessionForm;
