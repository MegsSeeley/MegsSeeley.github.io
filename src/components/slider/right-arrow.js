import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Rightarrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <FontAwesomeIcon icon={faArrowRight} style={{fontSize:'large'}}/>
    </div>
  );
}

export default Rightarrow;
