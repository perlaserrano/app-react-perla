import React, { Fragment, useState } from "react";

const Formularios = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })

    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)
    }
    return (
        <Fragment>
            <h1>Formularios</h1>
      
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Nombre"
                        className="form-control"
                        name="nombre"
                        onChange={handleInputChange}
                    />

                </div>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Apellido"
                        className="form-control"
                        name="apellido"
                        onChange={handleInputChange}


                    />

                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" >Enviar</button>

                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>


        </Fragment>
    );
}

export default Formularios;