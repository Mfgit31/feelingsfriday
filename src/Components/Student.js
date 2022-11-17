import React, { useState } from 'react';

    function Student( {student} ){

        const [ showData, setShowData ] = useState( true )
        const toggleBio = () => {
            setShowData( !showData )
          }
        

        return (
            <li className="cards__item">
            <div className="card">
              <img onClick={ toggleBio }
                src={ student.image }
                alt={ student.name }
                className="card__image"
              />
              <div className="card__content">
                <div className="card__title">
                  <p>{ student.name }</p>
                  <p>{ student.age }</p>
                  <p>
                    { student.location }
                  </p>
                </div>
                
               
                <div>
                <p className="card__feeling">
                  { student.feeling }
                </p>
                </div>
                <div className="card__detail">
                 
                  <p className="card__detail">
                  { showData ? 
                  `Daily Win: 
                  ${student.win}` 
                  : 
                  `Daily Loss: 
                  ${student.loss}` 
                  }
                </p>
                </div>
              </div>
            </div>
          </li>

        );




    }





export default Student;