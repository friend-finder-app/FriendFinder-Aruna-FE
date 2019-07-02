import React from 'react'
import { connect } from 'react-redux'
import { sendMatchUserMessage, calculateCitiesDistance } from '../actions'


class Match extends React.Component {
    constructor() {
        super()
        this.state = {
            user: [],
            message: {
                to: '',
                body: ''
            },
            submitting: false,
            error: false,
            calcDistance: 0,
            travelMode: '',

        }
    }

    handleNumber = async (event) => {
        event.preventDefault()

        await this.setState({
            message: {

                to: this.props.matches.phoneNumber,
                body: `Hi ${this.props.matches.username}, this is a message from twilio`
            },
            submitting: true
        })

        // console.log('message ', this.state.message)

        this.sendMessage()

            .then(data => {
                console.log('Match Component send Message then: data ', data)
                if (data) {
                    this.setState({
                        message: {
                            to: '',
                            body: ''
                        },
                        submitting: false,
                        error: false
                    })
                }
                else {
                    this.setState({
                        submitting: false,
                        error: true
                    })
                }
            })
    }

    sendMessage = async () => {

        return await this.props.sendMatchUserMessage(this.state.message)
    }


    handleDistance = (event) => {
        event.preventDefault()
        console.log('logged in user address ', this.props.user[0].address)
        console.log('matched user address ', this.props.matches.address)
        var destinations = this.props.matches.address
        var origins = this.props.user[0].address
        var travelMode = this.state.travelMode.length ? this.state.travelMode : 'WALKING'

        this.props.calculateCitiesDistance(origins, destinations, travelMode)


    }



    render() {
        return (
            <div>
                <img src={this.props.matches.profilePic} />
                <h4>{this.props.matches.username}</h4>
                <p>{this.props.matches.email}</p>
                <p>{this.props.matches.phoneNumber} <button onClick={this.handleNumber}>send message</button></p>
                <p>{this.props.matches.address}</p>
                <p>{this.props.matches.aboutMe}</p>
                <p>{this.props.matches.interests}</p>
                <p>Distance : {this.props.reducerDistance}<button onClick={this.handleDistance}>Get Distance</button></p>

            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        reducerDistance: state.reducerDistance,
        user: state.users,
        gettingDistance: state.gettingDistance
    })

export default connect(
    mapStateToProps, { sendMatchUserMessage, calculateCitiesDistance }
)(Match)



