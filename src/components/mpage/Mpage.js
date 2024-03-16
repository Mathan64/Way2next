import React from 'react';
import './Mpage.css';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
const Pagination = ({ text, onPrevClick, onNextClick }) => {
  return (
    <div className="pag">
      <div className="pag_pre" onClick={onPrevClick}>
        <GrFormPrevious/>
      </div>
      <div className="pag_text">
        {'<page 1>'}
      </div>
      <div className="pag_next" onClick={onNextClick}>
        <GrFormNext/>
      </div>
    </div>
  );
};

export default Pagination;
