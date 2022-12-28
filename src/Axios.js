import axios from 'axios'

const instance = axios.create({
    baseURL: "https://clone-amazon-api.onrender.com/"
})

export default instance