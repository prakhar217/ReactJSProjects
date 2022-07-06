import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
// we cannot open modal from modal because the button is sitting in the Home component so cannot set up that state value in the modal
// we can set them up in App.js that way we would be doing prop drillingw
// the solution is ofc context api , this time we are gonna wrap whole app
import { AppContext , useGlobalContext} from './context'

const Home = () => {
  const {openSidebar , openModal} = useGlobalContext()
  // console.log(data);

  return <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
       <FaBars/>
    </button>
    <button className='btn' onClick={openModal}>
      Modal
    </button>
  </main>
}

export default Home
