import React from 'react';

function Repository({ onClick, title, url, techs, id }){

    return ( 
        <div>
            {title}

            <button onClick={onClick}>
                Remover
            </button>
        </div>
     );
}

export default Repository;