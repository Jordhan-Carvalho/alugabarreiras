import { GET_RENTS, RENT_ERROR, DELETE_RENT, ADD_RENT, GET_RENT } from "../actions/types";


const initialState = {
    rents: [],
    rent: null,
    loading:true,
    error: {}
}

export default function( state = initialState, action ) {
    const {type, payload} = action;
    switch(type) {
        case GET_RENTS:
        return {
            ...state,
            rents: payload,
            loading: false
        };
        case GET_RENT:
        return {
            ...state,
            rent: payload,
            loading: false
        }
        case ADD_RENT:
        return {
            ...state,
            rents: [...state.rents, payload],
            loading: false
        }
        case DELETE_RENT:
        return {
            ...state,
            rents: state.rents.filter( rent => rent._id !== payload),
            loading: false
        }
        case RENT_ERROR:
        return {
            ...state,
            error: payload,
            loading: false
        };
        default:
        return state;
    } 
}