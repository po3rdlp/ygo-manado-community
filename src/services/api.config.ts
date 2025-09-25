import axios from "axios";


export const api = axios.create({
    baseURL: "http://192.168.137.51:8080",
    timeout: 120000,
    headers: {"Content-Type" : "application/json"}
})