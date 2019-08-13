import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
    return <p>Hello, {props.name}!</p>;
}

function Hola(props) {
    return <p><span lang="es">Hola, {props.name}!</span></p>;
}

function Bonjour(props) {
    return <p><span lang="fr">Bonjour, {props.name}!</span></p>;
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