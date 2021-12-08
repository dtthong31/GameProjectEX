import { FETCHING_DATA, FETCHING_DATA_FAIL, FETCHING_DATA_SUCCESS, GAME_DETAIL, GET_GAME_DETAIL_FAIL, GET_GAME_DETAIL_SUCCESS, GET_LIST_GAME_FAIL, GET_LIST_GAME_SUCCESS, SET_LIST_GAME } from "../actions/gameActions"

const initialState = {
    listGame: [],
    gameDetail: {},
    isFetching: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_LIST_GAME_SUCCESS:
            return { ...state, listGame: payload, isFetching: false };
        case GET_LIST_GAME_FAIL:
            return { ...state, isFetching: false };
        case GET_GAME_DETAIL_SUCCESS: {
            return { ...state, gameDetail: payload, isFetching: false };
        }
        case GET_GAME_DETAIL_FAIL: {
            return { ...state, isFetching: false };
        }
        default:
            return state;
    }
}
