import React from 'react';

/* core */
import moment from 'moment';
import { VscBellDot } from 'react-icons/vsc';
import { MdLocalPostOffice } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';

/* style */
import '../index.css';


const ClockCard = () => {
    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear()

  return (
    <div className='clock-main-card'>
      <div className='inner-clock-card'>
        <h1>{moment().format("h:mm")}</h1>
        <h5>Monday</h5>
        <h6 style={{ color: 'gray' }}>{date} february {year}</h6>
        <div className='clock-card-icons'>
          <div className='clock-card-icon1'>
            <MdLocalPostOffice />
          </div>
          <div className='clock-card-icon2'>
            <VscBellDot />
          </div>
        </div>
        <div className='clock-dots'>
          <HiDotsHorizontal />
        </div>
      </div>
    </div>
  );
};

export default ClockCard;