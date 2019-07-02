import React from 'react'
import { connect } from 'react-redux'
import { getMatch, getSpecificMatch} from '../actions'
import Match from './Match'
import User from './User'

class GetUserMatch extends React.Component {
    

    componentDidMount() {
        this.getUser();
        // console.log('coming inside component did mount ', this.props.user)
    }

    getUser = async () => {
        await this.props.getMatch()

    }

    getSpecificMatches = (event) => {
        event.preventDefault()
        this.props.getSpecificMatch()

    }




    render() {
        console.log('logged in user ', this.props.user)
        if (this.props.user.length < 1) return <h1>loading users...</h1>
        else {
            return (
                <div>
                    <h1>get user match</h1>
                    <div>
                        {!this.props.fetchingUsers && this.props.user.map(users =>
                            <User users={users} key={users.id} />
                        )}
                        {!this.props.matchingUsers && this.props.match.map(matches =>
                            <Match matches={matches} key={matches.id} user={this.props.user} />
                        )}

                        <button onClick={this.getSpecificMatches}>Get Match</button>

                    </div>

                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    user: state.users,
    match: state.match,
    fetchingUsers: state.fetchingUsers,
    matchingUsers: state.matchingUsers
})

export default connect(
    mapStateToProps, { getMatch, getSpecificMatch }
)(GetUserMatch)


