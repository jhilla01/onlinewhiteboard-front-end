// axios
import axios from 'axios'
import bURL from './baseURL'
/
export const getDrawings = async (roomId) => {
    try {
        const {data} = await axios.get(bURL + `/onlinewhiteboard/rooms/${roomId}/get-drawings`);
        return data;
    } catch(err) {
        console.log(err)
    }
}