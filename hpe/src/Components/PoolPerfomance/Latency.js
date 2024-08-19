import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: '27.june',
      uv: [0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.5],
      pv: [0.5, 0.55, 0.6, 1, 1.05,1,0.5,1,1.5,0.5,1,1.1,1.1,1.1,1.2,1.5,1.8,2.5,3,1.5,0.4,5,1,1.3]
    }, {
      name: '28.june',
      uv: [0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.5,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.2,0.2,0.3],
      pv: [1.1,1.1,1.2,1.5,1.8,2.5,3,1.5,0.4,5,1,1.3,0.5, 0.55, 0.6, 1, 1.05,1,0.5,1,1.5,0.5,1,5,4]
    }, {
      name: '29.june',
      uv: [0.3,0.1,0.8,0.2,0.2,0.5,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.2,0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.1,0.2],
      pv: [1,1.3,0.5, 0.55, 0.6, 1, 1.05,1.1,1.1,1.2,1.5,1.8,2.5,2.5,3,1.5,0.4,5,1,1.3,1.5,0.5,4,4.1]
    }, {
      name: '30.june',
      uv: [0.2,0.2,0.5,0.2,0.2,0.2,0.8,0.2,0.2,0.1,0.8,0.2,0.5,0.2,0.2,0.2,0.2,0.2,0.3,0.1,0.2,0.3,0.1,0.8],
      pv: [1,1.1,1.1,1.1,1.2,1.5,1.8,0.6, 1, 1.05,1.1,1.1,1.2,1.5,1.8,5,1,1.3,1.5,0.5,4,4.1,2.5,3]
    }, {
      name: '1.july',
      uv: [0.2,0.2,0.5,0.2,0.2,0.2,0.8,0.2,0.2,0.1,0.8,0.2,0.5,0.8,0.2,0.2,0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.1],
      pv: [1,1.3,0.5, 0.55, 0.6, 1, 1.05,1.1,1.1,1.2,1.05,1.1,1.1,1.2,1.5,1.8,5,1,1.3,1.5,0.5,1,2,0]
    }, {
      name: '2.july',
      uv: [0.3,0.1,0.8,0.2,0.2,0.5,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.8,0.2,0.2,0.2,0.2,0.3,0.1,0.2,0.2,0.1],
      pv: [0.5, 0.55, 0.6, 1, 1.05,1,0.5,1,1.5,0.5,1,1.1,1.1,1.1,1.2,1.5,1.8,2.5,3,1.5,0.4,5,1,1.3]
    }, {
      name: '3.july',
      uv: [0.2,0.5,0.2,0.2,0.2,0.2,0.3,0.1,0.8,0.2,0.3,0.1,0.8,0.2,0.2,0.2,0.2,0.3,0.4,0.4,0.9,0.5,0.74,0.2],
      pv: [1,1.1,1.1,1.1,1.2,1.5,1.8,0.6, 1, 1.05,1.1,1.1,1.2,1.5,1.8,5,1,1.3,1.5,0.5,4,4.1,2.5,3]
    }
  ];

  // export default class Latency extends PureComponent {
  //   render() {
  //     const flatArr = data.reduce((acc, currentVal) => {
  //       currentVal.uv.forEach((val, ind) => {
  //         acc.push({
  //           name: ind === 0 ? currentVal.name : '',
  //           uv: val,
  //           pv: currentVal.pv[ind] !== undefined ? currentVal.pv[ind] : null
  //         });
  //       });
  //       return acc;
  //     }, []);
      
  //     return (
  //       <div>
  //         <h5 style={{fontWeight:'bold'}}>Latency</h5>
  //         <div style={{ width: '100%', height: 170 }}>
  //         <h6 style={{ marginLeft: '100px' }}>Read/Write Latency</h6>
  //           <ResponsiveContainer width="100%" height="100%">
  //             <LineChart
  //              syncId="ioChart"
  //               width={500}
  //               height={300}
  //               data={flatArr}
  //               margin={{
  //                 top: 5,
  //                 right: 30,
  //                 left: 20,
  //                 bottom: 5,
  //               }}
  //             >
  //                <XAxis dataKey="name" 
  //             interval={0} 
  //             angle={0} 
  //             textAnchor="end"
  //             // tickLine={false}
  //            />
  //               <YAxis label={{ value: 'ms', angle: -90, position: 'insideLeft' }} />
  //               <Tooltip />
  //               <Legend />
  //               <Line type="monotone" dataKey="pv" stroke="#023020" dot={false} />
  //               <Line type="monotone" dataKey="uv" stroke="purple" dot={false} />
  //             </LineChart>
  //           </ResponsiveContainer>
  //         </div>
  //       </div>
  //     );
  //   }
  // }



  export default class Latency extends PureComponent {
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
          <h5 style={{fontWeight:'bold'}}>Latency</h5>
          <div style={{ width: '100%', height: 170 }}>
          <h6 style={{ marginLeft: '100px' }}>Read/Write Latency</h6>
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
                <YAxis label={{ value: 'ms', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                
                <Line type="monotone" dataKey="uv" stroke="purple" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    }
  }
