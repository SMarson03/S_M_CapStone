import React from 'react'
import { Route, Routes as R } from 'react-router-dom'
import{SignUp, Login, Home, Arts, Restaurants, Event} from './index'
import SearchResults from './SearchResults';

function Routes() {
  return (
    <>
    <R>
        
        <Route path='/' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Arts' element={<Arts/>}/>
        <Route path='/Restaurants' element={<Restaurants/>}/>
        <Route path='/Event' element={<Event/>}/>
        <Route path='/SearchResults/:id' element={<SearchResults />}/>
        
    </R>
    </> 
 )
}

export default Routes
