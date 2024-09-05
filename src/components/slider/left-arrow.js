import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Leftarrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <FontAwesomeIcon icon={faArrowLeft} style={{fontSize:'large'}}/>
    </div>
  );
}

export default Leftarrow;