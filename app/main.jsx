import './stylesheets/main.css';
import React from 'react';
import App from './components/App';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

function main() {
    persist(alt, storage, 'app');
    var app = document.createElement('div');
    document.body.appendChild(app);

    React.render(<App />, app);
}

main();