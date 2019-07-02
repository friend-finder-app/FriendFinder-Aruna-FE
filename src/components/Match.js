// import distance from 'google-distance'
import React from 'react'
import { connect } from 'react-redux'
import { sendMatchUserMessage,calculateCitiesDistance } from '../actions'


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
            calcDistance: 0
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
        // this.props.sendMatchUserMessage(this.state.message)
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

    handleDistance = () => {
        this.calculateDistance()
        
    }

    calculateDistance = async () => {
        console.log('Match component calculateDistance origin ',this.props.user.address)
    console.log('Match component calculateDistance destination ',this.props.matches.address)
        await this.props.calculateCitiesDistance(this.props.user.address,this.props.matches.address)
        await this.setState({
            calcDistance:this.props.reducerDistance
        })
    }

    // calculateDistance = async () => {
        
    //     // var distance = require('google-distance');
    //     await distance.get(
    //         {
    //             origin: 'San Francisco, CA',
    //             destination: 'San Diego, CA'
    //         },
    //         function (err, data) {
    //             if (err) return console.log(err);
    //             console.log(data);
    //         });
    // }


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
                <p>Distance : {this.state.calcDistance}<button onClick={this.handleDistance}>Get Distance</button></p>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    reducerDistance: state.reducerDistance,
   
    gettingDistance: state.gettingDistance
})

export default connect(
    mapStateToProps, { sendMatchUserMessage,calculateCitiesDistance }
)(Match)


// export default Match

