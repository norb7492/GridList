import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/main-page/MainPage';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
    <MuiThemeProvider>
        <MainPage />
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
