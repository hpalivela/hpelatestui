import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import AppsIcon from '@mui/icons-material/Apps';
import { ImTree } from "react-icons/im";
import { ImDatabase } from "react-icons/im";
import { GrDatabase } from "react-icons/gr";
import { IoMdArrowDropup } from "react-icons/io";
import Tabular from './Tabular';
import './Pool.css';

const settings = {
    width: 120,
    height: 120,
    value: 13 // Keep the value as a number
  };
  
  const Pool = () => {
    return (
      <div>
        <div className='d-flex justify-between '>
          <div className='d-flex'>
            <AppsIcon style={{ fontSize: '40px', marginTop: '8px', color: 'grey', marginLeft: '30px' }} />
            <h4 className='appIcon'> <span style={{ color: 'grey' }}>Pool</span> AL-sap-storage (default)</h4>
          </div>
          <div className='d-flex' style={{ marginTop: '10px' }}>
            <ImTree style={{ fontSize: '22px', marginTop: '10px', color: 'grey', marginRight: '5px' }} />
            <h6 style={{ color: 'grey', marginTop: '13px' }}>Group:</h6>
            <h6 style={{ marginTop: '13px', marginLeft: '5px' }}>AL-sap-storage (default)</h6>
            <ImDatabase style={{ marginLeft: '5px', marginTop: '12px', fontSize: '20px', color: 'grey' }} />
            <h6 style={{ color: 'grey', marginTop: '13px', marginLeft: '5px' }}>Volumes:</h6>
            <div>
              <select style={{ borderStyle: 'none', color: '#0080FF', marginTop: '11px' }}>
                <option>6</option>
              </select>
            </div>
            <GrDatabase style={{ marginLeft: '5px', marginTop: '12px', fontSize: '20px', color: 'grey', marginRight: '5px' }} />
            <h6 style={{ marginTop: '12px', color: '#0080FF' }}><span style={{ color: 'grey' }}>Array:</span>AL-sap-storage (AF-249375)</h6>
          </div>
        </div>
        <hr />
  
  <div>
    <div className='d-flex'>
        <h5 style={{marginLeft:'200px'}}>CAPACITY</h5>
        <h5 style={{marginLeft:'600px'}}>PERFOMANCE <span className='sub-text'> (PAST WEEK AVG)</span></h5>
        <h5 style={{marginLeft:'320px'}}>SNAPSHOTS</h5>
        </div>
        <div className='d-flex'>
        <div style={{ position: 'relative', display: 'inline-block', width: settings.width, height: settings.height, margin: '10px' }}>
          <Gauge
            value={settings.value}
            width={settings.width}
            height={settings.height}
            cornerRadius="50%"
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 0,
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: 'green',
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: theme.palette.text.disabled,
              },
            })}
          />
          <div style={{
            paddingLeft: '8px',
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#000'
          }}>
            {`${settings.value}%`}
            <p style={{ fontSize: '15px', color: 'greenyellow' }}><IoMdArrowDropup />  2%</p>
          </div>
        </div>
  
        <div className='d-flex flex-column mt-1 '>
          <div style={{ display: 'inline-block', margin: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <div style={{ width: '10px', height: '10px', backgroundColor: 'seagreen', marginRight: '5px' }}></div> */}
              <p style={{ fontSize: '16px', margin: '0',fontWeight:'400' }}>Total Usage...............8.81 TiB</p>
            </div>
          </div>
          <div style={{ display: 'inline-block', margin: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <div style={{ width: '10px', height: '10px', backgroundColor: 'grey', marginRight: '5px' }}></div> */}
              <p style={{ fontSize: '16px', margin: '0',fontWeight:'400' }}>Unused Reserve.....19.74 GiB</p>
            </div>
          </div>
          <div style={{ display: 'inline-block', margin: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <div style={{ width: '10px', height: '10px', backgroundColor: 'grey', marginRight: '5px' }}></div> */}
              <p style={{ fontSize: '16px', margin: '0',fontWeight:'400' }}>Free Space................52.93 TiB</p>
            </div>
          </div>
          <div style={{ display: 'inline-block', margin: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <div style={{ width: '10px', height: '10px', backgroundColor: 'grey', marginRight: '5px' }}></div> */}
              <p style={{ fontSize: '16px', margin: '0',fontWeight:'bolder' }}>Total Capacity........61.13 TiB</p>
            </div>
          </div>
        </div>
  
        <div className='divide' style={{marginRight:'820px'}} >
          <h3 style={{paddingLeft:'10px'}}>
            161.8 TiB | 12.3x
          </h3>
          <p>............................................................</p>
          <h5 style={{paddingLeft:'20px',paddingTop:'0px'}}>TOTAL SAVINGS</h5>
        </div>
          <div class = "vertical"></div>
          <div className='d-flex'>
          <div>
          <h5 style={{position:'absolute',bottom:'75%',right:'45%',top:'22%'}}><span style={{fontSize:'30px'}}>1.1K</span> 10/sec</h5>
          <p style={{position:'absolute',top:'28%',right:'48%',fontSize:'12px',fontWeight:'500'}} >IOPS</p>
          </div>
          <div>
          <h5 style={{position:'absolute',bottom:'75%',left:'57%',top:'22%'}}><span style={{fontSize:'28px'}}>128.6MiB/</span>sec</h5>
          <p style={{position:'absolute',top:'28%',right:'36%',fontSize:'12px',fontWeight:'500'}} >THROUGHPUT</p>
          </div>
          <div>
          <h5 style={{position:'absolute',bottom:'75%',left:'68%',top:'22%'}}><span style={{fontSize:'28px'}}> 0.5</span> ms</h5>
          <p style={{position:'absolute',top:'28%',right:'28%',fontSize:'12px',fontWeight:'500'}} >R LATENCY</p>
          </div>
          <div>
          <h5 style={{position:'absolute',bottom:'75%',left:'75%',top:'22%'}}><span style={{fontSize:'28px'}}> 0.3</span> ms</h5>
          <p style={{position:'absolute',top:'28%',right:'20%',fontSize:'12px',fontWeight:'500'}} >W LATENCY</p>
          </div>
          </div>
  </div>
  <div className='vertical' style={{marginLeft:'600px'}}></div>
  <h2 style={{position:'absolute',top:'23%',left:'90%'}}>28</h2>
  {/* <hr/> */}
  <Tabular/>
  </div>
      </div>
    );
  }
  export default Pool;
  
