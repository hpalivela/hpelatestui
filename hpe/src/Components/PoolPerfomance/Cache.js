import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import InfoIcon from '@mui/icons-material/Info';

const data = [
  {
    name: '27.june',
    uv: [0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6, 1.65],
    pv: [0.5, 0.55, 0.6, 1, 1.05,1,0.5,1,1.5,0.5,1,1.1,1.1,1.1,1.2,1.5,1.8,2.5,3,1.5,0.4,5,1,1.3]
  }, {
    name: '28.june',
    uv: [1.7, 1.75, 1.8, 1.85, 1.9, 1.95, 2.0, 2.05, 2.1, 2.15, 2.2, 2.25, 2.3, 2.35, 2.4, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75, 2.8, 2.85],
    pv: [1.1,1.1,1.2,1.5,1.8,2.5,3,1.5,0.4,5,1,1.3,0.5, 0.55, 0.6, 1, 1.05,1,0.5,1,1.5,0.5,1,5,4]
  }, {
    name: '29.june',
    uv: [2.9, 2.95, 3.0, 3.05, 3.1, 3.15, 3.2, 3.25, 3.3, 3.35, 3.4, 3.45, 3.5, 3.55, 3.6, 3.65, 3.7, 3.75, 3.8, 3.85, 3.9, 3.95, 4.0, 4.05],
    pv: [1,1.3,0.5, 0.55, 0.6, 1, 1.05,1.1,1.1,1.2,1.5,1.8,2.5,2.5,3,1.5,0.4,5,1,1.3,1.5,0.5,4,4.1]
  }, {
    name: '30.june',
    uv: [4.1, 4.15, 4.2, 4.25, 4.3, 4.35, 4.4, 4.45, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 4.95, 5.0, 5.05, 5.1, 5.15, 5.2, 5.25],
    pv: [1,1.1,1.1,1.1,1.2,1.5,1.8,0.6, 1, 1.05,1.1,1.1,1.2,1.5,1.8,5,1,1.3,1.5,0.5,4,4.1,2.5,3]
  }, {
    name: '1.july',
    uv: [5.3, 5.35, 5.4, 5.45, 5.5, 5.55, 5.6, 5.65, 5.7, 5.75, 5.8, 5.85, 5.9, 5.95, 6.0, 6.05, 6.1, 6.15, 6.2, 6.25, 6.3, 6.35, 6.4, 6.45],
    pv: [1,1.3,0.5, 0.55, 0.6, 1, 1.05,1.1,1.1,1.2,1.05,1.1,1.1,1.2,1.5,1.8,5,1,1.3,1.5,0.5,1,2,0]
  }, {
    name: '2.july',
    uv: [6.5, 6.55, 6.6, 6.65, 6.7, 6.75, 6.8, 6.85, 6.9, 6.95, 7.0, 7.05, 7.1, 7.15, 7.2, 7.25, 7.3, 7.35, 7.4, 7.45, 7.5, 7.55, 7.6, 7.65],
    pv: [0.5, 0.55, 0.6, 1, 1.05,1,0.5,1,1.5,0.5,1,1.1,1.1,1.1,1.2,1.5,1.8,2.5,3,1.5,0.4,5,1,1.3]
  }, {
    name: '3.july',
    uv: [7.7, 7.75, 7.8, 7.85, 7.9, 7.95, 8.0, 8.05, 8.1, 8.15, 8.2, 8.25, 8.3, 8.35, 8.4, 8.45, 8.5, 8.55, 8.6, 8.65, 8.7, 8.75, 8.8, 8.85],
    pv: [8.9, 8.95, 9.0, 9.05, 9.1, 9.15, 9.2, 9.25, 9.3, 9.35, 9.4, 9.45, 9.5, 9.55, 9.6, 9.65, 9.7, 9.75, 9.8, 9.85, 9.9, 9.95, 10.0, 10.05]
  }
];

export default class Cache extends PureComponent {
  
  render() {
    const flatArr = data.reduce((acc, currentVal) => {
      currentVal.uv.forEach((val, ind) => {
        acc.push({
          name: ind === 0 ? currentVal.name : '',
          uv: val,
          pv: currentVal.pv[ind] !== undefined ? currentVal.pv[ind] : null
        });
      });
      return acc;
    }, []);
    
    return (
      <div>
        <h5 style={{fontWeight:'bold'}}>Cache<InfoIcon style={{marginBottom:'4px',color:'grey'}}/></h5>
        <div style={{ width: '100%', height: 170 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
             syncId="ioChart"
              width={500}
              height={300}
              data={flatArr}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
                <XAxis dataKey="name" 
              interval={0} 
              angle={0} 
              textAnchor="end"
              // tickLine={false}
             />
              <YAxis label={{ value: '%', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="purple" dot={false} />
              {/* <Line type="monotone" dataKey="uv" stroke="#023020" dot={false} /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}