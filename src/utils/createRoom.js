// axios
import axios from 'axios'
import bURL from './baseURL'

export const createRoom = async (name, description, members) => {
    try {
        const {data} = await axios.post(bURL + '/onlinewhiteboard/rooms', {name, description, members});
        return data;
    } catch(err) {
        console.log(err)
    }
}