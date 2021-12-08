export const GET_GAME_DETAIL_SUCCESS = 'GET_GAME_DETAIL_SUCCESS';
export const GET_GAME_DETAIL_FAIL = 'GET_GAME_DETAIL_FAIL';
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAIL = 'FETCHING_DATA_FAIL';
export const GET_LIST_GAME_SUCCESS = "GET_LIST_GAME_SUCCESS";
export const GET_LIST_GAME_FAIL = "GET_LIST_GAME_FAIL";

export const getListGameSuccess = (listGame) => ({
    type: GET_LIST_GAME_SUCCESS,
    payload: listGame
});
export const getListGameFail = () => ({
    type: GET_LIST_GAME_FAIL
});
export const getGameDetailSuccess = (gameDetail) => ({
    type: GET_GAME_DETAIL_SUCCESS,
    payload: gameDetail
});
export const getGameDetailFail = () => ({
    type: GET_GAME_DETAIL_FAIL,
});
export const getRequestSuccess = () => ({ type: FETCHING_DATA_SUCCESS });
export const getRequestFail = () => ({ type: FETCHING_DATA_FAIL });
export const getRequest = () => ({ type: FETCHING_DATA });
