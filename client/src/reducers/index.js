import { combineReducers } from 'redux';
import rent from './rent';
import auth from './auth';



export default combineReducers({
    rent,
    auth
});