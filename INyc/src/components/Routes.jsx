import React from 'react'
import { Route, Routes as R } from 'react-router-dom'
import{SignUp, Home, Arts, Restaurants, Event} from './index'

function Routes() {
  return (
    <>
    <R>
        
        <Route path='/' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/arts' element={<Arts/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='/event' element={<Event/>}/>
        
    </R>
    </> 
 )
}

export default Routes
