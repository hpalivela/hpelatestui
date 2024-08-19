import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dash from './Dash';
import PoolPerform from './PoolPerform';
import Vms from './Vms';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="vms" element={<Vms />} />
        <Route path="poolperformance" element={<PoolPerform />} />
      </Routes>
    </Router>
  )
}
export default App

// import React from 'react'
// import Pract from './Pract'

// const App = () => {
//   return (
//     <div>
//       <Pract/>
//     </div>
//   )
// }

// export default App

