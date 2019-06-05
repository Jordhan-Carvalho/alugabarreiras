import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Routes from './components/routing/Routes';
import NavBar from './components/layouts/NavBar';
import Landing from './components/layouts/Landing';
import setAuthToken from './utils/setAuthToken';
import "react-toastify/dist/ReactToastify.css";
import "moment/locale/pt-br";
import './App.css';

//redux
import store from './store';
import { loadUser } from './actions/auth';

// Needed for calling user_loaded before get_profile
if (localStorage.token) {
  setAuthToken(localStorage.token);
}



function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <>
    <ToastContainer autoClose={3000} />
    <NavBar />
    <Switch>
    <Route exact path ="/" component={ Landing } />
    <Route component={Routes} />
    </Switch>
    </>
  );
}

export default App;
