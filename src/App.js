import React from 'react'
import Home from './Layouts/Home/Home'
import Container from "@material-ui/core/Container";

function App() {

    return (
    <div className="App">
        <Container maxWidth="xl">
            <Home/>
        </Container>
    </div>
  );
}

export default App;
