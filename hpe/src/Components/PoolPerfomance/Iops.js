import React, { PureComponent, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,Cell } from 'recharts';
import InfoIcon from '@mui/icons-material/Info';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import './Iops.css';
import SideBar from './SideBar';
import Latency from './Latency';
import Cache from './Cache';
import Cpu from './Cpu';
import Customize from './Customize';

const randomData = [
  {
    name: '27.june',
    uv: [800, 1500, 2200, 1100, 1300, 4700, 500, 3400, 900, 2000, 6800, 1700, 2500, 9600, 1800, 1600, 5500, 1900, 2100, 7100, 2300, 6400, 2500, 2700]
  },
  {
    name: '28.june',
    uv: [900, 3100, 2700, 3600, 1300, 4800, 2900, 1700, 3000, 3300, 2000, 3900, 4300, 8600, 4700, 5000, 2200, 5400, 5800, 3700, 6200, 5100, 6600, 7000]
  },
  {
    name: '29.june',
    uv: [1000, 1400, 3100, 1700, 1200, 5300, 4600, 6500, 1600, 1900, 4700, 2100, 2500, 9200, 2800, 3000, 7400, 3200, 3400, 6200, 3600, 4100, 3800, 4000]
  },
  {
    name: '30.june',
    uv: [1100, 3200, 2900, 3700, 1500, 8700, 4100, 1400, 3100, 3400, 7200, 4000, 4400, 5600, 4800, 5100, 9000, 5500, 5900, 6300, 6700, 6800, 7100, 6500]
  },
  {
    name: '1.july',
    uv: [1200, 1500, 4500, 1800, 1300, 7800, 8100, 4700, 1700, 2000, 8600, 2200, 2600, 6900, 2900, 3100, 5500, 3300, 3500, 8800, 3700, 6600, 3900, 4100]
  },
  {
    name: '2.july',
    uv: [1300, 3300, 3000, 3800, 1600, 7800, 4400, 1500, 3200, 3500, 7000, 4100, 4500, 9000, 4900, 5200, 7500, 5600, 6000, 9100, 6400, 7200, 6800, 7400]
  },
  {
    name: '3.july',
    uv: [1400, 1600, 4500, 1900, 1400, 8300, 8600, 5100, 1800, 2100, 9400, 2300, 2700, 7900, 3000, 3200, 5500, 3400, 3600, 8100, 3800, 7200, 4000, 4200]
  }
];

const sequentialData = [
  {
    name: '27.june',
    uv: [3000, 4000, 500, 2600, 1800, 9300, 5400, 6900, 2150, 3100, 4400, 3100, 3500, 8700, 2500, 2700, 5200, 3100, 3900, 7200, 3200, 6700, 3400, 3600]
  },
  {
    name: '28.june',
    uv: [3200, 5000, 700, 3700, 2200, 8600, 5700, 1500, 4100, 4600, 9200, 5000, 5400, 9300, 6000, 6500, 7500, 6900, 7500, 9400, 8200, 9700, 8800, 9500]
  },
  {
    name: '29.june',
    uv: [2800, 2000, 4400, 2200, 1700, 8400, 9100, 4700, 1750, 2700, 6500, 2900, 3500, 9100, 3800, 4000, 9200, 4400, 4600, 6300, 4800, 9000, 5000, 5200]
  },
  {
    name: '30.june',
    uv: [3100, 5200, 600, 3800, 2400, 8400, 5400, 1200, 4400, 4900, 6800, 5300, 5800, 9400, 6400, 6900, 7400, 7500, 8100, 8800, 9400, 9700, 10000, 11000]
  },
  {
    name: '1.july',
    uv: [3500, 2600, 4500, 2700, 2000, 9400, 9700, 4700, 1850, 3100, 6900, 3300, 3700, 8400, 4100, 4300, 4700, 4900, 5100, 9100, 5300, 9200, 5300, 5500]
  },
  {
    name: '2.july',
    uv: [3700, 5400, 800, 4000, 2600, 9000, 7000, 1600, 4700, 5200, 6300, 5700, 6200, 9800, 6700, 7300, 7500, 7900, 8600, 8100, 9200, 9400, 9800, 10500]
  },
  {
    name: '3.july',
    uv: [4000, 2800, 9300, 2900, 2200, 8900, 9500, 9200, 1950, 3300, 6800, 3500, 3900, 9200, 4400, 4600, 5000, 5200, 5400, 8100, 5600, 9400, 5800, 6000]
  }
];

const writeData = [
  {
    name: '27.june',
    uv: [5000, 6000, 4000, 2600, 3800, 8700, 9000, 8400, 3450, 4300, 7000, 4600, 5000, 9500, 4900, 5100, 6900, 5300, 5700, 9200, 5900, 7200, 6100, 6300]
  },
  {
    name: '28.june',
    uv: [5200, 7100, 5500, 7000, 3500, 7800, 8700, 2200, 4500, 6000, 9300, 6700, 7200, 9400, 7800, 8500, 9000, 9100, 9800, 10400, 10200, 9700, 10800, 11500]
  },
  {
    name: '29.june',
    uv: [5800, 3100, 9100, 3600, 1900, 9500, 8600, 7400, 2550, 3400, 7200, 3700, 4100, 9300, 4400, 4600, 6800, 4800, 5200, 8200, 5400, 7100, 5600, 5800]
  },
  {
    name: '30.june',
    uv: [6100, 7200, 6600, 7100, 3600, 8900, 9500, 2300, 5600, 7100, 6800, 6800, 7300, 9700, 7900, 8600, 9000, 9200, 9900, 10300, 10900, 8100, 10900, 11600]
  },
  {
    name: '1.july',
    uv: [6500, 3200, 9400, 2700, 3000, 8800, 8100, 8900, 3650, 4500, 8700, 4800, 5200, 9000, 4100, 4300, 4700, 4900, 5100, 9100, 5300, 9000, 5300, 5500]
  },
  {
    name: '2.july',
    uv: [6700, 8300, 6700, 8200, 3700, 7100, 7800, 2400, 6700, 8200, 7500, 6900, 7400, 9800, 8000, 8700, 9300, 10000, 9200, 10400, 11000, 9400, 11000, 11700]
  },
  {
    name: '3.july',
    uv: [7000, 4300, 9300, 3800, 3100, 7800, 8600, 9100, 3750, 4600, 7100, 4900, 5300, 9400, 5200, 5400, 5800, 6000, 6200, 9100, 6400, 9300, 6400, 6600]
  }
];


  const flattenData = (data) => {
    return data.reduce((acc, currentVal) => {
      currentVal.uv.forEach((val, ind) => {
        acc.push({
          name: ind === 0 ? currentVal.name : '',
          uv: val
        });
      });
      return acc;
    }, []);
  };
  
  const flatRandomData = flattenData(randomData);
  const flatSequentialData = flattenData(sequentialData);
  const flatWriteData = flattenData(writeData);
  
  const SynchronizedCharts = ({ flatRandomData, flatSequentialData, flatWriteData }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [popoverContent, setPopoverContent] = useState({});
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [modalContent, setModalContent] = useState({});
    const[cpudata,setCpudata]=useState([])
    const[latencydata,setLatencydata]=useState([])
    const handleCpuProps=(value)=>{
      console.log(value,"value")
      setCpudata(value)
  }
  console.log(cpudata,'cpu')
  const handleLatencyProps=(value)=>{
    setLatencydata(value)
  }
  const handlePopoverOpen = (event, index) => {
      if (
        index < 0 ||
        index >= flatRandomData.length ||
        index >= flatSequentialData.length ||
        index >= flatWriteData.length ||
        index >= cpudata.length ||
        index >= latencydata.length
      ) {
        console.error('Index out of bounds or missing data');
        return;
      }
  
      const randomItem = flatRandomData[index];
      const sequentialItem = flatSequentialData[index];
      const writeItem = flatWriteData[index];
      const cpuItem = cpudata[index];
      const latencyItem=latencydata[index]
      console.log(cpuItem)
  
      setPopoverContent({
        date: randomItem.name,
        randomValue: randomItem.uv,
        sequentialValue: sequentialItem.uv,
        writeValue: writeItem.uv,
        cpuValue: cpuItem.uv,
        latencyUVValue: latencyItem.uv,
        latencyPVValue: latencyItem.pv,
      });
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  
    // const handleMouseMove = (index) => {
    //   const randomItem = flatRandomData[index];
    //   const sequentialItem = flatSequentialData[index];
    //   const writeItem = flatWriteData[index];
  
    //   if (!randomItem || !sequentialItem || !writeItem) {
    //     console.error('Item is missing or index out of bounds');
    //     return;
    //   }
  
    //   setModalContent({
    //     date: randomItem.name,
    //     randomValue: randomItem.uv,
    //     sequentialValue: sequentialItem.uv,
    //     writeValue: writeItem.uv,
    //   });
    //   setModalIsOpen(true);
    // };
  
    return (
      <div className='d-flex'>
        <div style={{ width: '100%' }}>
          <div style={{ margin: '30px' }}>
            <Customize />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                IOPS
              </Typography>
                <InfoIcon style={{ marginBottom: '4px', color: 'grey' }} />
            </div>
            <div style={{ marginBottom: '-100px' }}>
              <h6 style={{ marginLeft: '100px' }}>Random Read</h6>
              <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer width="100%" height={170}>
                  <BarChart
                    // onMouseMove={(state) => handleMouseMove(state.activeTooltipIndex)}
                    // onClick={(state) => handleClick(state.activeTooltipIndex)}
                    syncId="ioChart"
                    width={500}
                    height={300}
                    data={flatRandomData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    barCategoryGap='0%'
                    barGap='0%'
                  >
                    <XAxis
                      dataKey="name"
                      interval={0}
                      angle={0}
                      textAnchor="end"
                    />
                    <YAxis label={{ value: 'IO/sec', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="lightgrey" barSize={-5}>
                      {flatRandomData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          onMouseEnter={(e) => handlePopoverOpen(e, index)}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div style={{ marginBottom: '-100px' }}>
              <h6 style={{ marginLeft: '100px' }}>Sequential Read</h6>
              <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer width="100%" height={170}>
                  <BarChart
                    // onMouseMove={handleMouseMove}
                    // onClick={(state) => handleClick(state.activeTooltipIndex)}
                    syncId="ioChart"
                    width={500}
                    height={300}
                    data={flatSequentialData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    barCategoryGap='0%'
                    barGap='0%'
                  >
                    <XAxis
                      dataKey="name"
                      interval={0}
                      angle={0}
                      textAnchor="end"
                    />
                    <YAxis label={{ value: 'IO/sec', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="lightgrey" barSize={-5}>
                      {flatSequentialData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          onMouseEnter={(e) => handlePopoverOpen(e, index)}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div style={{ marginBottom: '-100px' }}>
              <h6 style={{ marginLeft: '100px' }}>Write</h6>
              <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer width="100%" height={170}>
                  <BarChart
                    // onMouseMove={handleMouseMove}
                    // onClick={(state) => handleClick(state.activeTooltipIndex)}
                    syncId="ioChart"
                    width={500}
                    height={300}
                    data={flatWriteData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    barCategoryGap='0%'
                    barGap='0%'
                  >
                    <XAxis
                      dataKey="name"
                      interval={0}
                      angle={0}
                      textAnchor="end"
                    />
                    <YAxis label={{ value: 'IO/sec', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="lightgrey" barSize={-5}>
                      {flatWriteData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          onMouseEnter={(e) => handlePopoverOpen(e, index)}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
           <Cpu handleSendingProps={handleCpuProps}/>
            <Cache/>
            <Latency  handleSendingProps={handleLatencyProps}/>
          </div>
        </div>
        <div>
          <SideBar/>
        </div>
        <Popover
              id="mouse-over-popover"
              sx={{ pointerEvents: 'none' }}
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
          <div>
            {/* <button  style={{
              color: 'white', backgroundColor: 'black', borderStyle: 'solid', borderRadius: '0px',
              position: 'absolute', top: '10px', right: '10px', padding: '5px 10px',
              cursor: 'pointer'
            }}>X</button> */}
            <center>
              <div style={{borderStyle:'solid',borderRadius:'5px',borderColor:'grey',borderWidth:'1px'}}>
              <div style={{padding:'10px'}}>
              <h5>Details {popoverContent.date}</h5>
              <p style={{fontFamily:'initial'}}>Random Value: {popoverContent.randomValue}</p>
              <p style={{fontFamily:'initial'}}>Sequential Value: {popoverContent.sequentialValue}</p>
              <p style={{fontFamily:'initial'}}>Write Value: {popoverContent.writeValue}</p>
              <p style={{fontFamily:'initial'}}>CPU Value: {popoverContent.cpuValue}</p>
              <p style={{fontFamily:'initial'}}>Latency UV Value: {popoverContent.latencyUVValue}</p>
              </div>
              {/* <p>Latency PV Value: {popoverContent.latencyPVValue}</p> */}
              </div>
            </center>
          </div>
          </Popover>
      </div>
    );
  };

  export default class Iops extends PureComponent {
    render() {
      return (
        <SynchronizedCharts
          flatRandomData={flatRandomData}
          flatSequentialData={flatSequentialData}
          flatWriteData={flatWriteData}
        />
      );
    }
  }


