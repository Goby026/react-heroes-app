import { useState } from "react";


export const useForm = ( initialState = {} )=>{

    const [values, setValues] = useState(initialState);

    // resetear formulario
    const reset = ()=>{
        setValues(initialState);
    }

    //setear los campos del formulario
    const handleInputChange = ({ target })=>{

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [values, handleInputChange, reset];
}

//es importante que el input tenga definido el atributo NAME correctamente enlazado con la propiedad que se envia a este useForm