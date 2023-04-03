// axios
import axios from 'axios'
import bURL from './baseURL'

export const getRoom = async (id) => {
    await axios.get(bURL + `/onlinewhiteboard/rooms/${id}`)
        .then(response => {
            return response;
        });
}