import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'e1497a442145464c8359a0666b8bc9c9'
    }
})