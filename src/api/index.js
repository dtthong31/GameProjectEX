import axios from "axios";
import { detectUrlPlatform } from '../utils/common'
export const getListGame = () => {
    const baseUrl = detectUrlPlatform();
    return axios({ method: 'GET', url: `${baseUrl}/games` });
}
export const getGameById = (id) => {
    const baseUrl = detectUrlPlatform();
    return axios({ method: 'GET', url: `${baseUrl}/games/${id}` });
}