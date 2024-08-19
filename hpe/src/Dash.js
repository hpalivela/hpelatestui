// import React from 'react'
// import './App.css';
// import './Dash.css'
// import {  Link } from 'react-router-dom';
// import TotalChart from './Components/Dashboard/Perfomancelinecharts/TotalChart';
// import TotalBars from './Components/Dashboard/Latency&iopsbarcharts/TotalBars';
// import SystemMonitors from './Components/Dashboard/Perfomancelinecharts/SystemsHeart/SystemMonitors';
// import DiagPie from './Components/Dashboard/Piechartsrecomendation/DiagPie';
// const Dash = () => {
//   return (
//     <div style={{ backgroundColor: '#E5E4E2' }}>
//     {/* <h1 >Dashboard</h1> */}
//     <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }} className='nav-link'>
//         <nav className='d-flex' style={{padding:'10px',justifyContent:'space-between'}}>
//           <div>
//           <Link to="/" className="nav-link" style={{fontSize:'20px',margin:'5px',fontFamily:'sans-serif'}}>Dashboard</Link>
//           </div>
//           <div className='d-flex'>
//           <Link to="/vms" className="nav-link" style={{fontSize:'20px',margin:'5px',fontFamily:'sans-serif'}}><button className='but'>Vms</button></Link>
//           <Link to="/poolperformance" className="nav-link" style={{fontSize:'20px',margin:'5px',fontFamily:'sans-serif'}}><button className='but'>PoolPerformance </button></Link>
//           </div>
//         </nav>
//         </div>
//     <div className='d-flex'>
//       <div>
//         <div className='Card1'>
//           <TotalChart />
//         </div>
//         <div className='Card2'>
//           <TotalBars />
//         </div>
//       </div>
      
//       <div>
//         <div className='Card4'>
//           <SystemMonitors />
//         </div>
//         <div className='Card3'>
//           <DiagPie />
//         </div>
//       </div>

//     </div>
//   </div>
//   )
// }

// export default Dash


import React, { useState, useRef } from 'react';
import './App.css';
import './Dash.css';
import { Link } from 'react-router-dom';
import TotalChart from './Components/Dashboard/Perfomancelinecharts/TotalChart';
import TotalBars from './Components/Dashboard/Latency&iopsbarcharts/TotalBars';
import SystemMonitors from './Components/Dashboard/SystemsHeart/SystemMonitors';
import DiagPie from './Components/Dashboard/Piechartsrecomendation/DiagPie';

const Dash = () => {
  const [leftWidth, setLeftWidth] = useState(60); // Initial width of the first column
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (isResizing.current) {
      const newLeftWidth = (e.clientX / window.innerWidth) * 100;
      setLeftWidth(Math.max(0, Math.min(newLeftWidth, 100)));
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#E5E4E2' }}>
      <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center',height:'45px', }} className='nav-link'>
        <nav className='d-flex' style={{ padding: '10px', justifyContent: 'space-between' }}>
          <div>
            <Link to="/" className="nav-link" style={{ fontSize: '20px', margin: '5px', fontFamily: 'sans-serif' }}>Dashboard</Link>
          </div>
          <div className='d-flex'>
            <Link to="/vms" className="nav-link" style={{ fontSize: '20px', margin: '5px', fontFamily: 'sans-serif' }}>
              <button className='but'>Vms</button>
            </Link>
            <Link to="/poolperformance" className="nav-link" style={{ fontSize: '20px', margin: '5px', fontFamily: 'sans-serif' }}>
              <button className='but'>PoolPerformance</button>
            </Link>
          </div>
        </nav>
      </div>
      <div className='d-flex' style={{ display: 'flex' }}>
        <div style={{ width: `${leftWidth}%` }}>
          <div className='Card1'>
            <TotalChart />
          </div>
          <div className='Card2'>
            <TotalBars />
          </div>
        </div>
        <div className='divider' onMouseDown={handleMouseDown}></div>
        <div style={{ width: `${100 - leftWidth}%` }}>
          <div className='Card4'>
            <SystemMonitors />
          </div>
          <div className='Card3'>
            <DiagPie />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;


