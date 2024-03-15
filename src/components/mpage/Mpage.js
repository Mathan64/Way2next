import React from 'react';
import './Mpage.css';
import prevIcon from './iconsforp/pp.png';
import nextIcon from './iconsforp/np.png';
const Pagination = ({ text, onPrevClick, onNextClick }) => {
  return (
    <div className="pag">
      <div className="pag_pre" onClick={onPrevClick}>
        <img src={prevIcon} alt="Previous" />
      </div>
      <div className="pag_text">
        {'page 1'}
      </div>
      <div className="pag_next" onClick={onNextClick}>
        <img src={nextIcon} alt="Next" />
      </div>
    </div>
  );
};

export default Pagination;
