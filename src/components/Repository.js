import React from 'react';

function Repository({ handleRemoveRepository, title, url, techs, id }){

    return ( 
        <div>
            {title}

            <button onClick={() => handleRemoveRepository(id)}>
                Remover
            </button>
        </div>
     );
}

export default Repository;