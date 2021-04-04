import React, { Component } from 'react'
import marathon from "../components/img/marathon.jpg";

export class Event1 extends Component {
    render() {
        return (
            <div class="container-fluid event" id="marathon">
	<div class="row">
		<div class="col-md-4"> 
        <img src={marathon} className="marathon"></img>
		</div>
		<div class="col-md-8 marathon-info"> 
       <p>   
        S’imposant comme l’un des événements sportifs majeurs en Tunisie, Marathon COMAR de la ville de Tunis,
         est un rendez-vous sportif annuel très attendu qui draine plus de 2500 athlètes, amateurs et professionnels,
          tunisiens et étrangers venant participer aux trois courses programmées, à savoir 
          : Le Marathon, le semi-Marathon et la course pour tous.</p>   

      <p>
       Pour l’année 2019, La 34ème édition du Marathon aura lieu le dimanche 01 décembre 2019 avec trois courses à la clé.
       Il y aura le traditionnel marathon sur 42,195 kilomètres, le semi-marathon sur 21,1 kilomètres et la course 
     pour tous qui donne sa dimension populaire à l’événement.
     </p>

     <p>
    Inscrit dans le calendrier international de l’Association internationale des fédérations d’athlétisme,
     Marathon COMAR Tunis-Carthage est placé, désormais, au même rang que les plus fameux marathons au monde
     , à l’instar de Marathon de Tokyo, Marathon de Londres, Marathon de Boston et autres.
     </p>
     <p>
Les inscriptions se feront comme chaque année au siège de la COMAR, Avenue Habib BOURGUIBA - Tunis, et ce, du 19 au 30 novembre 2019. 
</p>
		</div>
	</div>
</div>
        )
    }
}

export default Event1
