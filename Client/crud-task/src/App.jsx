import { useState } from 'react'
import Employmanagement from './components/style/employDetails/Dashboard'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Addemployees from './components/style/employDetails/Addemployees'
import Editemployees from './components/style/employDetails/Editemployees'
import DashboardFront from './components/style/DashboardFront'

function App() {

  return (
    <>
    <Router>
      <Routes>

        <Route path='/' element={<DashboardFront/>}/>
        <Route path='/users' element={<Employmanagement/>}/>
        <Route path='/add' element={<Addemployees/>}/>
        <Route path='/edit/:id' element={<Editemployees/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
