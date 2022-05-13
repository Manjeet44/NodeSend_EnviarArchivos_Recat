import React, {useContext} from 'react';
import authContext from '../context/auth/authContext';

const Alerta = () => {
    const AuthContext = useContext(authContext);
    const {mensaje} = AuthContext;
  return (
    <div className='bg-red-500 py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto'>
        {mensaje}

    </div>
  )
}

export default Alerta