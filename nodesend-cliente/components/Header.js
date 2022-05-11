import React from 'react';
import Link from 'next/link';


const Header = () => {
  return (
    <header className='py-8 flex flex-col md:flex-row items-center justify-between'>
        <Link href='/'>
            <img className='w-64 mb-8 md:mb-0 cursor-pointer' src='logo.svg' />
        </Link>

        <div>
            <Link href='/login'>
                <a className='bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2'>Iniciar Sesion</a>
            </Link>

            <Link href='/crearcuenta'>
                <a className='bg-black px-5 py-3 rounded-lg text-white font-bold uppercase'>Crear Cuenta</a>
            </Link>
        </div>
    </header>
  )
}

export default Header