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
                <div className="card__title">{ student.name }</div>
                
                <p className="card__text">
                  { showData ? student.win : student.loss }
                </p>
                <p className="card__text">
                  { student.feeling }
                </p>
                <div className="card__detail">
                  <p>{ student.age }</p>
                  <p>
                    { student.location }
                  </p>
                </div>
              </div>
            </div>
          </li>

        );




    }





export default Student;