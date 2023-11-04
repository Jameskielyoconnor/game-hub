import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '93a80c6716824e7595b2300a7f68dc94'
    }
})