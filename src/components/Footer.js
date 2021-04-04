import React, { Component } from 'react'
import footer from "../components/img/footer.jpg";
export class Footer extends Component {
    render() {
        return (
            <footer>
                
                 <div className="formulaire">
                 <form>
                 <div className="rad">

                   <div class="form-check ">
                     <label class="form-check-label form-text" for="flexRadioDefault1">
                        Est-ce que vous avez déjà visitez la Tunisie?
                     </label> 
                    </div>
                 </div>
                    <div class="form-check ">
                 
                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                     <label class="form-check-label form-text" for="flexRadioDefault1"> Oui</label>
                    </div>
  
                   
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                      <label class="form-check-label form-text" for="flexRadioDefault2"> Non</label>
   
  
                     </div>

                   <div class="form-group">
                     <label for="exampleFormControlTextarea1 " className='form-text'>Vos avis?</label>
                    <textarea class="form-control area" id="exampleFormControlTextarea1" rows="3"></textarea>
                 

               </div>

               <button type="submit" class="btn btn-outline-dark button form-text">Submit</button>

             
                </form>
                </div>
            </footer>
        )
    }
}

export default Footer
