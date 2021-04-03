import React from 'react'
import tunisie from '../components/img/tunisie.jpg'
const Apropos = () => {
    return (
        <div className='a-propos'>
            <div className='info'>
                <h1>la tunisie</h1>
                <p> La Tunisie est un pays d'Afrique du Nord situé sur la côte méditerranéenne et en bordure du désert du Sahara. 
                    Le musée national du Bardo à Tunis, la capitale, expose des pièces archéologiques allant des mosaïques  romaines à l'art islamique. 
                    Le quartier de la Médina, avec son souk animé, encercle l'imposante mosquée  Zitouna. À l'est, sur le site de l'ancienne cité de Carthage, 
                    se trouvent les thermes d'Antonin et d'autres  ruines, et le musée national de Carthage et ses nombreux objets. </p>
            </div>
            <div className='photo-tunisie'>
             <img src={tunisie}></img>
            </div>
        </div>
    )
}

export default Apropos
