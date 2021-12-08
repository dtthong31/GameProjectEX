import { getGameById, getListGame } from "../../api";
import { mapIP } from "../../utils/common";
import { getGameDetailFail, getGameDetailSuccess, getListGameFail, getListGameSuccess, getRequest, GET_GAME_DETAIL_SUCCESS } from "../actions/gameActions";

export const getRequestListGame = dispatch => {
    return dispatch => {
        dispatch(getRequest());
        getListGame()
            .then(
                (res) => {
                    const listGame = mapIP(res.data);
                    dispatch(getListGameSuccess(listGame));
                }
            ).catch(
                err => console.log(err),
                dispatch(getListGameFail())
            );
    }
}
export const getRequestGameById = (id) => {
    return async dispatch => {
        try {
            const res = await getGameById(id);
            const game = mapIP(res.data);
            dispatch(getGameDetailSuccess(game));
        }
        catch (error) {
            console.log(error);
            dispatch(getGameDetailFail());
        }
    }
}