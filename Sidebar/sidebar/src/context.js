import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{ // since we will wrap our whole app in app provider we wont 
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen , setIsModalOpen] = useState(false)
    
    const openSidebar = ()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
    } // why we need two , and not the toggle one , cause we have two diffrent buttons one inside the sidebar to close and one outside the side bar to open thats why we need to functionalities

    const openModal = ()=>{
        setIsModalOpen(true)
    }
    const closeModal = ()=>{
        setIsModalOpen(false)
    }

    return <AppContext.Provider value={{
        isModalOpen,isSidebarOpen,openModal,closeModal,closeSidebar,openSidebar
    }}>
        {children}
    </AppContext.Provider>
}
// custom hook // so that we dont have to import use context and appcontext in every component

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export{AppContext , AppProvider}