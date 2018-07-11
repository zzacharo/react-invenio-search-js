import { SEARCH_REQUEST, SEARCH_ERROR, SEARCH_SUCCESS } from './actionTypes';
import http from '../../common/http';

function searching(query) {
    return {
        type: SEARCH_REQUEST,
        payload: query,
    };
}

function searchSuccess(result) {
    return {
        type: SEARCH_SUCCESS,
        payload: result,
    };
}

function searchError(error) {
    return {
        type: SEARCH_ERROR,
        payload: error,
    };
}

function appendQuery(state, query) {
    const baseQuery = state.search.getIn(['scope', 'query']).toJS();
    const locationQuery = state.router.location.query;

    if (query && locationQuery.page !== undefined) {
        locationQuery.page = 1;
    }

    return {
        ...baseQuery,
        ...locationQuery,
        ...query,
    };
}

export default function search(query) {
    return async (dispatch, getState) => {
        dispatch(searching(query));

        //const state = getState();
        //const newQuery = appendQuery(state, query);
        //const url = getSearchUrl(state, newQuery);
        // if (Object.keys(newQuery).length > 0) {
        //     dispatch(push(url));
        // }
        try {
            console.log(query);
            const response = await http.get(`?q=${query.q}`);
            dispatch(searchSuccess(response.data));
            // dispatch(resultsSuccess())
        } catch (error) {
            dispatch(searchError(error));
        }
    };
}
