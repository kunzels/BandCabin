import React from 'react';

const demo_user = {username: 'Demoth', artist: 'TheDemoBoys', email:'Demoman@this.com', password:'demoguy5000'}
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
        e.preventDefault;
        this.props.processForm(demo_user);
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
                            <label htmlFor="username">Username:</label>
                            <input id="username" type="text" value={this.state.username} onChange={this.update('username')}/>
                        </div>
                    <br/>
                        <div className="input">
                            <label className="email-input" htmlFor="email">Email:</label>
                            <input id="email" type="text" value={this.state.email} onChange={this.update('email')} />
                        </div>
                    <br/>
                        <div className="input">
                            <label htmlFor="artist">Artist / Band Name:</label>
                            <input id="artist" type="text" value={this.state.artist} onChange={this.update('artist')} />
                        </div>
                    <br/>
                        <div className= "input">
                            <label htmlFor="password">Password:</label>
                            <input id="password" type="password" value={this.state.password} onChange={this.update('password')} />
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
                                <label htmlFor="username">Username:</label>
                                <input id="username" type="text" value={this.state.username} onChange={this.update('username')} />
                            </div>
                            <br />
                            <div className="input">
                                <label htmlFor="password">Password:</label>
                                <input id="password" type="password" value={this.state.password} onChange={this.update('password')} />
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
