import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
            Authorization: 'Client-ID rZztJ6FwH0VUQo-o_mEql6iBukAKiF9PVGqDmFd2wnI'
        }
});