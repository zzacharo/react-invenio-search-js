import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_ERROR } from './actionTypes';
import { getResults } from './selectors';

const initialState = {
    query: '',
    results: [],
    isFetching: false,
    isFetched: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                searchParams: { ...state.searchParams, ...action.payload },
                isFetching: true
            }

        case SEARCH_SUCCESS:
            return {
                ...state,
                results: action.payload.hits.hits,
                total: action.payload.hits.total,
                isFetching: false,
                isFetched: true
            }
        default:
            return state
    }
}

