// import React, { useEffect, useState } from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import axios from 'axios';
// import dayjs from 'dayjs';
// import { LineChart } from '@mui/x-charts/LineChart';
// import Spinner from 'react-bootstrap/Spinner';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import './Perfomance.css'

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// const Performance = () => {
//   const [performanceData, setPerformanceData] = useState(null);
//   const [chartData, setChartData] = useState({ xLabels: [], uData: [], pData: [] });
//   const [startDateTime, setStartDateTime] = useState(dayjs().subtract(24, 'hours'));
//   const [endDateTime, setEndDateTime] = useState(dayjs());
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // For error messages
//   const [open, setOpen] = useState(false);
//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth * 0.6,
//     height: 185,
//   });
  
//   useEffect(() => {
//     const handleResize = () => {
//       setDimensions({
//         width: window.innerWidth * 0.6,
//         height: 185,
//       });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
  


//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get('http://localhost:3050/');
//       if (response.status === 200 && response.data) {
//         setPerformanceData(response.data);
//       } else {
//         throw new Error("Unexpected response structure.");
//       }
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       setError('Error fetching data. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (!loading && performanceData?.perfomanceData) {
//       handleViewChange('perfomance/24hours');
//     }
//   }, [performanceData, loading]);

//   const handleDateTimeChange = (setter) => (newDate) => {
//     setter(newDate);
//   };

//   const handleViewChange = (view) => {
//     if (!performanceData?.perfomanceData) {
//       console.warn('performanceData is not available');
//       return;
//     }

//     // const formattedXLabels = chartData?.xLabels?.map(label => dayjs(label).format('HH:mm')) || [];

//     switch (view) {
//       case 'perfomance/24hours':
//         setChartData(performanceData.perfomanceData.last24HoursData || { xLabels: [], uData: [], pData: [] });
//         break;
//       case 'perfomance/weekly':
//         setChartData(performanceData.perfomanceData.weeklyData || { xLabels: [], uData: [], pData: [] });
//         break;
//       case 'perfomance/biweekly':
//         setChartData(performanceData.perfomanceData.biweeklyData || { xLabels: [], uData: [], pData: [] });
//         break;
//       default:
//         console.warn(`Unknown view: ${view}`);
//         break;
//     }
//   };




//   const handleFetchData = async () => {
//     try {
//       const response = await axios.post('http://localhost:3050/performance/datarange', {
//         startDateTime: startDateTime.toISOString(),
//         endDateTime: endDateTime.toISOString(),
//       });
//       setChartData(response.data.data || { xLabels: [], uData: [], pData: [] });
//     } catch (error) {
//       console.error('Error posting data:', error);
//       setError('Error posting data. Please try again later.');
//     }
//   };

//   // if (loading) {
//   //   return (
//   //     <div className="d-flex justify-content-center align-items-center">
//   //       <Spinner animation="border" role="status">
//   //         <span className="visually-hidden">Loading...</span>
//   //       </Spinner>
//   //     </div>
//   //   );
//   // }

//   const series = [
//     { data: chartData?.uData, label: 'U-Data', color: 'blue' },
//     { data: chartData?.pData, label: 'P-Data', color: 'darkblue' },
//   ];



//   return (
//     <div>
//       {/* {loading && (
//         <div className="d-flex justify-content-center align-items-center">
//           <Spinner animation="border" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </Spinner>
//         </div>
//       )} */}
//       {!loading && (
//         <div>
//           {error && (
//             <div style={{ color: 'red', textAlign: 'center' }}>
//               {error}
//             </div>
//           )}
//           <div className="d-flex justify-content-end" style={{ marginRight: '50px' }}>
//             <p style={{marginTop:'20px',color:'blue',fontFamily:'cursive',fontWeight:'bold'}}>
//               {chartData.xLabels[0]} <span style={{marginLeft: '50px',marginRight:'50px',color:'black'}}>TO</span>
//             </p>
//             <p style={{marginRight:'100px',marginTop:'20px',color:'darkblue',fontFamily:'cursive',fontWeight:'bold'}}>
//               {chartData.xLabels[chartData.xLabels.length-1]}
//             </p>
//             <DropdownButton title="" id="dropdown-basic-button" className="mt-3">
//               <Dropdown.Item onClick={() => handleViewChange('perfomance/24hours')}>24-Hour</Dropdown.Item>
//               <Dropdown.Item onClick={() => handleViewChange('perfomance/weekly')}>Weekly</Dropdown.Item>
//               <Dropdown.Item onClick={() => handleViewChange('perfomance/biweekly')}>Biweekly</Dropdown.Item>
//               <Dropdown.Item onClick={handleClickOpen}>Custom Range</Dropdown.Item>
//             </DropdownButton>
//           </div>
         
//           {chartData?.xLabels?.length > 0 && (
            
//             <LineChart
//             width={dimensions.width}
//             height={dimensions.height}
//             series={series}
//             xAxis={[{ scaleType: 'point', data: chartData?.xLabels }]}
//           />
          
//             // <LineChart
//             // // maxWidth={900}
//             //   width={900}
//             //   height={185}
//             //   series={series}
//             //   xAxis={[{ scaleType: 'point', data: chartData?.xLabels }]}
//             // />
//           )}
//           <BootstrapDialog
//             onClose={handleClose}
//             aria-labelledby="customized-dialog-title"
//             open={open}
//             PaperProps={{
//               style: {
//                 position: 'absolute',
//                 top: 100,
//                 left: 100,
//                 margin: 0,
//               },
//             }}
//           >
//             <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//               Select Date Range
//               <IconButton
//                 aria-label="close"
//                 onClick={handleClose}
//                 sx={{
//                   position: 'absolute',
//                   right: 8,
//                   top: 8,
//                   color: (theme) => theme.palette.grey[500],
//                 }}
//               >
//                 <CloseIcon />
//               </IconButton>
//             </DialogTitle>
//             <DialogContent dividers>
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <div>
//                   <DateTimePicker
//                     label="Start Date and Time"
//                     value={startDateTime}
//                     onChange={handleDateTimeChange(setStartDateTime)}
//                   />
//                   <DateTimePicker
//                     label="End Date and Time"
//                     value={endDateTime}
//                     onChange={handleDateTimeChange(setEndDateTime)}
//                   />
//                 </div>
//               </LocalizationProvider>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleFetchData} color="primary">
//                 Fetch Data
//               </Button>
//               <Button onClick={handleClose} color="secondary">
//                 Close
//               </Button>
//             </DialogActions>
//           </BootstrapDialog>
//         </div>
        
//       )}
//     </div>
    

//   );
// };

// export default Performance;





import React, { useEffect, useState, useRef } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import axios from 'axios';
import dayjs from 'dayjs';
import { LineChart } from '@mui/x-charts/LineChart';
import Spinner from 'react-bootstrap/Spinner';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './Perfomance.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Performance = () => {
  const [performanceData, setPerformanceData] = useState(null);
  const [chartData, setChartData] = useState({ xLabels: [], uData: [], pData: [] });
  const [startDateTime, setStartDateTime] = useState(dayjs().subtract(24, 'hours'));
  const [endDateTime, setEndDateTime] = useState(dayjs());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const chartContainerRef = useRef(null);
 
  const [dimensions, setDimensions] = useState({ width: 900, height: 185 });
  
  useEffect(() => {
    const updateDimensions = () => {
      if (chartContainerRef.current) {
        setDimensions({
          width: chartContainerRef.current.offsetWidth,
          height: 185,
        });
      }
    };
  
    const resizeObserver = new ResizeObserver(updateDimensions);
    const currentRef = chartContainerRef.current;
  
    if (currentRef) {
      resizeObserver.observe(currentRef);
      updateDimensions();
    }
  
    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3050/');
      console.log('API response:', response); // Log the API response
      if (response.status === 200 && response.data) {
        setPerformanceData(response.data);
      } else {
        throw new Error("Unexpected response structure.");
      }
    } catch (err) {
      console.error('Error fetching data:', err); // Log the error
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && performanceData?.perfomanceData) {
      handleViewChange('perfomance/24hours');
    }
  }, [performanceData, loading]);

  const handleDateTimeChange = (setter) => (newDate) => {
    setter(newDate);
  };

  const handleViewChange = (view) => {
    if (!performanceData?.perfomanceData) {
      return;
    }

    switch (view) {
      case 'perfomance/24hours':
        setChartData(performanceData.perfomanceData.last24HoursData || { xLabels: [], uData: [], pData: [] });
        break;
      case 'perfomance/weekly':
        setChartData(performanceData.perfomanceData.weeklyData || { xLabels: [], uData: [], pData: [] });
        break;
      case 'perfomance/biweekly':
        setChartData(performanceData.perfomanceData.biweeklyData || { xLabels: [], uData: [], pData: [] });
        break;
      default:
        break;
    }
  };

  const handleFetchData = async () => {
    try {
      const response = await axios.post('http://localhost:3050/performance/datarange', {
        startDateTime: startDateTime.toISOString(),
        endDateTime: endDateTime.toISOString(),
      });
      console.log('Data range response:', response.data); // Log the data range response
      setChartData(response.data.data || { xLabels: [], uData: [], pData: [] });
    } catch (error) {
      console.error('Error posting data:', error); // Log the error
      setError('Error posting data. Please try again later.');
    }
  };

  const series = [
    { data: chartData?.uData, label: 'U-Data', color: 'blue' },
    { data: chartData?.pData, label: 'P-Data', color: 'darkblue' },
  ];

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          {error && (
            <div style={{ color: 'red', textAlign: 'center' }}>
              {error}
            </div>
          )}
          <div className="d-flex justify-content-end" style={{ marginRight: '50px' }}>
            <p style={{ marginTop: '20px', color: 'blue', fontFamily: 'cursive', fontWeight: 'bold' }}>
              {chartData.xLabels[0]} <span style={{ marginLeft: '50px', marginRight: '50px', color: 'black' }}>TO</span>
            </p>
            <p style={{ marginRight: '100px', marginTop: '20px', color: 'darkblue', fontFamily: 'cursive', fontWeight: 'bold' }}>
              {chartData.xLabels[chartData.xLabels.length - 1]}
            </p>
            <DropdownButton title="" id="dropdown-basic-button" className="mt-3">
              <Dropdown.Item onClick={() => handleViewChange('perfomance/24hours')}>24-Hour</Dropdown.Item>
              <Dropdown.Item onClick={() => handleViewChange('perfomance/weekly')}>Weekly</Dropdown.Item>
              <Dropdown.Item onClick={() => handleViewChange('perfomance/biweekly')}>Biweekly</Dropdown.Item>
              <Dropdown.Item onClick={handleClickOpen}>Custom Range</Dropdown.Item>
            </DropdownButton>
          </div>

          {chartData?.xLabels?.length > 0 && (
            <div className="chart-container" ref={chartContainerRef}>
              <LineChart
                width={dimensions.width}
                height={dimensions.height}
                series={series}
                xAxis={[{ scaleType: 'point', data: chartData?.xLabels }]}
              />
            </div>
          )}

          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            PaperProps={{
              style: {
                position: 'absolute',
                top: 100,
                left: 100,
                margin: 0,
              },
            }}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Select Date Range
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <DateTimePicker
                    label="Start Date and Time"
                    value={startDateTime}
                    onChange={handleDateTimeChange(setStartDateTime)}
                  />
                  <DateTimePicker
                    label="End Date and Time"
                    value={endDateTime}
                    onChange={handleDateTimeChange(setEndDateTime)}
                  />
                </div>
              </LocalizationProvider>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleFetchData} color="primary">
                Fetch Data
              </Button>
              <Button onClick={handleClose} color="secondary">
                Close
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      )}
    </div>
  );
};

export default Performance;
