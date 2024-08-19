// import React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import './DiagPie.css';
// const data = [
//     { id: 0, value: 10, label: 'series A' },
//     { id: 1, value: 15, label: 'series B' },
//     { id: 2, value: 20, label: 'series C' },
//     { id: 3, value: 25, label: 'series D' },
//     { id: 4, value: 30, label: 'series E' },
// ];

// const DiagPie = () => {
//     return (
//         <div>
//         <h3>Recommended Actions</h3>
//         <center>
//         <div className='pieCard'>
//             <div className='pieChartContainer'>
//                 <h3>Diagnoses Type By Score</h3>
//                 <PieChart
//                     series={[
//                         {
//                             data,
//                             highlightScope: { faded: 'global', highlighted: 'item' },
//                             faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
//                         },
//                     ]}
//                     height={195}
//                 />
//             </div>
//         </div>
//         <div className='pieCard'>
//             <div className='pieChartContainer'>
//             <h3>Diagnoses Type By Score</h3>
//                 <PieChart
//                     series={[
//                         {
//                             data,
//                             highlightScope: { faded: 'global', highlighted: 'item' },
//                             faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
//                         },
//                     ]}
//                     height={195}
//                 />
//             </div>
//         </div>
//         </center>
//         </div>
//     );
// }

// export default DiagPie;


// import React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import './DiagPie.css';

// const data = [
//     { id: 0, value: 10, label: 'series A' },
//     { id: 1, value: 15, label: 'series B' },
//     { id: 2, value: 20, label: 'series C' },
//     { id: 3, value: 25, label: 'series D' },
//     { id: 4, value: 50, label: 'series E' },
// ];

// const DiagPie = () => {
//     return (
//         <div className="diag-pie">
//             <h3 >Recommended Actions</h3>
//             <div className="pie-cards">
//                 <div className='pie-card'>
//                     <div className='pie-chart-container'>
//                         <center>
//                         <h4>Diagnoses Type By Score</h4>
//                         </center>
//                         <PieChart
//                          margin={{ top: 1, bottom: 23, left: 15, right:15 }}
//                          slotProps={{
//                             legend: {
//                               direction: 'row',
//                               position: { vertical: 'bottom', horizontal: 'middle' },
//                               padding: 0,
//                             },
//                           }}
//                             series={[
//                                 {
//                                     data,
//                                     highlightScope: { faded: 'global', highlighted: 'item' },
//                                     faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
//                                 },
//                             ]}
//                             height={205}
//                         />
//                     </div>
//                 </div>
//                 <div className='pie-card'>
//                     <div className='pie-chart-container'>
//                         <center>
//                         <h4 >Diagnoses Type By Score</h4>
//                         </center>
//                         <PieChart
//                          margin={{ top: 1, bottom: 23, left: 15, right:15 }}
//                          slotProps={{
//                             legend: {
//                               direction: 'row',
//                               position: { vertical: 'bottom', horizontal: 'middle' },
//                               padding: 0,
//                             },
//                           }}
//                             series={[
//                                 {
//                                     data,
//                                     highlightScope: { faded: 'global', highlighted: 'item' },
//                                     faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
//                                 },
//                             ]}
//                             height={205}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DiagPie;


import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './DiagPie.css';

const data1 = [
    { id: 0, value: 5, label: 'series A', color: 'blue' },
    { id: 1, value: 10, label: 'series B', color: 'green' },
    { id: 2, value: 15, label: 'series C', color: 'orange' },
    { id: 3, value: 25, label: 'series D', color: '#FFCE56' },
    { id: 4, value: 50, label: 'series E', color: 'red' },
];

const data2 = [
    { id: 0, value: 15, label: 'series F', color: 'blue' },
    { id: 1, value: 30, label: 'series G', color: 'green' },
    { id: 2, value: 15, label: 'series H', color: 'orange' },
    { id: 3, value: 40, label: 'series I', color: '#FFCE56' },
    { id: 4, value: 5, label: 'series J', color: 'red' },
];



const DiagPie = () => {
    return (
        <div className="diag-pie">
            <h3>Recommended Actions</h3>
            <div className="pie-cards">
                <div className='pie-card'>
                    <div style={{ marginTop: '35px' }}>
                        <center>
                            <h4>Diagnoses Type By Score</h4>
                        </center>
                        <PieChart
                            margin={{ top: 1, bottom: 23, left: 15, right: 15 }}
                            slotProps={{
                                legend: { hidden: true },
                            }}
                            series={[
                                {
                                    data: data1,
                                    highlightScope: { faded: 'global', highlighted: 'item' },
                                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                },
                            ]}
                            height={220}
                        />
                    </div>
                </div>
                <div className='d-flex'>
                <div className='d-flex' style={{ marginLeft:'100px',marginTop:'20px'}}>
                    <div>
                        <div style={{ backgroundColor: 'red', borderStyle: 'solid', borderWidth: '0px', height: '20px', width: '20px', marginBottom: '5px' }}><span style={{ marginLeft: '30px', fontSize: 'bold', fontFamily: 'sans-serif' }}>DiagnosesA</span></div>
                        <div style={{ backgroundColor: '#FFCE56', borderStyle: 'solid', borderWidth: '0px', height: '20px', width: '20px', marginBottom: '5px' }}><span style={{ marginLeft: '30px', fontSize: 'bold', fontFamily: 'sans-serif' }}>DiagnosesB</span></div>
                        <div style={{ backgroundColor: 'orange', borderStyle: 'solid', borderWidth: '0px', height: '20px', width: '20px', marginBottom: '5px' }}><span style={{ marginLeft: '30px', fontSize: 'bold', fontFamily: 'sans-serif' }}>DiagnosesC</span></div>
                    </div>
                </div>
                <div className='d-flex' style={{marginRight:'200px',marginTop:'35px'}}>
                    <div>
                        <div style={{ backgroundColor: 'green', borderStyle: 'solid', borderWidth: '0px', height: '20px', width: '20px', marginBottom: '5px' }}><span style={{ marginLeft: '30px', fontSize: 'bold', fontFamily: 'sans-serif' }}>DiagnosesD</span></div>
                        <div style={{ backgroundColor: 'blue', borderStyle: 'solid', borderWidth: '0px', height: '20px', width: '20px', marginBottom: '5px' }}><span style={{ marginLeft: '30px', fontSize: 'bold', fontFamily: 'sans-serif' }}>DiagnosesE</span></div>
                    </div>
                </div>
                </div>
                <div>
                    <div className='pieChartContainer'>
                        <center>
                            <h4>Diagnoses Type By Score</h4>
                        </center>
                        <PieChart
                            margin={{ top: 1, bottom: 23, left: 15, right: 15 }}
                            slotProps={{
                                legend: { hidden: true },
                            }}
                            series={[
                                {
                                    data: data2,
                                    highlightScope: { faded: 'global', highlighted: 'item' },
                                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                },
                            ]}
                            height={220}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiagPie;
