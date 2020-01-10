import React, {Component} from 'react';

class TestComponent extends Component {
    state = {
        contador: 0
    }
    contador = 0;
    sumar = () => {
        this.setState({
            contador: this.state.contador + 1
        });
    }
    restar = () => {
        this.setState({
            contador: this.state.contador - 1
        });
    }
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        };
        return(
            <div className="TestComponent">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return(
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <h2>Suma </h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>
            </div>
        );
    }
}

export default TestComponent;