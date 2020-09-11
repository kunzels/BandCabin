render() {
    let button;
    if (this.props.formType === 'login') {
        button = <div className="button-container">
            <button className="session-submit" onClick={this.handleDemoUser}>Demo User Login</button>
        </div>
    } else {
        button = <div></div>
    }

    let form;
    if(this.props.formType === 'Sign Up'){
        form = <div className="login-page">
            <div className="login-nav">
                <img className="logo2" src={window.logo}>
                </img >
            </div>
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Start Taking Notes...
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
                        {button}
                        <br />
                        <div className="button-container">
                            <button className="session-submit" onClick={this.handleDemoUser}>Demo User Login</button>
                        </div>
                        <div className="linker">
                            {this.props.navLink}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    } else {
        form = <div className="login-page">
            <div className="login-nav">
                <img className="logo2" src={window.logo}>
                </img >
            </div>
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Start Taking Notes...
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
        <div>
            {form}
        </div>
    )
}
