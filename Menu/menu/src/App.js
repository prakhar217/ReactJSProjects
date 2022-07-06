import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories =['all' , ...new Set( items.map((item)=>item.category) )]// this way we will get all the values of category key
// console.log(allCategories); // now even here we will get three buttons for breakfast cause they are repeating'


function App() {
  const [menuItems , setMenuItems] = useState(items)
  const [categories , setCategories] = useState(allCategories)

  const filterItem = (category)=>{
    if(category === 'all'){
      setMenuItems(items)
      return   // i missed a return from here  // sincee we are calling this function somewhere else we do need a return
    }
 
    const newItems = items.filter((item)=>item.category === category)
    setMenuItems(newItems)
  }
  return <>
    <section className='menu section'>
      <div className='title'>
      <h2>Our Menu</h2>
      <div className="underline"></div>
      </div>
    <Categories categories = {categories} filterItem = {filterItem}/>
    <Menu item = {menuItems}/>

    </section>
  </>;
}

export default App;
