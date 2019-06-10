import axios from 'axios';
import { toast } from "react-toastify";
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

// Get rent by id
export const getRentById = (rentId) => async dispatch => {
    try {
        const res = await axios.get(`/api/rents/${rentId}`);

        dispatch({
            type: GET_RENT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: RENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Delete rent
export const deleteRent = (rentId) => async dispatch => {
    if (window.confirm('Tem certeza que quer apagar?')) {
    try {
        await axios.delete(`/api/rents/${rentId}`);

        dispatch({
            type: DELETE_RENT,
            payload: rentId
        });
        toast.success("😄 Aluguel removido")
    } catch (err) {
        dispatch({
            type: RENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
}

// Add rent
export const addRent = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        const res = await axios.post('/api/rents', formData, config);
    
        dispatch({
            type: ADD_RENT,
            payload: res.data
        });
    
        toast.success("😄 Aluguel adicionado")
    
        history.push('/');

    } catch (err) {
        dispatch({
            type: RENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
        // console.log(err.response)
        err.response.data.errors.map(erro => console.log(erro.msg))
  
        toast.error(`⛔ Preencha os campos obrigatórios`)
    }
};