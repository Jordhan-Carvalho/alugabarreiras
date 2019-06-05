import axios from 'axios';
import { GET_RENTS, RENT_ERROR, DELETE_RENT, ADD_RENT, GET_RENT } from './types';

// Get all rents
export const getRents = () => async dispatch => {
    try {
        const res = await axios.get('/api/rents');

        dispatch({
            type: GET_RENTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: RENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};