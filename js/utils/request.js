import axios from 'axios'
import {AsyncStorage} from 'React'

const API_ROOT_URL = 'http://163.172.28.221:8000/api/'


let HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}


export default axios.create({
    baseURL: API_ROOT_URL,
    timeout: 10000,
    withCredentials: true,
    headers: HEADERS,
})
