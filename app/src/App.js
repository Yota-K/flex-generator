import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Property from './components/Property';
import Footer from './components/Footer.js';

const App = () => {
    return (
        <>
            <Header />
            <Container fixed>
                <Property />
            </Container>
            <Footer />
        </>
    );
}

export default App;
