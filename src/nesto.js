import React from 'react';

const Nesto = ({nestos, deleteNinja}) => {
    
        //const { nestos } = props; //object destructuring
        
        return(
                <div className = "nesto-list">
                    { 
            nestos.map(nesto => {    //ternary operator
                return nesto.Age > 20 ? (  
                <div className = "nesto" key = {nesto.id}>
                <div>Name: { nesto.Name }</div>
                <div>Age: { nesto.Age }</div>
                <div>Hobbie: { nesto.Hobbie }</div>
                <button onClick={() => {deleteNinja(nesto.id)}}>Delete Ninja</button>
                 
                </div>
            ) : null;
        })
        } 
                </div>
        )
    }

export default Nesto;