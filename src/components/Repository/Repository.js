import React from 'react';

import './Style.css';

function Repository({ handleRemoveRepository, data: { title, url, techs, id } }){

    return ( 
        <article>
            
            <section>
                <a href={url}>
                    {title}
                </a>
                <ul>
                    {techs.map( tech => {
                        return (
                            <li>
                            {tech}
                        </li> 
                        );
                    })}
                </ul>
            </section>

            <button onClick={() => handleRemoveRepository(id)}>
                Remover
            </button>
        </article>
     );
}

export default Repository;