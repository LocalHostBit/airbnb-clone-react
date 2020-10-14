import React from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';



function Banner() {
    return (
        <div className='banner'>
            <div className='banner__info'>
                <h1>Viajar cerca esta de ~{'\n'} moda</h1>
                <h5>Cambia de escenario. Descubre alojamientos cercanos donde vivir, 
                    trabajar o simplemente relajarte.</h5>
                <Button variant="contained">Explora los alrededores</Button>
            </div>
        </div>
    )
}

export default Banner
