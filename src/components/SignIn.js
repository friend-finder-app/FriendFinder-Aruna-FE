import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            // email: '',
            // password: ''
            "username": '',
            "password": '',
            "email": '',
            "phoneNumber": "",
            "profilePic": "",
            "aboutMe": "",
            "interests": "",
            "distance": ''
        }
    }

    handleProp = (event) => {
        // console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // console.log(event)
        event.preventDefault();
        // console.log(this.state)
        // console.log('error occured while signing in ', this.props.error)
        this.props.login(this.state)
            .then(() => {
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="username*"
                        value={this.state.username}
                        onChange={this.handleProp}
                        name="username"
                    />
                    <input
                        type='password'
                        placeholder="password*"
                        value={this.state.password}
                        onChange={this.handleProp}
                        name="password"
                    />
                    {/* <input
                        type='email'
                        placeholder="email*"
                        value={this.state.email}
                        onChange={this.props.handleProp}
                        name="email"
                    />
                    <input
                        placeholder="phoneNumber*"
                        value={this.state.phoneNumber}
                        onChange={this.props.handleProp}
                        name="phoneNumber"
                    />
                    <input
                        placeholder="profilePic"
                        value={this.state.profilePic}
                        onChange={this.props.handleProp}
                        name="profilePic"
                    />
                    <input
                        placeholder="aboutMe"
                        value={this.state.aboutMe}
                        onChange={this.props.handleProp}
                        name="aboutMe"
                    />
                    <input
                        placeholder="interests"
                        value={this.state.interests}
                        onChange={this.props.handleProp}
                        name="interests"
                    />
                    <input
                        placeholder="distance"
                        value={this.state.interests}
                        onChange={this.props.handleProp}
                        name="distance"
                    /> */}
                    <button>Submit User</button>
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn,
    error: state.error
})

export default connect(
    mapStateToProps, { login }
)(SignIn)

// export default SignIn