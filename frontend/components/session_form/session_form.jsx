import React from 'react';

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
        return (
            <div className="form-container" >
                <form className="form-container" onSubmit={this.handleSubmit}>
                    
                    <h3>Welcome to Bandcabin</h3>  
                    {this.renderErrors()}
                    <div className = "login-input">
                        <label>Username:
                            <input type="text" value={this.state.username} onChange={this.update('username')}/>
                        </label>
                    <br/>
                        <div>
                            <label htmlFor="artist">Artist / Band Name:</label>
                            <input id="artist" type="text" value={this.state.artist} onChange={this.update('artist')} />
                        </div>
                    <br/>
                        <div>
                            <label className="email-input" htmlFor="email">Email:</label>
                            <input id="email" type="text" value={this.state.email} onChange={this.update('email')} />
                        </div>
                    <br/>
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                    <br/>
                        <input type="submit" value={this.props.formType} />
                    </div>
                </form>
                {this.props.navLink}
            </div>
        );
    }
}

export default SessionForm;
