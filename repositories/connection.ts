import axios from "axios";

export const backendConn = axios.create({
    baseURL : process.env.NEXT_PUBLIC_BACKEND_URL
})