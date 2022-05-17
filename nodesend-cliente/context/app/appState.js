import React, {useReducer} from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import { 
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA,
    SUBIR_ARCHIVO_EXITO,
    SUBIR_ARCHIVO_ERROR,
    CREAR_ENLACE_EXITO,
    REAR_ENLACE_ERROR,
    SUBIR_ARCHIVO

} from '../../types';
import clienteAxios from '../../config/axios';

const AppState = ({children}) => {

    const initialState = {
        mensaje_archivo: null,
        nombre: '',
        nombre_original: '',
        cargando: null
    }

    //Crar dispatch y state
    const [state, dispatch] = useReducer(appReducer, initialState);

    //Muestra una alerta
    const mostrarAlerta = msg => {
        dispatchEvent({
            type: MOSTRAR_ALERTA,
            payload: msg
        })

        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 3000)
    }

    //Sube los archivos al servidor
    const subirArchivo = async (formData, nombreArchivo) => {
        dispatch({
            type: SUBIR_ARCHIVO
        })
        try {
            const resultado = await clienteAxios.post('/api/archivos', formData);
            dispatch({
                type: SUBIR_ARCHIVO_EXITO,
                payload: {
                    nombre: resultado.data.archivo,
                    nombre_original: nombreArchivo
                }
            })
        } catch (error) {
            dispatch({
                type: SUBIR_ARCHIVO_ERROR,
                payload: error.response.data.msg
            })
        }
    }
    return (
        <appContext.Provider
            value={{
                mensaje_archivo: state.mensaje_archivo,
                nombre: state.nombre,
                nombre_orginal: state.nombre_original,
                cargando: state.cargando,
                mostrarAlerta,
                subirArchivo
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export default AppState;