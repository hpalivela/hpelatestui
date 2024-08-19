import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import InfoIcon from '@mui/icons-material/Info';


const data = [
    {
        name: '27.june',
        uv: [0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.5]
    }, {
        name: '28.june',
        uv: [0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.5,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.2,0.2,0.3]
    }, {
        name: '29.june',
        uv: [0.3,0.1,0.8,0.2,0.2,0.5,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.1,0.2]
    }, {
        name: '30.june',
        uv: [0.2,0.2,0.5,0.2,0.2,0.2,0.8,0.2,0.2,0.1,0.8,0.2,0.5,0.2,0.2,0.2,0.2,0.2,0.3,0.1,0.2,0.3,0.1,0.8]
    }, {
        name: '1.july',
        uv: [0.2,0.2,0.5,0.2,0.2,0.2,0.8,0.2,0.2,0.1,0.8,0.2,0.5,0.8,0.2,0.2,0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.1]
    }, {
        name: '2.july',
        uv: [0.3,0.1,0.8,0.2,0.2,0.5,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.8,0.2,0.2,0.2,0.2,0.3,0.1,0.2,0.2,0.1]
    }, {
        name: '3.july',
        uv: [0.2,0.5,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.3,0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.4,0.4,0.9,0.5,0.74,0.2]
    }
];

export default class Cpu extends PureComponent {
    constructor(props){
  super(props)
  this.state={flatArr:[]}
    }
      componentDidMount(){
  
      const flatArr = data.reduce((acc, currentVal) => {
        currentVal.uv.forEach((val, ind) => {
          acc.push({
            name: ind === 0 ? currentVal.name : '',
            uv: val
          });
        });
        return acc;
      }, []);
  this.setState({flatArr})
      this.props.handleSendingProps(flatArr)
    }
  
      render() {
        const {flatArr}=this.state
        return (
          <div>
          <h5 style={{fontWeight:'bold'}}>CPU Utilization< InfoIcon style={{marginBottom:'4px',color:'grey'}}/></h5>
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
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" 
                interval={0} 
                angle={0} 
                textAnchor="end"
                // tickLine={false}
               />
              <YAxis label={{ value: '%', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dot={false}  dataKey="uv" stroke="#023020" />
            </LineChart>
          </ResponsiveContainer>
          </div>
          </div>
        );
      }
    }
