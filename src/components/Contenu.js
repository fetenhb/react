import React from 'react'
import disco from "../components/img/disco.jpg";
import iles from "../components/img/iles.jpg";
import plage from "../components/img/plage.jpg";
import touriste from "../components/img/touriste.jpg";

const Contenu = () => {
    return (
        <div class="container-fluid cont">
	<div class="row">
		<div class="col-md-4 location-listing"> 
           <a className="location-title" href="#">A la plage </a>
                       <div class="location-image">
                          <a href="#">
                             <img src={plage} className="plage"></img>
                          </a>
                       </div>
         
		</div>
		<div class="col-md-8">
			<div class="row">
				<div class="col-md-6 location-listing">  
				
                <a className="location-title" href="#">Tour de tunisie des plages</a>
                       <div class="location-image">
                          <a href="#">
                             <img src={touriste} className="touriste"></img>
                          </a>
                       </div>
                </div>

				<div class="col-md-6 location-listing">
                <a className="location-title" href="#">Annimation non stop !</a>
                       <div class="location-image">
                          <a href="#">
                             <img src={disco} className="disco"></img>
                          </a>
                       </div>
                  
				</div>
			</div>

			<div class="row">
				<div class="col-md-12 location-listing">
                <a className="location-title" href="#">Les îles</a>
                       <div class="location-image">
                          <a href="#">
                             <img src={iles} className="iles"></img>
                          </a>
                       </div>
                   
				</div>
			</div>
		</div>
	</div>
</div>
    )
}

export default Contenu
