import * as actionTypes from '../actions/actionTypes';

const initialState = {
    surveys: [],
    hasMore: true,
    loading: true
}

const surveysReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_SURVEYS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOAD_SURVEYS_SUCCESS:
            return {
                ...state,
                surveys: state.surveys.concat(action.surveys),
                hasMore: action.hasMore,
                loading: false
            }
        case actionTypes.SET_SURVEYS:
            return {
                ...state,
                surveys: action.surveys
            }
        default:
            return state;
    }
}

export default surveysReducer;