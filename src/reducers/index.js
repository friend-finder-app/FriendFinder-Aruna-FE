import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    GET_MATCH_START,
    GET_MATCH_SUCCESS,
    GET_MATCH_FAILURE,
    POST_MESSAGE_FAILURE,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_START,
    GET_DISTANCE_START,
    GET_DISTANCE_SUCCESS,
    GET_DISTANCE_FAILURE,
    // DELETE_QUESTION_START,
    // DELETE_QUESTION_SUCCESS,
    // DELETE_QUESTION_FAILURE,
    // SEARCH_QUESTION_START,
    // SEARCH_QUESTION_SUCCESS,
    // SEARCH_QUESTION_FAILURE
} from '../actions'

const initialState = {
    users: [],
    isLoggingIn: false,
    isSignedUp: false,
    inUserPage: false,
    fetchingUsers: false,
    matchingUsers: false,
    postingMessage: false,
    gettingDistance: false,
    match: [],
    msg: '',
    reducerDistance: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_START:
            return {
                ...state,
                isSignedUp: true,
                isLoggingIn: true,
                inUserPage: false,
                error: ''
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSignedUp: false,
                isLoggingIn: false,
                inUserPage: true,
                error: ''
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                isSignedUp: false,
                isLoggingIn: false,
                inUserPage: false,
                error: action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                inUserPage: false,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                inUserPage: true,
                error: ''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                inUserPage: false,
                error: action.payload
            };
        case GET_USER_START:
            return {
                ...state,
                fetchingUsers: true,
                inUserPage: true,
                error: ''
            };
        case GET_USER_SUCCESS:
            // console.log('reducer GET_USER_SUCCESS action payload ', action.payload)
            return {
                ...state,
                fetchingUsers: false,
                inUserPage: true,
                users: action.payload,
                error: ''
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                fetchingUsers: false,
                inUserPage: true,
                error: action.payload
            };

        case GET_MATCH_START:
            return {
                ...state,
                matchingUsers: true,
                inUserPage: true,
                error: ''
            };
        case GET_MATCH_SUCCESS:
            return {
                ...state,
                matchingUsers: false,
                inUserPage: true,
                match: action.payload,
                error: ''
            };
        case GET_MATCH_FAILURE:
            return {
                ...state,
                matchingUsers: false,
                inUserPage: true,
                error: action.payload
            };
        case POST_MESSAGE_START:
            return {
                ...state,
                postingMessage: true,
                inUserPage: true,
                error: ''
            };
        case POST_MESSAGE_SUCCESS:
            console.log('reducer POST_MESSAGE_SUCCESS action payload ', action.payload)

            return {
                ...state,
                postingMessage: false,
                inUserPage: true,
                msg: action.payload,
                error: ''
            };
        case POST_MESSAGE_FAILURE:
            return {
                ...state,
                postingMessage: false,
                inUserPage: true,
                error: action.payload
            };
        case GET_DISTANCE_START:
            return {
                ...state,
                gettingDistance: true,
                inUserPage: true,
                error: ''
            };
        case GET_DISTANCE_SUCCESS:
            console.log('reducer GET_DISTANCE_SUCCESS action payload ', action.payload[0].elements[0].distance.text)

            return {
                ...state,
                gettingDistance: false,
                inUserPage: true,
                reducerDistance: action.payload[0].elements[0].distance.text,
                error: ''
            };
        case GET_DISTANCE_FAILURE:
            return {
                ...state,
                gettingDistance: false,
                inUserPage: true,
                error: action.payload
            };
        default:
            return state
    }
}