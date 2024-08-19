const express = require('express');
const mysql = require('mysql');
const dayjs = require('dayjs');
const cors = require('cors');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const moment = require('moment-timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

const app = express();
app.use(cors());
app.use(express.json());
// Database connection setup
const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Master#123',
  database: 'lineardata',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});

// First line in your code
// Define the function to generate missing data
const generateMissingData = async (db, tableName) => {
  try {
    // console.log('Starting generateMissingData function'); // Should log
    const dayjs = require('dayjs');
    const { promisify } = require('util');
    const query = promisify(db.query).bind(db);

    // Fetch the last recorded timestamp
    const lastEntryResult = await query(`SELECT xLabels FROM ${tableName} ORDER BY xLabels DESC LIMIT 1`);
    if (!lastEntryResult) {
      throw new Error('Failed to retrieve last entry');
    }

    // console.log('Last entry result:', lastEntryResult); // Should log

    const lastEntryTime = lastEntryResult.length > 0 ? dayjs(lastEntryResult[0].xLabels) : null;
    // console.log('Last entry time:', lastEntryTime); // Should log
    const newData = [];

    if (lastEntryTime) {
      const now = dayjs();
      let currentTime = lastEntryTime.add(1, 'hour'); // Start from the next hour
      // console.log('Starting time:', currentTime); // Should log

      while (currentTime.isBefore(now)) {
        const randomUData = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;
        const randomPData = Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000;

        newData.push({
          xLabels: currentTime.format('YYYY-MM-DD HH:mm'),
          uData: randomUData,
          pData: randomPData,
        });

        currentTime = currentTime.add(1, 'hour');
        console.log('Updated time:', currentTime); // Should log each iteration
      }

      if (newData.length > 0) {
        const insertQuery = `INSERT INTO ${tableName} (xLabels, uData, pData) VALUES ?`;
        const insertValues = newData.map((item) => [item.xLabels, item.uData, item.pData]);

        await query(insertQuery, [insertValues]); // Insert new data
        console.log('Data inserted into', tableName); // Should log
      } else {
        console.log('No new data to insert'); // Should log if no data to insert
      }
    } else {
      console.error(`No previous data found in ${tableName}`); // Should log if no last entry
    }

    return newData; // Return the new data
  } catch (error) {
    console.error('Error in generateMissingData:', error);
  }
};





app.get('/getalldata', async (req, res) => {
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);
  try {
    // Step 1: Generate missing data for all relevant tables

    // Step 2: Query all data from relevant tables
    const performanceData = await query('SELECT * FROM perfomancedata');
    const networkData = await query('SELECT * FROM networkdata');
    const memoryData = await query('SELECT * FROM memorydata');

    // Step 3: Prepare the combined data
    const combinedData = {
      performance: {
        uData: performanceData.map((data) => data.uData),
        pData: performanceData.map((data) => data.pData),
        xLabels: performanceData.map((data) => data.xLabels),
      },
      network: {
        uData: networkData.map((data) => data.uData),
        pData: networkData.map((data) => data.pData),
        xLabels: networkData.map((data) => data.xLabels),
      },
      memory: {
        uData: memoryData.map((data) => data.uData),
        pData: memoryData.map((data) => data.pData),
        xLabels: memoryData.map((data) => data.xLabels),
      },
    };

    // Step 4: Return the data with a success message
    res.status(200).json({
      message: 'All data retrieved successfully',
      data: combinedData,
    });
  } catch (error) {
    console.error('Error fetching all data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


const getUniqueDailyPerfomanceData = async (query, daysBack) => {
  const targetHour = dayjs().format('HH:00'); // Specific hourly interval
  const results = []; // To store unique results
  const seenDays = new Set(); // To ensure unique days

  for (let i = 0; i < daysBack; i++) {
    const targetDate = dayjs().subtract(i, 'day').format('YYYY-MM-DD');
    const targetDateTime = `${targetDate} ${targetHour}`; // Specific hour on each day

    const data = await query(
      'SELECT * FROM perfomancedata WHERE xLabels = ?',
      [targetDateTime]
    );

    if (Array.isArray(data) && data.length > 0) {
      const dayOnly = data[0].xLabels.split(' ')[0]; // Extract only the date part

      // Add the first unique record of the day if it's not seen before
      if (!seenDays.has(dayOnly)) {
        results.push(data[0]); // Store the unique record
        seenDays.add(dayOnly); // Mark this day as seen
      }
    }
  }

  return results.sort((a, b) => new Date(a.xLabels) - new Date(b.xLabels)); // Sort by date
};

app.get('/perfomancedata', async (req, res) => {
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);

  try {
    // Fetch all data
    const allData = await query('SELECT * FROM perfomancedata ORDER BY xLabels ASC');
    const allXLabels = allData.map((record) => record.xLabels);
    const allUData = allData.map((record) => record.uData);
    const allPData = allData.map((record) => record.pData);

    // Fetch data for the last 24 hours
    const now = dayjs();
    const start = now.subtract(24, 'hour').format('YYYY-MM-DD HH:mm');
    const last24HoursData = await query(
      'SELECT * FROM perfomancedata WHERE xLabels >= ? AND xLabels <= ? ORDER BY xLabels ASC',
      [start, now.format('YYYY-MM-DD HH:mm')]
    );

    const last24HoursXLabels = last24HoursData.map((record) => record.xLabels);
    const last24HoursUData = last24HoursData.map((record) => record.uData);
    const last24HoursPData = last24HoursData.map((record) => record.pData);

    // Fetch weekly data (7 days)
    const weeklyData = await getUniqueDailyPerfomanceData(query, 7);
    const weeklyXLabels = weeklyData.map((record) => record.xLabels);
    const weeklyUData = weeklyData.map((record) => record.uData);
    const weeklyPData = weeklyData.map((record) => record.pData);

    // Fetch biweekly data (14 days)
    const biweeklyData = await getUniqueDailyPerfomanceData(query, 14);
    const biweeklyXLabels = biweeklyData.map((record) => record.xLabels);
    const biweeklyUData = biweeklyData.map((record) => record.uData);
    const biweeklyPData = biweeklyData.map((record) => record.pData);

    res.status(200).json({
      allData: {
        uData: allUData,
        pData: allPData,
        xLabels: allXLabels
      },
      last24HoursData: {
        uData: last24HoursUData,
        pData: last24HoursPData,
        xLabels: last24HoursXLabels
      },
      weeklyData: {
        uData: weeklyUData,
        pData: weeklyPData,
        xLabels: weeklyXLabels
      },
      biweeklyData: {
        uData: biweeklyUData,
        pData: biweeklyPData,
        xLabels: biweeklyXLabels,
      },
    });
  } catch (err) {
    console.error('Error fetching performance data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/perfomance/24hoursdata',async(req,res)=>{
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);

  const now = dayjs();
  const start = now.subtract(24, 'hour').format('YYYY-MM-DD HH:mm');
  const last24HoursData = await query(
    'SELECT * FROM perfomancedata WHERE xLabels >= ? AND xLabels <= ? ORDER BY xLabels ASC',
    [start, now.format('YYYY-MM-DD HH:mm')]
  );
try{
  const last24HoursXLabels = last24HoursData.map((record) => record.xLabels);
  const last24HoursUData = last24HoursData.map((record) => record.uData);
  const last24HoursPData = last24HoursData.map((record) => record.pData);

  res.status(200).json({
    last24HoursData: {
      uData: last24HoursUData,
      pData: last24HoursPData,
      xLabels: last24HoursXLabels
    },
  })
}catch(err){
  console.error('Error fetching performance 24hours data:', err);
    res.status(500).json({ error: 'Internal server error' });
}
})

app.get('/perfomance/weeklydata', async (req, res) => {
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);
  try {

    const weeklyData = await getUniqueDailyPerfomanceData(query, 7);
    const weeklyXLabels = weeklyData.map((record) => record.xLabels);
    const weeklyUData = weeklyData.map((record) => record.uData);
    const weeklyPData = weeklyData.map((record) => record.pData);

    res.status(200).json({
      weeklyData: {
        uData: weeklyUData,
        pData: weeklyPData,
        xLabels: weeklyXLabels
      },
    })
  } catch (err) {
    console.error('Error fetching performance weekly data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.get('/perfomance/biweeklydata', async (req, res) => {
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);
  try {

    const biweeklyData = await getUniqueDailyPerfomanceData(query, 14);
    const biweeklyXLabels = biweeklyData.map((record) => record.xLabels);
    const biweeklyUData = biweeklyData.map((record) => record.uData);
    const biweeklyPData = biweeklyData.map((record) => record.pData);

    res.status(200).json({
      weeklyData: {
        uData: biweeklyUData,
        pData: biweeklyPData,
        xLabels:biweeklyXLabels
      },
    })
  } catch (err) {
    console.error('Error fetching performance bi-weekly data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})


app.post('/performance/datarange', (req, res) => {
  let { startDateTime, endDateTime } = req.body;

  console.log('Received input:', { startDateTime, endDateTime });
  const startMoment=moment.utc(startDateTime).local().format('YYYY-MM-DD HH:mm')
  const endMoment=moment.utc(endDateTime).local().format('YYYY-MM-DD HH:mm')
  if (!startDateTime || !endDateTime) {
    return res.status(400).json({ error: 'Both start and end dates are required' });
  }
console.log(startMoment,endMoment);
  
  if (!startMoment || !endMoment) {
    console.error('Invalid date format:', { startDateTime, endDateTime });
    return res.status(400).json({ error: 'Invalid date format' });
  }
  const query = 'SELECT * FROM perfomancedata WHERE xLabels BETWEEN ? AND ? ORDER BY xLabels ASC';
  db.query(query, [startMoment, endMoment], (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Data retrieved:', result);
    if (result.length === 0) {
      return res.status(404).json({ message: 'No data found for the specified date range' });
    }
    const uData = [];
    const pData = [];
    const xLabels = [];

    result.forEach(row => {
      uData.push(row.uData);
      pData.push(row.pData);
      xLabels.push(row.xLabels);
    });

    return res.status(200).json({
      message: 'Data retrieved successfully',
      data: {
        uData,
        pData,
        xLabels,
      },
    });
  });
});


app.post('/network/datarange', (req, res) => {
  let { startDateTime, endDateTime } = req.body;

  console.log('Received input:', { startDateTime, endDateTime });
  const startMoment=moment.utc(startDateTime).local().format('YYYY-MM-DD HH:mm')
  const endMoment=moment.utc(endDateTime).local().format('YYYY-MM-DD HH:mm')
  if (!startDateTime || !endDateTime) {
    return res.status(400).json({ error: 'Both start and end dates are required' });
  }
console.log(startMoment,endMoment);
  
  if (!startMoment || !endMoment) {
    console.error('Invalid date format:', { startDateTime, endDateTime });
    return res.status(400).json({ error: 'Invalid date format' });
  }
  const query = 'SELECT * FROM networkdata WHERE xLabels BETWEEN ? AND ? ORDER BY xLabels ASC';
  db.query(query, [startMoment, endMoment], (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Data retrieved:', result);
    if (result.length === 0) {
      return res.status(404).json({ message: 'No data found for the specified date range' });
    }
    const uData = [];
    const pData = [];
    const xLabels = [];

    result.forEach(row => {
      uData.push(row.uData);
      pData.push(row.pData);
      xLabels.push(row.xLabels);
    });

    return res.status(200).json({
      message: 'Data retrieved successfully',
      data: {
        uData,
        pData,
        xLabels,
      },
    });
  });
});



app.post('/memory/datarange', (req, res) => {
  let { startDateTime, endDateTime } = req.body;

  console.log('Received input:', { startDateTime, endDateTime });
  const startMoment=moment.utc(startDateTime).local().format('YYYY-MM-DD HH:mm')
  const endMoment=moment.utc(endDateTime).local().format('YYYY-MM-DD HH:mm')
  if (!startDateTime || !endDateTime) {
    return res.status(400).json({ error: 'Both start and end dates are required' });
  }
console.log(startMoment,endMoment);
  
  if (!startMoment || !endMoment) {
    console.error('Invalid date format:', { startDateTime, endDateTime });
    return res.status(400).json({ error: 'Invalid date format' });
  }
  const query = 'SELECT * FROM memorydata WHERE xLabels BETWEEN ? AND ? ORDER BY xLabels ASC';
  db.query(query, [startMoment, endMoment], (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Data retrieved:', result);
    if (result.length === 0) {
      return res.status(404).json({ message: 'No data found for the specified date range' });
    }
    const uData = [];
    const pData = [];
    const xLabels = [];

    result.forEach(row => {
      uData.push(row.uData);
      pData.push(row.pData);
      xLabels.push(row.xLabels);
    });

    return res.status(200).json({
      message: 'Data retrieved successfully',
      data: {
        uData,
        pData,
        xLabels,
      },
    });
  });
});


const getUniqueDailyNetworkData = async (query, daysBack) => {
  const targetHour = dayjs().format('HH:00'); // Specific hourly interval
  const results = []; // To store unique results
  const seenDays = new Set(); // To ensure unique days

  for (let i = 0; i < daysBack; i++) {
    const targetDate = dayjs().subtract(i, 'day').format('YYYY-MM-DD');
    const targetDateTime = `${targetDate} ${targetHour}`; // Specific hour on each day

    const data = await query(
      'SELECT * FROM networkdata WHERE xLabels = ?',
      [targetDateTime]
    );

    if (Array.isArray(data) && data.length > 0) {
      const dayOnly = data[0].xLabels.split(' ')[0]; // Extract only the date part

      // Add the first unique record of the day if it's not seen before
      if (!seenDays.has(dayOnly)) {
        results.push(data[0]); // Store the unique record
        seenDays.add(dayOnly); // Mark this day as seen
      }
    }
  }

  return results.sort((a, b) => new Date(a.xLabels) - new Date(b.xLabels)); // Sort by date
};

app.get('/networkdata', async (req, res) => {
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);

  try {
    // Fetch all data
    const allData = await query('SELECT * FROM networkdata ORDER BY xLabels ASC');
    const allXLabels = allData.map((record) => record.xLabels);
    const allUData = allData.map((record) => record.uData);
    const allPData = allData.map((record) => record.pData);

    // Fetch data for the last 24 hours
    const now = dayjs();
    const start = now.subtract(24, 'hour').format('YYYY-MM-DD HH:mm');
    const last24HoursData = await query(
      'SELECT * FROM networkdata WHERE xLabels >= ? AND xLabels <= ? ORDER BY xLabels ASC',
      [start, now.format('YYYY-MM-DD HH:mm')]
    );


    const last24HoursXLabels = last24HoursData.map((record) => record.xLabels);
    const last24HoursUData = last24HoursData.map((record) => record.uData);
    const last24HoursPData = last24HoursData.map((record) => record.pData);

    // Fetch weekly data (7 days)
    const weeklyData = await getUniqueDailyNetworkData(query, 7);
    const weeklyXLabels = weeklyData.map((record) => record.xLabels);
    const weeklyUData = weeklyData.map((record) => record.uData);
    const weeklyPData = weeklyData.map((record) => record.pData);

    // Fetch biweekly data (14 days)
    const biweeklyData = await getUniqueDailyNetworkData(query, 14);
    const biweeklyXLabels = biweeklyData.map((record) => record.xLabels);
    const biweeklyUData = biweeklyData.map((record) => record.uData);
    const biweeklyPData = biweeklyData.map((record) => record.pData);

    res.status(200).json({
      allData: {

        uData: allUData,
        pData: allPData,
        xLabels: allXLabels,
      },
      last24HoursData: {

        uData: last24HoursUData,
        pData: last24HoursPData,
        xLabels: last24HoursXLabels,
      },
      weeklyData: {

        uData: weeklyUData,
        pData: weeklyPData,
        xLabels: weeklyXLabels,
      },
      biweeklyData: {

        uData: biweeklyUData,
        pData: biweeklyPData,
        xLabels: biweeklyXLabels,
      },
    });
  } catch (err) {
    console.error('Error fetching performance data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/network/24hoursdata',async(req,res)=>{
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);

  const now = dayjs();
  const start = now.subtract(24, 'hour').format('YYYY-MM-DD HH:mm');
  const last24HoursData = await query(
    'SELECT * FROM networkdata WHERE xLabels >= ? AND xLabels <= ? ORDER BY xLabels ASC',
    [start, now.format('YYYY-MM-DD HH:mm')]
  );
try{
  const last24HoursXLabels = last24HoursData.map((record) => record.xLabels);
  const last24HoursUData = last24HoursData.map((record) => record.uData);
  const last24HoursPData = last24HoursData.map((record) => record.pData);

  res.status(200).json({
    last24HoursData: {
      uData: last24HoursUData,
      pData: last24HoursPData,
      xLabels: last24HoursXLabels
    },
  })
}catch(err){
  console.error('Error fetching network 24hours data:', err);
    res.status(500).json({ error: 'Internal server error' });
}
})

app.get('/network/weeklydata', async (req, res) => {
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);
  try {

    const weeklyData = await getUniqueDailyNetworkData(query, 7);
    const weeklyXLabels = weeklyData.map((record) => record.xLabels);
    const weeklyUData = weeklyData.map((record) => record.uData);
    const weeklyPData = weeklyData.map((record) => record.pData);

    res.status(200).json({
      weeklyData: {
        uData: weeklyUData,
        pData: weeklyPData,
        xLabels: weeklyXLabels
      },
    })
  } catch (err) {
    console.error('Error fetching network weekly data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.get('/network/biweeklydata', async (req, res) => {
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);
  try {

    const biweeklyData = await getUniqueDailyNetworkData(query, 14);
    const biweeklyXLabels = biweeklyData.map((record) => record.xLabels);
    const biweeklyUData = biweeklyData.map((record) => record.uData);
    const biweeklyPData = biweeklyData.map((record) => record.pData);

    res.status(200).json({
      weeklyData: {
        uData: biweeklyUData,
        pData: biweeklyPData,
        xLabels:biweeklyXLabels
      },
    })
  } catch (err) {
    console.error('Error fetching network bi-weekly data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// app.get('/network/datarange', (req, res) => {
//   const { startDate, endDate } = req.query;

//   // Ensure both start and end dates are provided
//   if (!startDate || !endDate) {
//     return res.status(400).json({ error: 'Both start and end dates are required' });
//   }

//   console.log('Received query:', { startDate, endDate });

//   const query = 'SELECT * FROM perfomancedata WHERE xLabels BETWEEN ? AND ? ORDER BY xLabels ASC';

//   db.query(query, [startDate, endDate], (err, result) => {
//     if (err) {
//       console.error('Error fetching data:', err);
//       return res.status(500).json({ error: 'Internal server error' });
//     }

//     console.log('Data retrieved:', result);

//     // Ensure result is an array and return it with a success message
//     res.status(200).json({
//       message: 'Data retrieved successfully',
//       data: Array.isArray(result) ? result : [], // Ensure it's an array
//     });
//   });
// });


app.get('/network/datarange', (req, res) => {
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) {
    return res.status(400).json({ error: 'Both start and end dates are required' });
  }

  const query = 'SELECT * FROM perfomancedata WHERE xLabels BETWEEN ? AND ? ORDER BY xLabels ASC';

  db.query(query, [startDate, endDate], (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    console.log('Data retrieved:', result);

    res.status(200).json({
      message: 'Data retrieved successfully',
      data: result,
    });
  });
});


const getUniqueDailyMemoryData = async (query, daysBack) => {
  const targetHour = dayjs().format('HH:00'); // Specific hourly interval
  const results = []; // To store unique results
  const seenDays = new Set(); // To ensure unique days

  for (let i = 0; i < daysBack; i++) {
    const targetDate = dayjs().subtract(i, 'day').format('YYYY-MM-DD');
    const targetDateTime = `${targetDate} ${targetHour}`; // Specific hour on each day

    const data = await query(
      'SELECT * FROM memorydata WHERE xLabels = ?',
      [targetDateTime]
    );

    if (Array.isArray(data) && data.length > 0) {
      const dayOnly = data[0].xLabels.split(' ')[0]; // Extract only the date part

      // Add the first unique record of the day if it's not seen before
      if (!seenDays.has(dayOnly)) {
        results.push(data[0]); // Store the unique record
        seenDays.add(dayOnly); // Mark this day as seen
      }
    }
  }

  return results.sort((a, b) => new Date(a.xLabels) - new Date(b.xLabels)); // Sort by date
};

app.get('/memorydata', async (req, res) => {
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);

  try {
    // Fetch all data
    const allData = await query('SELECT * FROM memorydata ORDER BY xLabels ASC');
    const allXLabels = allData.map((record) => record.xLabels);
    const allUData = allData.map((record) => record.uData);
    const allPData = allData.map((record) => record.pData);

    // Fetch data for the last 24 hours
    const now = dayjs();
    const start = now.subtract(24, 'hour').format('YYYY-MM-DD HH:mm');
    const last24HoursData = await query(
      'SELECT * FROM memorydata WHERE xLabels >= ? AND xLabels <= ? ORDER BY xLabels ASC',
      [start, now.format('YYYY-MM-DD HH:mm')]
    );

    const last24HoursXLabels = last24HoursData.map((record) => record.xLabels);
    const last24HoursUData = last24HoursData.map((record) => record.uData);
    const last24HoursPData = last24HoursData.map((record) => record.pData);

    // Fetch weekly data (7 days)
    const weeklyData = await getUniqueDailyMemoryData(query, 7);
    const weeklyXLabels = weeklyData.map((record) => record.xLabels);
    const weeklyUData = weeklyData.map((record) => record.uData);
    const weeklyPData = weeklyData.map((record) => record.pData);

    // Fetch biweekly data (14 days)
    const biweeklyData = await getUniqueDailyMemoryData(query, 14);
    const biweeklyXLabels = biweeklyData.map((record) => record.xLabels);
    const biweeklyUData = biweeklyData.map((record) => record.uData);
    const biweeklyPData = biweeklyData.map((record) => record.pData);

    res.status(200).json({
      allData: {

        uData: allUData,
        pData: allPData,
        xLabels: allXLabels,
      },
      last24HoursData: {

        uData: last24HoursUData,
        pData: last24HoursPData,
        xLabels: last24HoursXLabels,
      },
      weeklyData: {

        uData: weeklyUData,
        pData: weeklyPData,
        xLabels: weeklyXLabels,
      },
      biweeklyData: {

        uData: biweeklyUData,
        pData: biweeklyPData,
        xLabels: biweeklyXLabels,
      },
    });
  } catch (err) {
    console.error('Error fetching memory data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/memory/24hoursdata',async(req,res)=>{
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);

  const now = dayjs();
  const start = now.subtract(24, 'hour').format('YYYY-MM-DD HH:mm');
  const last24HoursData = await query(
    'SELECT * FROM memorydata WHERE xLabels >= ? AND xLabels <= ? ORDER BY xLabels ASC',
    [start, now.format('YYYY-MM-DD HH:mm')]
  );
try{
  const last24HoursXLabels = last24HoursData.map((record) => record.xLabels);
  const last24HoursUData = last24HoursData.map((record) => record.uData);
  const last24HoursPData = last24HoursData.map((record) => record.pData);

  res.status(200).json({
    last24HoursData: {
      uData: last24HoursUData,
      pData: last24HoursPData,
      xLabels: last24HoursXLabels
    },
  })
}catch(err){
  console.error('Error fetching memory 24hours data:', err);
    res.status(500).json({ error: 'Internal server error' });
}
})

app.get('/memory/weeklydata', async (req, res) => {
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);
  try {

    const weeklyData = await getUniqueDailyMemoryData(query, 7);
    const weeklyXLabels = weeklyData.map((record) => record.xLabels);
    const weeklyUData = weeklyData.map((record) => record.uData);
    const weeklyPData = weeklyData.map((record) => record.pData);

    res.status(200).json({
      weeklyData: {
        uData: weeklyUData,
        pData: weeklyPData,
        xLabels: weeklyXLabels
      },
    })
  } catch (err) {
    console.error('Error fetching memory weekly data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.get('/memory/biweeklydata', async (req, res) => {
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);
  try {

    const biweeklyData = await getUniqueDailyMemoryData(query, 14);
    const biweeklyXLabels = biweeklyData.map((record) => record.xLabels);
    const biweeklyUData = biweeklyData.map((record) => record.uData);
    const biweeklyPData = biweeklyData.map((record) => record.pData);

    res.status(200).json({
      weeklyData: {
        uData: biweeklyUData,
        pData: biweeklyPData,
        xLabels:biweeklyXLabels
      },
    })
  } catch (err) {
    console.error('Error fetching memory bi-weekly data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})


app.get('/bardata',async (req,res)=>{
  const { promisify } = require('util');
  const query = promisify(db.query).bind(db);
  const allData = await query('SELECT * FROM bardata ');
  const allmonthVal = allData.map((record) => record.monthVal);
  const allseoul = allData.map((record) => record.seoul);
  const alltokyo = allData.map((record) => record.tokyo);
try{
  res.status(200).json({
    allData: {
      seoul: allseoul,
     tokyo: alltokyo,
      monthVal: allmonthVal,
    },
  });
  } catch (err) {
  console.error('Error fetching memory data:', err);
  res.status(500).json({ error: 'Internal server error' });
}
});


app.get('/vmlist',async(req,res)=>{
  const {promisify}=require('util');
  const query = promisify(db.query).bind(db);
  const allData = await query('SELECT * FROM vmslist ');
  const allname=allData.map((record)=>record.name)
  const allhost=allData.map((record)=>record.host)
  const alldatastores=allData.map((record)=>record.datastores)
  const allarrays=allData.map((record)=>record.arrays)
  const alltototalusage=allData.map((record)=>record.totalUsage)
  const allvcpu_avg=allData.map((record)=>record.vcpu_avg)
  const allvcpu_peak=allData.map((record)=>record.vcpu_peak);
  const allvmem_avg=allData.map((record)=>record.vmem_avg);
  const allvmem_peak=allData.map((record)=>record.vmem_peak);
  const allactivities=allData.map((record)=>record.lastactivity);
  try{
    res.status(200).json({
      allData:{
        name:allname,
        host:allhost,
        datastores:alldatastores,
        arrays:allarrays,
        totalUsage:alltototalusage,
        vcpu_avg:allvcpu_avg,
        vcpu_peak:allvcpu_peak,
        vmem_avg:allvmem_avg,
        vmem_peak:allvmem_peak,
        lastactivity:allactivities
      } 
    })    
  }
  catch(err){
    console.error('Error fetching vm data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.get('/', async (req, res) => {
  await generateMissingData(db, 'perfomancedata');
  await generateMissingData(db, 'networkdata');
  await generateMissingData(db, 'memorydata');
  try {
    // Fetch 24-hour performance data
    const perfomanceData = await fetchData('/perfomancedata');
    const networkData = await fetchData('/networkdata');
    const memoryData = await fetchData('/memorydata');
    const barData=await fetchData('/bardata');
    const vmData=await fetchData('/vmlist');
    const allPerformanceData = {
      perfomanceData,
      networkData,
      memoryData,
      barData,
      vmData
    };

    // Send the combined data as the response
    res.status(200).json(allPerformanceData);
  } catch (error) {
    console.error('Error fetching performance data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to fetch performance data from the specified route
const fetchData = async (route) => {
  try {
    const response = await fetch(`http://localhost:3050${route}`);
    if (!response.ok) {
      throw new Error(`Error fetching data from ${route}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${route}:`, error);
    return null;
  }
};




app.get('/perfomancedaterange', (req, res) => {
  const { startDate, endDate } = req.query;
  // console.log(startDate,endDate)
  if (!startDate || !endDate) {
    return res.status(400).json({ error: 'Both start and end times are required' });
  }

  // SQL query to fetch data within the date-time range
  const query = 'SELECT * FROM perfomancedata WHERE xLabels BETWEEN ? AND ?';

  db.query(query, [startDate, endDate], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving data' });
    }
    (res.status(200).json(result));
  });
});




app.get('/networkdatedata', (req, res) => {
  const { date } = req.query;
  if (!date) {
    return res.status(400).json({ error: 'Date is required' });
  }

  // const query = 'SELECT * FROM networkdata WHERE xLabels LIKE ?';
  const query = 'SELECT * FROM networkdata WHERE DATE(xLabels) = ?';
  // const likeDate = `${date}%`;
  console.log(query)
  db.query(query, [date], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving data' });
    }
    res.status(200).json(result);
  });
});

app.get('/memorydatedata', (req, res) => {
  const { date } = req.query;
  if (!date) {
    return res.status(400).json({ error: 'Date is required' });
  }

  const query = 'SELECT * FROM memorydata WHERE xLabels LIKE ?';
  // const likeDate = `${date}%`;

  db.query(query, [date], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving data' });
    }
    res.status(200).json(result);
  });
});


// Code to start the server and find an available port
function findAvailablePort(startingPort) {
  const net = require('net');
  let port = startingPort;

  return new Promise((resolve, reject) => {
    const tryPort = () => {
      const server = net.createServer();
      server.once('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          port += 1;
          tryPort();
        } else {
          reject(err);
        }
      });

      server.once('listening', () => {
        server.close();
        resolve(port);
      });

      server.listen(port);
    };

    tryPort();
  });
}

findAvailablePort(3050).then((port) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((error) => {
  console.error('Error finding available port:', error);
});



