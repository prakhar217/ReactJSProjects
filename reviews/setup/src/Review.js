import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name,job,image,text} = people[index]

  const nextPerson = ()=>{
    setIndex((index)=>{
      let newIndex = index+1;
          if(newIndex>3){
        return 0;
      }
      return newIndex
    })
  }
    const prevPerson = ()=>{
    setIndex((index)=>{
      let newIndex = index-1;
      if(newIndex<0){
        return 3;
      }
      return newIndex
    })
  }
  return <>
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name}  className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
         <button className='random-btn'>Suprise me</button>
    </article>
  </>;
};

export default Review;
