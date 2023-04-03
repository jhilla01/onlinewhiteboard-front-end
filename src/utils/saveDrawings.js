// axios
import axios from 'axios'
import bURL from './baseURL'

export const saveDrawings = async (roomId, coordinates) => {
    const line = {
        line: coordinates
    }
    try {
        const {data} = await axios.post(bURL + `/onlinewhiteboard/rooms/${roomId}/save-drawing`, line);
        return data;
    } catch (err) {
        console.log(err)
    }
}