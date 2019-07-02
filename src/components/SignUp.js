import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {        
            "username": '',
            "password": '',
            "email": '',
            "phoneNumber": "",
            "profilePic": "",
            "aboutMe": "",
            "interests": "",
            "address": ''
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
        this.props.signup(this.state)
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
                    <input
                        type='email*'
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleProp}
                        name="email"
                    />
                    <input
                        placeholder="phoneNumber*"
                        value={this.state.phoneNumber}
                        onChange={this.handleProp}
                        name="phoneNumber"
                    />
                    <input
                        placeholder="profilePic"
                        value={this.state.profilePic}
                        onChange={this.handleProp}
                        name="profilePic"
                    />
                    <input
                        placeholder="aboutMe"
                        value={this.state.aboutMe}
                        onChange={this.handleProp}
                        name="aboutMe"
                    />
                    <input
                        placeholder="interests"
                        value={this.state.interests}
                        onChange={this.handleProp}
                        name="interests"
                    />
                    <input
                        placeholder="address"
                        value={this.state.address}
                        onChange={this.props.handleProp}
                        name="address"
                    />
                    <button>Submit User</button>
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    isSignedUp: state.isSignedUp,
    error: state.error
})

export default connect(
    mapStateToProps, { signup }
)(SignUp)

// export default SignUp