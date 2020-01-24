import axios from 'axios'

// console.warn(process.env.REACT_APP_ENDPOINT)
// console.warn(process.env.REACT_APP_URL)

export default axios.create({
    baseURL: process.env.REACT_APP_URL,
    timeout: 60000
})
