import React, { useEffect, useState } from 'react';
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



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const IOPS = () => {
  const [fullData, setFullData] = useState(null); // Full data set
  const [chartData, setChartData] = useState(({ xLabels: [], uData: [], pData: [] })); // Data for the chart
  const [startDateTime, setStartDateTime] = useState(dayjs().subtract(24, 'hours')); // Default to last 24 hours
  const [endDateTime, setEndDateTime] = useState(dayjs()); // Default to current time
  const [loading, setLoading] = useState(true); // Start in a loading state
  const [error, setError] = useState(null); // For error messages
  const [open, setOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth * 0.6,
    height: 185,
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth * 0.6,
        height: 185,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Fetch all data from the API
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3050/'); // Adjust this to your API endpoint
      if (response.status === 200 && response.data) {
        setFullData(response.data); // Store the full data set
      } else {
        throw new Error("Unexpected response structure.");
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && fullData?.networkData) {
      handleViewChange('network/24hours'); // Default to 24-hour view on initial load
    }
  }, [fullData, loading]);

  const handleDateTimeChange = (setter) => (newDate) => {
    setter(newDate); // Set the new date/time
  };

  const handleViewChange = (view) => {
    switch (view) {
      case 'network/24hours':
        setChartData(fullData.networkData.last24HoursData)
        break;
      case 'network/weekly':
        setChartData(fullData.networkData.weeklyData)
        break;
      case 'network/biweekly':
        setChartData(fullData.networkData.biweeklyData)
        break;
      default:
        console.warn(`Unknown view: ${view}`);
        break;
    }
  };

  const handleFetchData = async () => {
    try {
      const response = await axios.post('http://localhost:3050/network/datarange', {
        startDateTime: startDateTime.toISOString(),
        endDateTime: endDateTime.toISOString(),
      });
      setChartData(response.data.data);
    } catch (error) {
      console.error('Error posting data:', error);
      setError('Error posting data. Please try again later.');
    }
  };

  // if (loading) {
  //   return (
  //     <div className="d-flex justify-content-center align-items-center">
  //       <Spinner animation="border" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </Spinner>
  //     </div>
  //   );
  // }

  const series = [
    { data: chartData?.uData, label: 'U-Data', color: 'blue' },
    { data: chartData?.pData, label: 'P-Data', color: 'darkblue' },
  ];

  return (
    <div>
      {error && (
        <div style={{ color: 'red', textAlign: 'center' }}>
          {error}
        </div>
      )}
      <div className="d-flex justify-content-end" style={{ marginRight: '50px' }}>
      <p style={{marginTop:'20px',color:'blue',fontFamily:'cursive',fontWeight:'bold'}}>{chartData.xLabels[0]} <span style={{marginLeft:
      '50px',marginRight:'50px',color:'black'}}>TO</span></p>
      <p style={{marginRight:'100px',marginTop:'20px',color:'darkblue',fontFamily:'cursive',fontWeight:'bold'}}>{chartData.xLabels[chartData.xLabels.length-1]}</p>
        <DropdownButton title="" id="dropdown-basic-button" className="mt-3">
          <Dropdown.Item onClick={() => handleViewChange('network/24hours')}>24-Hour</Dropdown.Item>
          <Dropdown.Item onClick={() => handleViewChange('network/weekly')}>Weekly</Dropdown.Item>
          <Dropdown.Item onClick={() => handleViewChange('network/biweekly')}>Biweekly</Dropdown.Item>
          <Dropdown.Item onClick={handleClickOpen}>Custom Range</Dropdown.Item>
        </DropdownButton>
      </div>
      {chartData?.xLabels?.length > 0 && (
        <LineChart
        width={dimensions.width}
        height={dimensions.height}
          series={series}
          xAxis={[{ scaleType: 'point', data: chartData?.xLabels }]}
        />
      )}

      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
            style: {
              position: 'absolute',
              top: 100, // Adjust the top position as needed
              left: 100, // Adjust the left position as needed
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
  );
};
export default IOPS;









