import axios from 'axios';
import { toast } from "react-toastify";
import { REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';
import setAuthToken from '../utils/setAuthToken';

//Load User
export const loadUser = () => async dispatch => {
    // check if theres a user, and if it is, send a global header (setAuthToken)
if (localStorage.token) {
    setAuthToken(localStorage.token);
}
try {
    const res = await axios.get('/api/auth');
    dispatch({
        type: USER_LOADED,
        payload: res.data
    })

} catch (err) {
    dispatch({
        type: AUTH_ERROR
    })
}
}

// Login user
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password});

    try {
        const res= await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        
        dispatch(loadUser());
        toast.success("😄 Logged in !!")
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => toast.error(`⛔ ${error.msg}`));
        }

        dispatch({
            type: LOGIN_FAIL
        })
        
    }
}

// Register user
export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password});

    try {
        const res= await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
        toast.success("😄 Registrations success !!")
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => toast.error(`⛔ ${error.msg}`));
        }

        dispatch({
            type: REGISTER_FAIL
        })
        
    }
}

// Logout / Clear profile
export const logout = () => dispatch => {
    window.location.reload();
    dispatch({ type: LOGOUT });
    toast.info("🔔 Deslogado com sucesso")
}