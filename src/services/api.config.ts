import axios from "axios";


export const api = axios.create({
    baseURL: "http://beckend-web-ygo-mdo-production.up.railway.app",
    timeout: 120000,
    headers: {"Content-Type" : "application/json"}
})