import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
            <div>
                <form className ="formContainer" onSubmit={this.handleSubmit}>
                    Welcome to Bandcabin!
                        
                    {this.renderErrors()}
                    <div>
                        <label>Username:
                            <input type="text" value={this.state.username} onChange={this.update('username')}/>
                        </label>
                        <label>Email:
                            <input type="text" value={this.state.email} onChange={this.update('email')} />
                        </label>
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <input type="submit" value={this.props.formType} />
                    </div>
                </form>
                {this.props.navLink}
            </div>
        );
    }
}

export default SessionForm;
