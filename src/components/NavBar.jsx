import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
            <div style={{padding: '1rem', backgroundColor: 'red', display: 'flex' , alignItems: 'center'}}>
            
                <a href="##" style={{margin: 'auto'}}>Inicio</a>
                <a href="##" style={{margin: 'auto'}}>Categorías</a>
                <a href="##" style={{margin: 'auto'}}>Carrito</a>
                <a href="##" style={{margin: 'auto'}}>Ingresar</a>

                <div style={{display: 'flex', margin: 'auto'}}>
                    <h3 style={{display: 'inline'}}>Comics Geek Cafe</h3>
                    <CartWidget />
                </div>
               

            </div>
            
        </>
    )
}

export default NavBar;
