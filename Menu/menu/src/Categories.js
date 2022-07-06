import React from 'react';

const Categories = ({categories,filterItem}) => {
  return <div className='btn-container'>
    {/* <button className='filter-btn'onClick={()=> filterItem('all')}>All Items</button>
    <button className='filter-btn' onClick={()=>filterItem('breakfast')}>breakfast</button> * there are two issues 1. we wont have button/functionality for all 2. we are not in sync in with our data thats simply means if we get new vcategory we wont handle it */}

    {categories.map((category,index)=>{
      return <button type='button' className='filter-btn' key={index} onClick={()=>filterItem(category)}>{category}</button>
    })}
  </div>;
};

export default Categories;
