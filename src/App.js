import React from 'react'
import AppLayout from "./Layouts/AppLayout";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <AppLayout/>
            </ThemeProvider>
        </div>
    );
}

export default App;
