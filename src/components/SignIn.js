import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

class SignIn extends React.Component {
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

