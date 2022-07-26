import React from "react";

const Jsx = () => {
//    const saludo = 'Hola JSX'
const temperatura = 21;
   

    return (
         <div>
               <h3>Frio o calor?</h3>
            <h4>
                {
                    temperatura > 20 ? 'Calor' : 'Frio'
                }
            </h4>



         </div>
         

  


    );
}

export default Jsx;