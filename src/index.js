import React from 'react';
import ReactDOM from 'react-dom';

export  function Hello(props) {
    return <p>Hello, {props.name}!</p>;
}

export  function Hola(props) {
    return <p><span lang="es">Hola, {props.name}!</span></p>;
}

export  function Bonjour(props) {
    return <p><span lang="fr">Bonjour, {props.name}!</span></p>;
}

export  function GreetEverybody() {
    return (
        <div data-testid="theroot">
            <Hola name="Maria" />
            <Hello name="Sara" />
            <Bonjour name="Pierre" />
        </div>
    )
}

// ReactDOM.render(
//     <GreetEverybody />,
//     document.getElementById('root')
//   );