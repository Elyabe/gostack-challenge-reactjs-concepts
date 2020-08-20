import React from 'react';

function Repository({ onClick }){

    return ( 
        <div>
            Repositório 1

            <button onClick={onClick}>
                Remover
            </button>
        </div>
     );
}

export default Repository;