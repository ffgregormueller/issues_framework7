import { List, ListItem, Navbar, Page } from 'framework7-react';
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <Page className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h1 className='App-title'>Welcome to React</h1>
                </header>
                <p className='App-intro'>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Navbar title='My Page' />
                <List>
                    <ListItem title='Item 1' />
                    <ListItem title='Item 2' />
                </List>
            </Page>
        );
    }
}

export default App;
