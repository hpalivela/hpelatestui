import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TotalBars = () => {
  const [bardata, setBarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [anchorElHeartbeatGreen, setAnchorElHeartbeatGreen] = React.useState(null);
  const [anchorElHeartbeatRed, setAnchorElHeartbeatRed] = React.useState(null);
  const [anchorElVideoSettingsGreen, setAnchorElVideoSettingsGreen] = React.useState(null);
  const [anchorElVideoSettingsRed, setAnchorElVideoSettingsRed] = React.useState(null);

  const handlePopoverOpen = (setter) => (event) => {
    setter(event.currentTarget);
  };

  const handlePopoverClose = (setter) => () => {
    setter(null);
  };

  // const openHardware = Boolean(anchorElHardware);
  const openHeartbeatGreen = Boolean(anchorElHeartbeatGreen);
  const openHeartbeatRed = Boolean(anchorElHeartbeatRed);
  const openVideoSettingsGreen = Boolean(anchorElVideoSettingsGreen);
  const openVideoSettingsRed = Boolean(anchorElVideoSettingsRed);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3050/');
        if (response.status === 200 && response.data && response.data.barData && response.data.barData.allData) {
          const { seoul, tokyo, monthVal } = response.data.barData.allData;
          setBarData(monthVal.map((month, index) => ({
            monthVal: month,
            seoul: seoul[index],
            tokyo: tokyo[index]
          })));
          setLoading(false);
        } else {
          throw new Error("Unexpected response structure or missing data.");
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bardata) {
    return <div>Error: No data available.</div>;
  }

  // Calculate threshold values
  const maxSeoul = Math.max(...bardata.map(entry => entry.seoul));
  const maxTokyo = Math.max(...bardata.map(entry => entry.tokyo));
  const threshold_Seoul = maxTokyo * 0.6;
  const threshold_Tokyo = maxSeoul * 0.6;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: 'white' }}>
          <p className="label">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="label" style={{ color: entry.dataKey === 'seoul' ? (entry.value > threshold_Seoul ? 'skyblue' : 'lightblue') : (entry.value > threshold_Tokyo ? 'red' : 'orange') }}>
              {`${entry.dataKey} : ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className='d-flex'>
        <div>
          <h3>VMs Latency and IOPS</h3>
        </div>
        <div style={{ marginRight: '200px' }}>
          <Typography
            aria-owns={openHeartbeatGreen ? 'mouse-over-popover-green' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen(setAnchorElHeartbeatGreen)}
            onMouseLeave={handlePopoverClose(setAnchorElHeartbeatGreen)}
          >
            <div style={{ backgroundColor: 'lightblue', borderStyle: 'solid', borderWidth: '0px', height: '20px', width: '20px', marginBottom: '5px', marginTop: '10px' }}><span style={{ marginLeft: '30px', fontSize: 'bold', fontFamily: 'sans-serif' }}>Latency</span></div>
          </Typography>
          <Popover
            id="mouse-over-popover-green"
            sx={{ pointerEvents: 'none' }}
            open={openHeartbeatGreen}
            anchorEl={anchorElHeartbeatGreen}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose(setAnchorElHeartbeatGreen)}
            disableRestoreFocus
          >
            {/* <Typography sx={{ p: 1 }}>Lorem ipsum dolor</Typography> */}
            <Typography sx={{ p: 1, maxWidth: 200, maxHeight: 200, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula turpis sit amet ante tincidunt, nec suscipit nunc auctor.
              {/* Curabitur vehicula massa sed felis dictum, at fermentum mi sagittis. */}
            </Typography>
          </Popover>
          <Typography
            aria-owns={openHeartbeatRed ? 'mouse-over-popover-red' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen(setAnchorElHeartbeatRed)}
            onMouseLeave={handlePopoverClose(setAnchorElHeartbeatRed)}
          >
            <div style={{ backgroundColor: 'orange', borderStyle: 'solid', borderWidth: '0px', height: '20px', width: '20px', marginBottom: '5px' }}><span style={{ marginLeft: '30px', fontSize: 'bold', fontFamily: 'sans-serif' }}>IOPS</span></div>
          </Typography>
          <Popover
            id="mouse-over-popover-red"
            sx={{ pointerEvents: 'none' }}
            open={openHeartbeatRed}
            anchorEl={anchorElHeartbeatRed}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose(setAnchorElHeartbeatRed)}
            disableRestoreFocus
          >
            {/* <Typography sx={{ p: 1 }}>Lorem ipsum dolor2</Typography> */}
            <Typography sx={{ p: 1, maxWidth: 200, maxHeight: 200, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula turpis sit amet ante tincidunt, nec suscipit nunc auctor.
              {/* Curabitur vehicula massa sed felis dictum, at fermentum mi sagittis. */}
            </Typography>
          </Popover>
          <Typography
            aria-owns={openVideoSettingsGreen ? 'mouse-over-popover-vsgreen' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen(setAnchorElVideoSettingsGreen)}
            onMouseLeave={handlePopoverClose(setAnchorElVideoSettingsGreen)}
          >
            <div style={{ backgroundColor: 'skyblue', borderStyle: 'solid', borderWidth: '0px', height: '20px', width: '20px', marginBottom: '5px' }}><span style={{ marginLeft: '30px', fontSize: 'bold', fontFamily: 'sans-serif' }}>ThresholdLatency</span></div>
          </Typography>
          <Popover
            id="mouse-over-popover-vsgreen"
            sx={{ pointerEvents: 'none' }}
            open={openVideoSettingsGreen}
            anchorEl={anchorElVideoSettingsGreen}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose(setAnchorElVideoSettingsGreen)}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1, maxWidth: 200, maxHeight: 200, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula turpis sit amet ante tincidunt, nec suscipit nunc auctor.
              {/* Curabitur vehicula massa sed felis dictum, at fermentum mi sagittis. */}
            </Typography>
          </Popover>
          <Typography
            aria-owns={openVideoSettingsRed ? 'mouse-over-popover-vsred' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen(setAnchorElVideoSettingsRed)}
            onMouseLeave={handlePopoverClose(setAnchorElVideoSettingsRed)}
          >
            <div style={{ backgroundColor: 'red', borderStyle: 'solid', borderWidth: '0px', height: '20px', width: '20px' }}><span style={{ marginLeft: '30px', fontSize: 'bold', fontFamily: 'sans-serif' }}>ThresholdIOPS</span></div>
          </Typography>
          <Popover
            id="mouse-over-popover-vsred"
            sx={{ pointerEvents: 'none' }}
            open={openVideoSettingsRed}
            anchorEl={anchorElVideoSettingsRed}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose(setAnchorElVideoSettingsRed)}
            disableRestoreFocus
          >
            {/* <Typography sx={{ p: 1 }}>Lorem ipsum dolor4</Typography> */}
            <Typography sx={{ p: 1, maxWidth: 200, maxHeight: 200, overflow: 'auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula turpis sit amet ante tincidunt, nec suscipit nunc auctor.
              {/* Curabitur vehicula massa sed felis dictum, at fermentum mi sagittis. */}
            </Typography>
          </Popover>

        </div>
      </div>
      <ResponsiveContainer height={530}>
        <BarChart layout="vertical" data={bardata}>
          <XAxis type="number" />
          <YAxis dataKey="monthVal" type="category" />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}
          <Bar dataKey="seoul" name="Latency" fill="skyblue">
            {bardata.map((entry, index) => (
              <Cell key={`cell-seoul-${index}`} fill={entry.seoul > threshold_Tokyo ? 'skyblue' : 'lightblue'} />
            ))}
          </Bar>
          <Bar dataKey="tokyo" name="IOPS" fill="orange">
            {bardata.map((entry, index) => (
              <Cell key={`cell-tokyo-${index}`} fill={entry.tokyo > threshold_Seoul ? 'red' : 'orange'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalBars;












