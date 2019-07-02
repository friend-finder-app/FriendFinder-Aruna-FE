import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'
// import {axiosWithCors} from '../axiosWithCors'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('http://localhost:3355/auth/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
    //   console.log('login token ', res)
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: `${err}` })
    //   console.log('login error in actions ', err)
    })
}

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post('http://localhost:3355/auth/register', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token })
    //   console.log('signup token ', res)
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err })
    //   console.log('signin error in actions ', err)
    })
}

export const GET_USER_START = 'GET_USER_START'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

export const getMatch = () => dispatch => {
   dispatch({ type: GET_USER_START })
  return axiosWithAuth()
    .get('http://localhost:3355/users')
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data })
    //   console.log(res.data)
    //   console.log('get question header info ', res.data)
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAILURE, payload: err })
    //   console.log('action get question start error ' + err)
    })
}

export const GET_MATCH_START = 'GET_MATCH_START'
export const GET_MATCH_SUCCESS = 'GET_MATCH_SUCCESS'
export const GET_MATCH_FAILURE = 'GET_MATCH_FAILURE'

export const getSpecificMatch = () => dispatch => {
  dispatch({ type: GET_MATCH_START })
  return axiosWithAuth()
    .get('http://localhost:3355/users/match')
    .then(res => {
      dispatch({ type: GET_MATCH_SUCCESS, payload: res.data })
    //   console.log(res.data)
    //   console.log('get match header info ', res.data)
    })
    .catch(err => {
      dispatch({ type: GET_MATCH_FAILURE, payload: err })
    //   console.log('action get match start error ' + err)
    })
}

export const POST_MESSAGE_START = 'POST_MESSAGE_START'
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS'
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE'

export const sendMatchUserMessage = (newMessage) => dispatch => {
    console.log('action sendMatchUserMessage message ',newMessage)
  dispatch({ type: POST_MESSAGE_START })
  return axiosWithAuth()
    .post('http://localhost:3355/users/match/messages',newMessage)
    .then(res => {
      dispatch({ type: POST_MESSAGE_SUCCESS, payload: res.data })
      console.log(res.data)
      console.log('action post match header info ', res.data)
    })
    .catch(err => {
      dispatch({ type: POST_MESSAGE_FAILURE, payload: err })
      console.log('action post match start error ' + err)
    })
}

export const GET_DISTANCE_START = 'GET_DISTANCE_START'
export const GET_DISTANCE_SUCCESS = 'GET_DISTANCE_SUCCESS'
export const GET_DISTANCE_FAILURE = 'GET_DISTANCE_FAILURE'

// let corsHeader = {
//     headers: {
//     "Access-Control-Allow-Origin": *
//     }
//     }
    

export const calculateCitiesDistance = (origin,destination) => dispatch => {
    console.log('action calculateCitiesDistance origin ',origin)
    console.log('action calculateCitiesDistance origin ',destination)

    
  dispatch({ type: GET_DISTANCE_START })

  
  return axios
    .get('http://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle+WA&destinations=San+Francisco+CA&key=AIzaSyCE2-NVqHJsJToglIOy9n1rR7nbu75lle4'
    )

    // .res.header('Access-Control-Allow-Origin: *')
    .then(res => {
      dispatch({ type: GET_DISTANCE_SUCCESS, payload: res.data.rows })
      console.log(res.data)
      console.log('action distance header info ', res.data.rows)
    })
    .catch(err => {
      dispatch({ type: GET_DISTANCE_FAILURE, payload: err })
      console.log('action distance start error ' + err)
    })
}

