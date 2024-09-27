import React from 'react'
import { Route, Routes as R } from 'react-router-dom'
import{SignUp, Login, Home, Arts, Restaurants, Event} from './index'

function Routes() {
  return (
    <>
    <R>
        
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Arts' element={<Arts/>}/>
        <Route path='/Restaurants' element={<Restaurants/>}/>
        <Route path='/Event' element={<Event/>}/>
        
    </R>
    </> 
 )
}

export default Routes
