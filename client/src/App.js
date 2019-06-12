import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Routes from './components/routing/Routes';
import Header from './components/layouts/Header';
import Landing from './components/layouts/Landing';
import setAuthToken from './utils/setAuthToken';
import "react-toastify/dist/ReactToastify.css";
import "moment/locale/pt-br";
import './App.css';

//redux
import store from './store';
import { loadUser } from './actions/auth';

// Material-UI theme
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';



// Needed for calling user_loaded before get_profile
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

//Material-Ui theme
const theme = createMuiTheme({
  palette: {
    primary: { main: "#333D79" }, // Purple and green play nicely together.
    secondary: { main: '#512da8' },
  },
});



function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <>
    <ToastContainer autoClose={3000} />
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <Header />
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route component={Routes} />
    </Switch>
    </ThemeProvider>
    </>
  );
}

export default App;
