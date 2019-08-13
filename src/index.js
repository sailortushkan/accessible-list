import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Hola(props) {
    return <h1><span lang="es">Hola, {props.name}</span></h1>;
}

function Bonjour(props) {
    return <h1><span lang="fr">Bonjour, {props.name}</span></h1>;
}

function GreetEverybody() {
    return (
        <div>
            <Hola name="Maria" />
            <Hello name="Sara" />
            <Bonjour name="Pierre" />
        </div>
    )
}

ReactDOM.render(
    <GreetEverybody />,
    document.getElementById('root')
  );