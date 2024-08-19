// import React, { useEffect, useState } from 'react'
// import { AgGridReact } from 'ag-grid-react';
// // import { PieChart } from '@mui/x-charts/PieChart';
// import { Grid, Paper, Typography } from '@mui/material';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
// import './Tables.css'
// const Tables = () => {
//   const vmList = [
//     {
//       name: "CallManager",
//       host: "ecvm03.eurocircuits.local",
//       datastores: "DATASTORE02-ECNIM02",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "94.1 GiB",
//       vcpu: {
//         average: "136 MHz",
//         peak: "247 MHz",
//       },
//       vmem: {
//         average: "352 MiB",
//         peak: "723.6 MiB",
//       },
//       lastActivity: "24 hours ago",
//     },
//     {
//       name: "CallManager1",
//       host: "ecvm02.eurocircuits.local",
//       datastores: "DATASTORE02-ECNIM02",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "89.5 GiB",
//       vcpu: {
//         average: "111 MHz",
//         peak: "222 MHz",
//       },
//       vmem: {
//         average: "454 MiB",
//         peak: "327.6 MiB",
//       },
//       lastActivity: "24 hours ago",
//     },
//     {
//       name: "ECBAC01",
//       host: "ecvm02.eurocircuits.local",
//       datastores: "DATASTORE01-ECNIM01",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "376.51 GiB",
//       vcpu: {
//         average: "63 MHz",
//         peak: "1,078 MHz",
//       },
//       vmem: {
//         average: "465 MiB",
//         peak: "2.9 GiB",
//       },
//       lastActivity: "23 hours ago",
//     },
//     {
//       name: "ECBD02",
//       host: "ecvm02.eurocircuits.local",
//       datastores: "DATASTORE01-ECNIM01",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "64.1 GiB",
//       vcpu: {
//         average: "46 MHz",
//         peak: "80 MHz",
//       },
//       vmem: {
//         average: "190 MiB",
//         peak: "409.6 MiB",
//       },
//       lastActivity: "22 hours ago",
//     },
//     {
//       name: "ECBFS01",
//       host: "ecvm03.eurocircuits.local",
//       datastores: "DATASTORE03-ECNIM01",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "11.8 TiB",
//       vcpu: {
//         average: "625 MHz",
//         peak: "3,885 MHz",
//       },
//       vmem: {
//         average: "1.5 GiB",
//         peak: "3.7 GiB",
//       },
//       lastActivity: "21 hours ago",
//     },
//     {
//       name: "ECBFS02",
//       host: "ecvm03.eurocircuits.local",
//       datastores: "DATASTORE03-ECNIM02",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "108.1 GiB",
//       vcpu: {
//         average: "36 MHz",
//         peak: "2,485 MHz",
//       },
//       vmem: {
//         average: "253.4 MiB",
//         peak: "3.8 GiB",
//       },
//       lastActivity: "20 hours ago",
//     },
//     {
//       name: "ECBIG01",
//       host: "ecvm02.eurocircuits.local",
//       datastores: "DATASTORE01-ECNIM01",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "316.1 GiB",
//       vcpu: {
//         average: "11.252 MHz",
//         peak: "17,001 MHz",
//       },
//       vmem: {
//         average: "616.4 MiB",
//         peak: "2.9 GiB",
//       },
//       lastActivity: "19 hours ago",
//     },
//     {
//       name: "ECBIG02",
//       host: "ecvm02.eurocircuits.local",
//       datastores: "DATASTORE01-ECNIM01",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "316.1 GiB",
//       vcpu: {
//         average: "28,982 MHz",
//         peak: "45,460 MHz",
//       },
//       vmem: {
//         average: "8.8 GiB",
//         peak: "15.6 GiB",
//       },
//       lastActivity: "18 hours ago",
//     },
//     {
//       name: "ECBIG03",
//       host: "ecvm03.eurocircuits.local",
//       datastores: "DATASTORE02-ECNIM02",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "316.1 GiB",
//       vcpu: {
//         average: "26,797 MHz",
//         peak: "47,285 MHz",
//       },
//       vmem: {
//         average: "8.7 GiB",
//         peak: "20.8 GiB",
//       },
//       lastActivity: "17 hours ago",
//     },
//     {
//       name: "ECBIG04",
//       host: "ecvm04.eurocircuits.local",
//       datastores: "DATASTORE02-ECNIM02",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "316.1 GiB",
//       vcpu: {
//         average: "17,465 MHz",
//         peak: "44,787 MHz",
//       },
//       vmem: {
//         average: "9.0 GiB",
//         peak: "17 GiB",
//       },
//       lastActivity: "16 hours ago",
//     },
//     {
//       name: "ECBAC01",
//       host: "ecvm02.eurocircuits.local",
//       datastores: "DATASTORE01-ECNIM01",
//       array: "ECNIMA01 (AF-214738)",
//       totalUsage: "120.5 GiB",
//       vcpu: {
//         average: "150 MHz",
//         peak: "300 MHz",
//       },
//       vmem: {
//         average: "400 MHz",
//         peak: "30.8 GiB",
//       },
//       lastActivity: "15 hours ago",
//     },
//     {
//       name: "ECBAC02",
//       host: "ecvm03.eurocircuits.local",
//       datastores: "DATASTORE01-ECNIM02",
//       array: "ECNIMA02 (AF-214738)",
//       totalUsage: "200.1 GiB",
//       vcpu: {
//         average: "130 MHz",
//         peak: "260 MHz",
//       },
//       vmem: {
//         average: "350 MHz",
//         peak: "700 MHz",
//       },
//       lastActivity: "14 hours ago",
//     },
//     {
//       name: "ECBAC03",
//       host: "ecvm04.eurocircuits.local",
//       datastores: "DATASTORE03-ECNIM01",
//       array: "ECNIMA03 (AF-214738)",
//       totalUsage: "180.3 GiB",
//       vcpu: {
//         average: "140 MHz",
//         peak: "280 MHz",
//       },
//       vmem: {
//         average: "370 MHz",
//         peak: "45.8 GiB",
//       },
//       lastActivity: "13 hours ago",
//     },
//     {
//       name: "ECBAC04",
//       host: "ecvm05.eurocircuits.local",
//       datastores: "DATASTORE04-ECNIM01",
//       array: "ECNIMA04 (AF-214738)",
//       totalUsage: "160.7 GiB",
//       vcpu: {
//         average: "160 MHz",
//         peak: "320 MHz",
//       },
//       vmem: {
//         average: "380 MHz",
//         peak: "760 MHz",
//       },
//       lastActivity: "12 hours ago",
//     },
//     {
//       name: "ECBAC05",
//       host: "ecvm06.eurocircuits.local",
//       datastores: "DATASTORE05-ECNIM01",
//       array: "ECNIMA05 (AF-214738)",
//       totalUsage: "140.4 GiB",
//       vcpu: {
//         average: "170 MHz",
//         peak: "340 MHz",
//       },
//       vmem: {
//         average: "390 MHz",
//         peak: "780 MHz",
//       },
//       lastActivity: "11 hours ago",
//     },
//     {
//       name: "ECBAC06",
//       host: "ecvm07.eurocircuits.local",
//       datastores: "DATASTORE06-ECNIM01",
//       array: "ECNIMA06 (AF-214738)",
//       totalUsage: "110.6 GiB",
//       vcpu: {
//         average: "180 MHz",
//         peak: "360 MHz",
//       },
//       vmem: {
//         average: "410 MHz",
//         peak: "820 MHz",
//       },
//       lastActivity: "10 hours ago",
//     },
//     {
//       name: "ECBAC07",
//       host: "ecvm08.eurocircuits.local",
//       datastores: "DATASTORE07-ECNIM01",
//       array: "ECNIMA07 (AF-214738)",
//       totalUsage: "130.8 GiB",
//       vcpu: {
//         average: "190 MHz",
//         peak: "380 MHz",
//       },
//       vmem: {
//         average: "420 MHz",
//         peak: "840 MHz",
//       },
//       lastActivity: "9 hours ago",
//     },
//     {
//       name: "ECBAC08",
//       host: "ecvm09.eurocircuits.local",
//       datastores: "DATASTORE08-ECNIM01",
//       array: "ECNIMA08 (AF-214738)",
//       totalUsage: "150.2 GiB",
//       vcpu: {
//         average: "200 MHz",
//         peak: "400 MHz",
//       },
//       vmem: {
//         average: "430 MHz",
//         peak: "860 MHz",
//       },
//       lastActivity: "8 hours ago",
//     },
//     {
//       name: "ECBAC09",
//       host: "ecvm10.eurocircuits.local",
//       datastores: "DATASTORE09-ECNIM01",
//       array: "ECNIMA09 (AF-214738)",
//       totalUsage: "170.5 GiB",
//       vcpu: {
//         average: "250 MHz",
//         peak: "420 MHz",
//       },
//       vmem: {
//         average: "440 MHz",
//         peak: "880 MHz",
//       },
//       lastActivity: "7 hours ago",
//     },
//     {
//       name: "ECBAC10",
//       host: "ecvm11.eurocircuits.local",
//       datastores: "DATASTORE10-ECNIM01",
//       array: "ECNIMA10 (AF-214738)",
//       totalUsage: "190.9 GiB",
//       vcpu: {
//         average: "220 MHz",
//         peak: "440 MHz",
//       },
//       vmem: {
//         average: "450 MHz",
//         peak: "900 MHz",
//       },
//       lastActivity: "6 hours ago",
//     },
//     {
//       name: "ECBAC11",
//       host: "ecvm12.eurocircuits.local",
//       datastores: "DATASTORE10-ECNIM01",
//       array: "ECNIMA10 (AF-214738)",
//       totalUsage: "9.9 GiB",
//       vcpu: {
//         average: "20 MHz",
//         peak: "150 MHz",
//       },
//       vmem: {
//         average: "750 MHz",
//         peak: "950 MHz",
//       },
//       lastActivity: "5 hours ago",
//     },
//     {
//       name: "ECBAC12",
//       host: "ecvm13.eurocircuits.local",
//       datastores: "DATASTORE10-ECNIM01",
//       array: "ECNIMA10 (AF-214738)",
//       totalUsage: "458.2 GiB",
//       vcpu: {
//         average: "990 MHz",
//         peak: "580 MHz",
//       },
//       vmem: {
//         average: "275 MHz",
//         peak: "1258 MHz",
//       },
//       lastActivity: "4 hours ago",
//     },
//     {
//       name: "ECBAC13",
//       host: "ecvm14.eurocircuits.local",
//       datastores: "DATASTORE10-ECNIM01",
//       array: "ECNIMA10 (AF-214738)",
//       totalUsage: "222.2 GiB",
//       vcpu: {
//         average: "850 MHz",
//         peak: "100 MHz",
//       },
//       vmem: {
//         average: "800 MHz",
//         peak: "1545 MHz",
//       },
//       lastActivity: "3 hours ago",
//     },
//     {
//       name: "ECBAC14",
//       host: "ecvm15.eurocircuits.local",
//       datastores: "DATASTORE10-ECNIM01",
//       array: "ECNIMA10 (AF-214738)",
//       totalUsage: "200 GiB",
//       vcpu: {
//         average: "456 MHz",
//         peak: "684 MHz",
//       },
//       vmem: {
//         average: "231 MHz",
//         peak: "156 MHz",
//       },
//       lastActivity: "2 hours ago",
//     },
//     {
//       name: "ECBAC15",
//       host: "ecvm16.eurocircuits.local",
//       datastores: "DATASTORE10-ECNIM01",
//       array: "ECNIMA10 (AF-214738)",
//       totalUsage: "199 GiB",
//       vcpu: {
//         average: "100 MHz",
//         peak: "800 MHz",
//       },
//       vmem: {
//         average: "690 MHz",
//         peak: "500 MHz",
//       },
//       lastActivity: "2 hours ago",
//     },
//   ];

//   // const values = vmList.map((vm) => vm.vcpu.peak);
//   // console.log('Values:', values);

//   // const int_values = values.map((val) => {
//   //   const cleanedVal = val.replace(' MHz', '');
//   //   // console.log('Cleaned Value:', cleanedVal);
//   //   return parseInt(cleanedVal, 10);
//   // });
//   // console.log('Integer Values:', int_values);

//   // const maxVal = Math.max(...int_values);
//   // console.log('Max Value:', maxVal);
//   // const gridRef = useRef(null);

//   const convertToMHz = (value) => {
//     let convertedValue = 0;
//     if (value.includes('MHz')) {
//       convertedValue = parseInt(value.replace(' MHz', '').replace(',', ''), 10);
//     } else if (value.includes('GHz')) {
//       convertedValue = parseInt(value.replace(' GHz', '').replace(',', ''), 10) * 1000;
//     } else if (value.includes('THz')) {
//       convertedValue = parseInt(value.replace(' THz', '').replace(',', ''), 10) * 1000000;
//     }
//     // console.log(`Converted vcpu value: ${value} -> ${convertedValue} MHz`);
//     return convertedValue;
//   };

//   const convertToMiB = (value) => {
//     let convertedValue = 0;
//     if (value.includes('MiB')) {
//       convertedValue = parseFloat(value.replace(' MiB', '').replace(',', ''));
//     } else if (value.includes('GiB')) {
//       convertedValue = parseFloat(value.replace(' GiB', '').replace(',', '')) * 1024;
//     } else if (value.includes('TiB')) {
//       convertedValue = parseFloat(value.replace(' TiB', '').replace(',', '')) * 1048576;
//     }
//     else if (value.includes('MHz')) {
//       convertedValue = parseInt(value.replace(' MHz', '').replace(',', ''), 10);
//     }
//     return convertedValue;
//   };



//   const maxValue_vcpu = Math.max(...vmList.map(vm => convertToMHz(vm.vcpu.peak)));


//   const maxValue_vmem = Math.max(...vmList.map(vm => convertToMiB(vm.vmem.peak)));

//   // console.log('Max Value for vcpu:', maxValue_vcpu);
//   // console.log('Max Value for vmem:', maxValue_vmem);



//   const PeakCellRenderer_vcpu = ({ value }) => {
//     const style_vcpu = {
//       color: convertToMHz(value) === maxValue_vcpu ? '#C70039' : 'black',
//     };
//     return <span style={style_vcpu}>{value}</span>;
//   };

//   const PeakCellRenderer_vmem = ({ value }) => {
//     const style_vmem = {
//       color: convertToMiB(value) === maxValue_vmem ? '#C70039' : 'black',
//     };
//     return <span style={style_vmem}>{value}</span>;
//   };
//   const HostCellRenderer = ({ value }) => {
//     return <a href={`http://${value}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 500 }}>{value}</a>;
//   };

//   const columns = [
//     {
//       headerName: 'NAME', field: 'name', flex: 1, cellRenderer: HostCellRenderer

//     },
//     {
//       headerName: 'HOST', field: 'host', flex: 0.8, cellRenderer: HostCellRenderer,
//     },
//     {
//       headerName: 'DATASTORES', field: 'datastores', flex: 0.6, cellRenderer: HostCellRenderer
//     },
//     {
//       headerName: 'ARRAY', field: 'array', cellRenderer: HostCellRenderer
//     },
//     {
//       headerName: 'TOTAL USAGE', field: 'totalUsage', flex: 1,
//       sortable: true,
//       comparator: (valueA, valueB) => convertToMiB(valueA) - convertToMiB(valueB),
//       cellClass: 'text'
//     },
//     {
//       headerName: 'vcpu ( PAST 24 HOURS)', children: [
//         {
//           headerName: 'Average', field: 'vcpu.average', flex: 1, sortable: true,
//           comparator: (valueA, valueB) => convertToMHz(valueA) - convertToMHz(valueB),
//           cellClass: 'text'
//         },
//         {
//           headerName: 'Peak', field: 'vcpu.peak', flex: 1, cellRenderer: PeakCellRenderer_vcpu,
//           sortable: true,
//           comparator: (valueA, valueB) => convertToMHz(valueA) - convertToMHz(valueB),
//           cellClass: 'text'
//         }
//       ]
//     },
//     {
//       headerName: 'vmem (PAST 24 HOURS)', children: [
//         {
//           headerName: 'Average', field: 'vmem.average', flex: 1, sortable: true,
//           comparator: (valueA, valueB) => convertToMiB(valueA) - convertToMiB(valueB),
//           cellClass: 'text'
//         },
//         {
//           headerName: 'Peak', field: 'vmem.peak', flex: 1, cellRenderer: PeakCellRenderer_vmem,
//           sortable: true,
//           comparator: (valueA, valueB) => convertToMiB(valueA) - convertToMiB(valueB),
//           cellClass: 'text'
//         }
//       ]
//     },
//     {
//       headerName: 'LAST ACTIVITY', field: 'lastActivity', flex: 1,
//       sortable: true,
//       cellClass: 'text',
//       comparator: (valueA, valueB) => {
//         const hoursA = parseInt(valueA.split(" ")[0]);
//         const hoursB = parseInt(valueB.split(" ")[0]);
//         const timeA = new Date(Date.now() - hoursA * 60 * 60 * 1000);
//         const timeB = new Date(Date.now() - hoursB * 60 * 60 * 1000);
//         return timeA - timeB;
//       }
//     },
//   ]


//   const pagination = true;
//   const paginationPageSize = 10;
//   const paginationPageSizeSelector = [5, 7, 10];
//   const [value, setValue] = useState('');
//   const [filteredData, setFilteredData] = useState(vmList);
//   const [appliedSearch, setAppliedSearch] = useState("");
//   const [filterOption, setFilterOption] = useState('All');
//   const [filtered, setFiltered] = useState('');
//   const [active, setActive] = useState(false);
//   const [selection, setSelection] = useState('Total Usage');
//   const [res, setRes] = useState([]);

//   useEffect(()=>{
//     optionsHandler()
//   },[selection])
//   const changeHandler = (e) => {
//     setValue(e.target.value);
//   };
//   const optionChangeHandler = (e) => {
//     setFilterOption(e.target.value);
//   };

//   const searchHandler = () => {
//     if (value) {
//       const searchValue = value.toLowerCase();
//       const newData = vmList.filter(vm => {
//         if (filterOption === 'Name') {
//           return vm.name.toLowerCase().includes(searchValue);
//         } else if (filterOption === 'Host') {
//           return vm.host.toLowerCase().includes(searchValue);
//         } else if (filterOption === 'Array') {
//           return vm.array.toLocaleLowerCase().includes(searchValue)
//         }
//         else {
//           return (
//             vm.name.toLowerCase().includes(searchValue) ||
//             vm.host.toLowerCase().includes(searchValue)
//           );
//         }
//       });
//       setFilteredData(newData);
//       setAppliedSearch(value);
//     } else {
//       setFilteredData(vmList);
//       setAppliedSearch('');
//     }
//   };

//   const clearHandler = () => {
//     setValue('');
//     setFilteredData(vmList);
//     setAppliedSearch('');
//     setFilterOption('All');
//     setActive(false)
//     // setAppliedSearch('')
//   };
//   const handleKeyPress = (e) => {
//     // if (e.key === 'Enter') {
//     e.preventDefault();
//     searchHandler();
//     // }
//   };
//   const convertToCSV = (data) => {
//     const headers = [
//       'NAME', 'HOST', 'DATASTORES', 'ARRAY', 'TOTAL USAGE',
//       'vcpu (PAST 24 HOURS) Average', 'vcpu (PAST 24 HOURS) Peak',
//       'vmem (PAST 24 HOURS) Average', 'vmem (PAST 24 HOURS) Peak',
//       'LAST ACTIVITY'
//     ];

//     const rows = data.map(vm => [
//       vm.name, vm.host, vm.datastores, vm.array, vm.totalUsage,
//       vm.vcpu.average, vm.vcpu.peak,
//       vm.vmem.average, vm.vmem.peak,
//       vm.lastActivity
//     ]);

//     let csvContent = 'data:text/csv;charset=utf-8,';
//     csvContent += headers.join(',') + '\n';

//     rows.forEach(row => {
//       csvContent += row.join(',') + '\n';
//     });

//     return encodeURI(csvContent);
//   };

//   const downloadCSV = (data) => {
//     const csvContent = convertToCSV(data);
//     const link = document.createElement('a');
//     link.setAttribute('href', csvContent);
//     link.setAttribute('download', 'vm_data.csv');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
//   // const convertRelativeTimeToAbsolute = (relativeTime) => {
//   //   const hoursAgo = parseInt(relativeTime.split(' ')[0], 10);
//   //   const fixedCurrentTime = new Date('2024-06-07T08:00:00Z');
//   //   return new Date(fixedCurrentTime.getTime() - hoursAgo * 60 * 60 * 1000);
//   // };
//   const convertRelativeTimeToAbsolute = (relativeTime) => {
//     const hoursAgo = parseInt(relativeTime.split(' ')[0], 10);
//     const fixedCurrentTime = new Date('2024-06-07T08:00:00Z');
//     return new Date(fixedCurrentTime.getTime() - hoursAgo * 60 * 60 * 1000);
//   };

//   const showTop5VcpuAverage = () => {
//     const sevenHoursAgo = new Date(new Date('2024-06-07T08:00:00Z').getTime() - 7 * 60 * 60 * 1000);
//     // console.log(sevenHoursAgo)
//     const recentVMs = vmList.filter(
//       (vm) => convertRelativeTimeToAbsolute(vm.lastActivity) >= sevenHoursAgo
//     );
//     const sortedVMs = recentVMs.sort((a, b) => convertToMHz(b.vcpu.average) - convertToMHz(a.vcpu.average));
//     const top5VMs = sortedVMs.slice(0, 5);
//     setFilteredData(top5VMs);
//     setActive(true)
//     // console.log('Top 5 VMs by vcpu average (recent activity):', top5VMs);
//   };



//   const sevenHours = new Date(new Date('2024-06-07T08:00:00Z').getTime() - 7 * 60 * 60 * 1000);
//   console.log(sevenHours)
//   const recentVM = vmList.filter(
//     (vm) => convertRelativeTimeToAbsolute(vm.lastActivity) >= sevenHours
//   );
//   console.log(recentVM, 'recentones')
//   const sortedVM = recentVM.sort((a, b) => convertToMHz(b.vcpu.average) - convertToMHz(a.vcpu.average));
//   console.log(sortedVM.slice(0, 5), 'sorted 5')
//   const top5vm = sortedVM.slice(0, 5)
//   console.log(top5vm[0], 'top5')
//   // const data = top5vm.map(vm => ({
//   //   name: vm.name,
//   //   value: convertToMHz(vm.vcpu.average)
//   // }));
//   const COLORS = ['red', '#FFCE56', 'orange', 'green', 'blue'];


//   // const top5VMs = sortedVMs.slice(0, 5);
//   // setTop(top5VMs);
//   //   console.log(top)

//   // const showLastActivity = () => {
//   //   const mostRecentTime = Math.max(...vmList.map(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime()));
//   //   const filteredVMs = vmList.filter(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime() === mostRecentTime);
//   //   // console.log('Most Recent Time:', mostRecentTime);
//   //   // console.log('Filtered VMs:', filteredVMs);
//   //   setFilteredData(filteredVMs);
//   // };

//   // const showLazyActivity = () => {
//   //   const mostRecentTime = Math.min(...vmList.map(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime()));
//   //   // console.log(mostRecentTime);
//   //   const filteredVMs = vmList.filter(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime() === mostRecentTime);
//   //   // console.log('Most Recent Time:', mostRecentTime);
//   //   // console.log('Filtered VMs:', filteredVMs);
//   //   setFilteredData(filteredVMs);
//   // };


//   const optionHandler = (e) => {
//     const selectedValue = e.target.value;
//     setFiltered(selectedValue);
//     if (selectedValue === 'Recent activities') {
//       const mostRecentTime = Math.max(...vmList.map(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime()));
//       const filteredVMs = vmList.filter(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime() === mostRecentTime);
//       setFilteredData(filteredVMs);
//     } else if (selectedValue === 'No activity') {
//       const mostRecentTime = Math.min(...vmList.map(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime()));
//       const filteredVMs = vmList.filter(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime() === mostRecentTime);
//       setFilteredData(filteredVMs);
//     }
//   }

//   const optionsHandler = () => {

//     // const selected = e.target.value;
//     // console.log(selected,"selected")
//     // setSelection(selected);
//     if (selection === 'Total Usage') {
//       let data = top5vm.map(vm => ({
//         name: vm.name,
//         value: convertToMiB(vm.totalUsage)
//       }));
//       setRes(data);

//     } else if (selection === 'VCPU Avg') {
//       let data = top5vm.map(vm => ({
//         name: vm.name,
//         value: convertToMHz(vm.vcpu.average)
//       }));
//       setRes(data);
//     } else if (selection === 'VCPU Peak') {

//       let data = top5vm.map(vm => ({
//         name: vm.name,
//         value: convertToMHz(vm.vcpu.peak)
//       }));
//       setRes(data);
//     } else if (selection === 'VMEM Avg') {
//       let data = top5vm.map(vm => ({
//         name: vm.name,
//         value: convertToMHz(vm.vmem.average)
//       }));
//       setRes(data);
//     } else if (selection === 'VMEM Peak') {
//       let data = top5vm.map(vm => ({
//         name: vm.name,
//         value: convertToMHz(vm.vmem.peak)
//       }));
//       setRes(data);
//     }
//   }

//   // console.log(filteredData)

//   const vcpuHandler = () => {
//     showTop5VcpuAverage();
//     console.log('hi')
//   }


//   // const showTop5VcpuAverage = () => {
//   //   const top5Data = vmList
//   //     .map(vm => ({ ...vm, vcpuAverageMHz: convertToMHz(vm.vcpu.average) }))
//   //     .sort((a, b) => b.vcpuAverageMHz - a.vcpuAverageMHz)
//   //     .slice(0, 5);
//   //   setFilteredData(top5Data);
//   // };

//   // const exportToCsv = () => {
//   //   gridRef.current.api.exportDataAsCsv();
//   // };
//   return (
// <div>
//     <div style={{ backgroundColor: '#F0F8FF' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <div>
//           <button style={{ backgroundColor: 'black', color: 'white', borderStyle: 'solid', borderColor: 'black', margin: '10px', fontWeight: 'bold' }}>Summary</button>
//           <button style={{ backgroundColor: 'transparent', borderStyle: 'solid', borderColor: 'black', color: 'grey', margin: '10px' }}>Performance</button>
//         </div>
//         <div>
//           <button style={{ backgroundColor: 'black', borderStyle: 'none', color: 'white', margin: '10px', padding: '2px', fontWeight: 'bold' }} onClick={() => downloadCSV(filteredData)}>Export CSV</button>
//         </div>
//       </div>

//       <Grid container spacing={3}>
//         <Grid item xs={9}>
//           <div className='ag-theme-quartz'>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <select value={filterOption} onChange={optionChangeHandler} className='dropDown'>
//                 <option>All</option>
//                 <option>Name</option>
//                 <option>Host</option>
//                 <option>Array</option>
//               </select>
//               <input type='text' placeholder={`Search by ${filterOption}`} onChange={changeHandler} onKeyPress={(e) => {
//                 if (e.key === "Enter") {
//                   handleKeyPress(e)
//                 }
//               }} className='inputsel' value={value} />

//               {appliedSearch && (
//                 <p className='applied' style={{ marginLeft: '10px' }}>
//                   "{appliedSearch}" <span><button className='butStyle' onClick={clearHandler}>x</button></span>
//                 </p>
//               )}
//               <button
//                 style={{
//                   backgroundColor: active ? 'transparent' : 'transparent',
//                   borderStyle: active ? 'solid' : 'none',
//                   color: active ? 'grey' : 'black',
//                   margin: '10px',
//                   padding: '4px',
//                   fontWeight: 'bold',
//                   fontFamily: 'sans-serif'
//                 }}
//                 onClick={active ? clearHandler : vcpuHandler}
//               >
//                 {active ? (
//                   <span>
//                     Top Running VMs <span style={{ color: 'black' }}>X</span>
//                   </span>) : (
//                   'Top Running VMs'
//                 )}
//               </button>

//               {active && (
//                 <select value={filtered} onChange={optionHandler} className='dropDown'>
//                   <option>Recent activities</option>
//                   <option>No activity</option>
//                 </select>
//               )}
//             </div>
//           </div>
//           <br />
//           <div className="ag-theme-quartz" style={{ height: 570 }}>
//             <AgGridReact rowData={filteredData} columnDefs={columns} pagination={pagination} sortingOrder={['asc', 'desc']}
//               paginationPageSize={paginationPageSize}
//               paginationPageSizeSelector={paginationPageSizeSelector}
//               enableRangeSelection={true}
//               copyHeadersToClipboard={true}
//               enableCellTextSelection={true}
//             />
//           </div>
//         </Grid>
//         <Grid item xs={3} style={{ marginTop: '120px' }}>
//           <Paper>
//             <Typography variant="h6" align="center" style={{ fontWeight: 'bold', fontFamily: 'sans-serif', paddingTop: '15px' }}>
//               Top Running VMs by Last Activity
//             </Typography>
//             <select value={selection} onChange={(e)=>{
//               setSelection(e.target.value)
//               optionsHandler()
//             } } style={{backgroundColor:'transparent',margin:'10px',fontFamily:'serif',marginLeft:'23px',fontWeight:'bold'}}>
//               <option value="Total Usage">Total Usage</option>
//               <option value="VCPU Avg">VCPU Avg</option>
//               <option value="VCPU Peak">VCPU Peak</option>
//               <option value="VMEM Avg">VMEM Avg</option>
//               <option value="VMEM Peak">VMEM Peak</option>
//             </select>
//             <ResponsiveContainer width="100%" height={400}>
//               <PieChart>
//                 <Pie data={res} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
//                   {res.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>

//     {/* <div>
//     <div style={{ backgroundColor: '#F0F8FF' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <div>
//           <button style={{ backgroundColor: 'black', color: 'white', borderStyle: 'solid', borderColor: 'black', margin: '10px', fontWeight: 'bold' }}>Summary</button>
//           <button style={{ backgroundColor: 'transparent', borderStyle: 'solid', borderColor: 'black', color: 'grey', margin: '10px' }}>Performance</button>
//         </div>
//         <div>
//           <button style={{ backgroundColor: 'black', borderStyle: 'none', color: 'white', margin: '10px', padding: '2px', fontWeight: 'bold' }} onClick={() => downloadCSV(filteredData)}>Export CSV</button>
//         </div>
//       </div>

//       <div className='ag-theme-quartz'>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//         <select value={filterOption} onChange={optionChangeHandler} className='dropDown'>
//           <option>All</option>
//           <option>Name</option>
//           <option>Host</option>
//           <option>Array</option>
//         </select>
//           <input type='text' placeholder={`Search by ${filterOption}`} onChange={changeHandler} onKeyPress={(e) => {
//             if (e.key === "Enter") {
//               handleKeyPress(e)
//             }
//           }} className='inputsel' value={value} />

//           {appliedSearch && (
//             <p className='applied' style={{ marginLeft: '10px' }}>
//               "{appliedSearch}" <span><button className='butStyle' onClick={clearHandler}>x</button></span>
//             </p>
//           )}
//           <button
//           style={{
//             backgroundColor: active ? 'transparent' : 'transparent',
//             borderStyle: active ? 'solid' : 'none',
//             color: active ? 'grey' : 'black',
//             margin: '10px',
//             padding: '4px',
//             fontWeight: 'bold',
//             fontFamily: 'sans-serif'
//           }}
//           onClick={active ? clearHandler : vcpuHandler}
//         >
//           {active ? (
//             <span>
//               Top Running VMs <span style={{ color: 'black' }}>X</span>
//             </span>) : (
//             'Top Running VMs'
//           )}
//         </button>

//         {active && (
//           <select value={filtered} onChange={optionHandler} className='dropDown'>
//             <option>Recent activities</option>
//             <option>No activity</option>
//           </select>
//         )}
//         </div>
//       </div>
//       <br />
//       <div className="ag-theme-quartz" style={{ height: 570}}>
//         <AgGridReact rowData={filteredData} columnDefs={columns} pagination={pagination} sortingOrder={['asc', 'desc']}
//           paginationPageSize={paginationPageSize}
//           paginationPageSizeSelector={paginationPageSizeSelector}
//           enableRangeSelection={true}
//           copyHeadersToClipboard={true}
//           enableCellTextSelection={true} 
//         />
//       </div>
//     </div>
//     <div>
//     <PieChart
//   series={[
//     {
//     res,
//       highlightScope: { faded: 'global', highlighted: 'item' },
//       faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
//     },
//   ]}
//   height={200}
// />
//     </div>
//     </div> */}
//     </div>
//   );

// }

// export default Tables






import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
// import { PieChart } from '@mui/x-charts/PieChart';
import { TextField, Select, MenuItem, Button, Grid, Paper, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import './Tables.css'



const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3050/');
    if (response.status === 200 && response.data && response.data.vmData && response.data.vmData.allData) {
      const { name, host, datastores, arrays, totalUsage, vcpu_avg, vcpu_peak, vmem_avg, vmem_peak, lastactivity } = response.data.vmData.allData;
      const formattedData = name.map((val, index) => ({
        name: val,
        host: host[index],
        datastores: datastores[index],
        array: arrays[index],
        totalUsage: totalUsage[index],
        vcpu: { average: vcpu_avg[index], peak: vcpu_peak[index] },
        vmem: { average: vmem_avg[index], peak: vmem_peak[index] },
        lastActivity: lastactivity[index],
      }));
      return formattedData;
    } else {
      throw new Error('Unexpected response structure or missing data.');
    }
  } catch (err) {
    console.error('Error fetching data:', err);
    return [];
  }
};

const Tables = () => {
  const [vmList, setVmList] = useState([]);
  const [filteredData, setFilteredData] = useState(vmList);
  const [appliedSearch, setAppliedSearch] = useState("");
  const [filterOption, setFilterOption] = useState('All');
  const [filtered, setFiltered] = useState('');
  const [active, setActive] = useState(false);
  const [selection, setSelection] = useState('Total Usage');
  const [res, setRes] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState('');
  // const [appliedSearch, setAppliedSearch] = useState('');
  // const [filterOption, setFilterOption] = useState('All');
  // const [active, setActive] = useState(false);
  // const [selection, setSelection] = useState('Total Usage');
  // const [res, setRes] = useState([]);




  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setVmList(data);
      setFilteredData(data);
    };
    loadData();
  }, []);


  const convertToMHz = (value) => {
    let convertedValue = 0;
    if (value.includes('MHz')) {
      convertedValue = parseInt(value.replace(' MHz', '').replace(',', ''), 10);
    } else if (value.includes('GHz')) {
      convertedValue = parseInt(value.replace(' GHz', '').replace(',', ''), 10) * 1000;
    } else if (value.includes('THz')) {
      convertedValue = parseInt(value.replace(' THz', '').replace(',', ''), 10) * 1000000;
    }
    // console.log(`Converted vcpu value: ${value} -> ${convertedValue} MHz`);
    return convertedValue;
  };





  const convertToMiB = (value) => {
    let convertedValue = 0;
    if (value.includes('MiB')) {
      convertedValue = parseFloat(value.replace(' MiB', '').replace(',', ''));
    } else if (value.includes('GiB')) {
      convertedValue = parseFloat(value.replace(' GiB', '').replace(',', '')) * 1024;
    } else if (value.includes('TiB')) {
      convertedValue = parseFloat(value.replace(' TiB', '').replace(',', '')) * 1048576;
    }
    else if (value.includes('MHz')) {
      convertedValue = parseInt(value.replace(' MHz', '').replace(',', ''), 10);
    }
    return convertedValue;
  };



  const maxValue_vcpu = Math.max(...vmList.map(vm => convertToMHz(vm.vcpu.peak)));


  const maxValue_vmem = Math.max(...vmList.map(vm => convertToMiB(vm.vmem.peak)));

  // console.log('Max Value for vcpu:', maxValue_vcpu);
  // console.log('Max Value for vmem:', maxValue_vmem);



  const PeakCellRenderer_vcpu = ({ value }) => {
    const style_vcpu = {
      color: convertToMHz(value) === maxValue_vcpu ? '#C70039' : 'black',
    };
    return <span style={style_vcpu}>{value}</span>;
  };

  const PeakCellRenderer_vmem = ({ value }) => {
    const style_vmem = {
      color: convertToMiB(value) === maxValue_vmem ? '#C70039' : 'black',
    };
    return <span style={style_vmem}>{value}</span>;
  };
  const HostCellRenderer = ({ value }) => {
    return <a href={`http://${value}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 500 }}>{value}</a>;
  };

  const columns = [
    {
      headerName: 'NAME', field: 'name', flex: 1, cellRenderer: HostCellRenderer
  
    },
    {
      headerName: 'HOST', field: 'host', flex: 0.8, cellRenderer: HostCellRenderer,
    },
    {
      headerName: 'DATASTORES', field: 'datastores', flex: 1, cellRenderer: HostCellRenderer
    },
    {
      headerName: 'ARRAY', field: 'array', cellRenderer: HostCellRenderer
    },
    {
      headerName: 'TOTAL USAGE', field: 'totalUsage', flex: 1,
      sortable: true,
      comparator: (valueA, valueB) => convertToMiB(valueA) - convertToMiB(valueB),
      cellClass: 'text'
    },
    {
      headerName: 'vcpu ( PAST 24 HOURS)', children: [
        {
          headerName: 'Average', field: 'vcpu.average', flex: 1, sortable: true,
          comparator: (valueA, valueB) => convertToMHz(valueA) - convertToMHz(valueB),
          cellClass: 'text'
        },
        {
          headerName: 'Peak', field: 'vcpu.peak', flex: 1, cellRenderer: PeakCellRenderer_vcpu,
          sortable: true,
          comparator: (valueA, valueB) => convertToMHz(valueA) - convertToMHz(valueB),
          cellClass: 'text'
        }
      ]
    },
    {
      headerName: 'vmem (PAST 24 HOURS)', children: [
        {
          headerName: 'Average', field: 'vmem.average', flex: 1, sortable: true,
          comparator: (valueA, valueB) => convertToMiB(valueA) - convertToMiB(valueB),
          cellClass: 'text'
        },
        {
          headerName: 'Peak', field: 'vmem.peak', flex: 1, cellRenderer: PeakCellRenderer_vmem,
          sortable: true,
          comparator: (valueA, valueB) => convertToMiB(valueA) - convertToMiB(valueB),
          cellClass: 'text'
        }
      ]
    },
    {
      headerName: 'LAST ACTIVITY', field: 'lastActivity', flex: 1,
      sortable: true,
      cellClass: 'text',
      comparator: (valueA, valueB) => {
        const hoursA = parseInt(valueA.split(" ")[0]);
        const hoursB = parseInt(valueB.split(" ")[0]);
        const timeA = new Date(Date.now() - hoursA * 60 * 60 * 1000);
        const timeB = new Date(Date.now() - hoursB * 60 * 60 * 1000);
        return timeA - timeB;
      }
    },
  ]


  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [5, 7, 10];

  

  useEffect(() => {
    optionsHandler()
  }, [selection])
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const optionChangeHandler = (e) => {
    setFilterOption(e.target.value);
  };
  
  
  const searchHandler = () => {
    if (value) {
      const searchValue = value.toLowerCase();
      const newData = vmList.filter(vm => {
        if (filterOption === 'Name') {
          return vm.name.toLowerCase().includes(searchValue);
        } else if (filterOption === 'Host') {
          return vm.host.toLowerCase().includes(searchValue);
        } else if (filterOption === 'Array') {
          return vm.array.toLocaleLowerCase().includes(searchValue)
        }
        else {
          return (
            vm.name.toLowerCase().includes(searchValue) ||
            vm.host.toLowerCase().includes(searchValue)
          );
        }
      });
      setFilteredData(newData);
      setAppliedSearch(value);
    } else {
      setFilteredData(vmList);
      setAppliedSearch('');
    }
  };

  const clearHandler = () => {
    setValue('');
    setFilteredData(vmList);
    setAppliedSearch('');
    setFilterOption('All');
    setActive(false)
    // setAppliedSearch('')
  };

  const handleKeyPress = (e) => {
    // if (e.key === 'Enter') {
    e.preventDefault();
    searchHandler();
    // }
  };

  const convertToCSV = (data) => {
    const headers = [
      'NAME', 'HOST', 'DATASTORES', 'ARRAY', 'TOTAL USAGE',
      'vcpu (PAST 24 HOURS) Average', 'vcpu (PAST 24 HOURS) Peak',
      'vmem (PAST 24 HOURS) Average', 'vmem (PAST 24 HOURS) Peak',
      'LAST ACTIVITY'
    ];
  
    const rows = data.map(vm => [
      vm.name, vm.host, vm.datastores, vm.array, vm.totalUsage,
      vm.vcpu.average, vm.vcpu.peak,
      vm.vmem.average, vm.vmem.peak,
      vm.lastActivity
    ]);
  
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += headers.join(',') + '\n';
  
    rows.forEach(row => {
      csvContent += row.join(',') + '\n';
    });
  
    return encodeURI(csvContent);
  };
  
  const downloadCSV = (data) => {
    const csvContent = convertToCSV(data);
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', 'vm_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // const convertRelativeTimeToAbsolute = (relativeTime) => {
  //   const hoursAgo = parseInt(relativeTime.split(' ')[0], 10);
  //   const fixedCurrentTime = new Date('2024-06-07T08:00:00Z');
  //   return new Date(fixedCurrentTime.getTime() - hoursAgo * 60 * 60 * 1000);
  // };
  const convertRelativeTimeToAbsolute = (relativeTime) => {
    const hoursAgo = parseInt(relativeTime.split(' ')[0], 10);
    const fixedCurrentTime = new Date('2024-06-07T08:00:00Z');
    return new Date(fixedCurrentTime.getTime() - hoursAgo * 60 * 60 * 1000);
  };
  
  const showTop5VcpuAverage = () => {
    const sevenHoursAgo = new Date(new Date('2024-06-07T08:00:00Z').getTime() - 7 * 60 * 60 * 1000);
    // console.log(sevenHoursAgo)
    const recentVMs = vmList.filter(
      (vm) => convertRelativeTimeToAbsolute(vm.lastActivity) >= sevenHoursAgo
    );
    const sortedVMs = recentVMs.sort((a, b) => convertToMHz(b.vcpu.average) - convertToMHz(a.vcpu.average));
    const top5VMs = sortedVMs.slice(0, 5);
    setFilteredData(top5VMs);
    setActive(true)
    // console.log('Top 5 VMs by vcpu average (recent activity):', top5VMs);
  };
  
  
  
  const sevenHours = new Date(new Date('2024-06-07T08:00:00Z').getTime() - 7 * 60 * 60 * 1000);
  console.log(sevenHours)
  const recentVM = vmList.filter(
    (vm) => convertRelativeTimeToAbsolute(vm.lastActivity) >= sevenHours
  );
  console.log(recentVM, 'recentones')
  const sortedVM = recentVM.sort((a, b) => convertToMHz(b.vcpu.average) - convertToMHz(a.vcpu.average));
  console.log(sortedVM.slice(0, 5), 'sorted 5')
  const top5vm = sortedVM.slice(0, 5)
  console.log(top5vm[0], 'top5')
  // const data = top5vm.map(vm => ({
  //   name: vm.name,
  //   value: convertToMHz(vm.vcpu.average)
  // }));
  const COLORS = ['red', '#FFCE56', 'orange', 'green', 'blue'];
  
  
  // const top5VMs = sortedVMs.slice(0, 5);
  // setTop(top5VMs);
  //   console.log(top)
  
  // const showLastActivity = () => {
  //   const mostRecentTime = Math.max(...vmList.map(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime()));
  //   const filteredVMs = vmList.filter(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime() === mostRecentTime);
  //   // console.log('Most Recent Time:', mostRecentTime);
  //   // console.log('Filtered VMs:', filteredVMs);
  //   setFilteredData(filteredVMs);
  // };
  
  // const showLazyActivity = () => {
  //   const mostRecentTime = Math.min(...vmList.map(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime()));
  //   // console.log(mostRecentTime);
  //   const filteredVMs = vmList.filter(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime() === mostRecentTime);
  //   // console.log('Most Recent Time:', mostRecentTime);
  //   // console.log('Filtered VMs:', filteredVMs);
  //   setFilteredData(filteredVMs);
  // };
  
  
  const optionHandler = (e) => {
    const selectedValue = e.target.value;
    setFiltered(selectedValue);
    if (selectedValue === 'Recent activities') {
      const mostRecentTime = Math.max(...vmList.map(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime()));
      const filteredVMs = vmList.filter(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime() === mostRecentTime);
      setFilteredData(filteredVMs);
    } else if (selectedValue === 'No activity') {
      const mostRecentTime = Math.min(...vmList.map(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime()));
      const filteredVMs = vmList.filter(vm => convertRelativeTimeToAbsolute(vm.lastActivity).getTime() === mostRecentTime);
      setFilteredData(filteredVMs);
    }
  }
  

  const optionsHandler = () => {
  
    // const selected = e.target.value;
    // console.log(selected,"selected")
    // setSelection(selected);
    if (selection === 'Total Usage') {
      let data = top5vm.map(vm => ({
        name: vm.name,
        value: convertToMiB(vm.totalUsage)
      }));
      setRes(data);
  
    } else if (selection === 'VCPU Avg') {
      let data = top5vm.map(vm => ({
        name: vm.name,
        value: convertToMHz(vm.vcpu.average)
      }));
      setRes(data);
    } else if (selection === 'VCPU Peak') {
  
      let data = top5vm.map(vm => ({
        name: vm.name,
        value: convertToMHz(vm.vcpu.peak)
      }));
      setRes(data);
    } else if (selection === 'VMEM Avg') {
      let data = top5vm.map(vm => ({
        name: vm.name,
        value: convertToMHz(vm.vmem.average)
      }));
      setRes(data);
    } else if (selection === 'VMEM Peak') {
      let data = top5vm.map(vm => ({
        name: vm.name,
        value: convertToMHz(vm.vmem.peak)
      }));
      setRes(data);
    }
  }


  useEffect(() => {
    if (top5vm && top5vm.length > 0) {
      optionsHandler();
    }
  }, [top5vm]);
  useEffect(() => {
    optionsHandler(); 
  }, [selection]);
  
  
  // console.log(filteredData)
  
  const vcpuHandler = () => {
    showTop5VcpuAverage();
    console.log('hi')
  }

console.log(selection,'from line 1396 selcy=toin')

  return (

    <div style={{ backgroundColor: '#F0F8FF' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <button style={{ backgroundColor: 'black', color: 'white', borderStyle: 'solid', borderColor: 'black', margin: '10px', fontWeight: 'bold' }}>Summary</button>
          <button style={{ backgroundColor: 'transparent', borderStyle: 'solid', borderColor: 'black', color: 'grey', margin: '10px' }}>Performance</button>
        </div>
        <div>
          <button style={{ backgroundColor: 'black', borderStyle: 'none', color: 'white', margin: '10px', padding: '2px', fontWeight: 'bold' }} onClick={() => downloadCSV(filteredData)}>Export CSV</button>
        </div>
      </div>
  
      <Grid container spacing={3}>
        <Grid item xs={8.8}>
          <div className='ag-theme-quartz'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <select value={filterOption} onChange={optionChangeHandler} className='dropDown'>
                <option>All</option>
                <option>Name</option>
                <option>Host</option>
                <option>Array</option>
              </select>
              <input type='text' placeholder={`Search by ${filterOption}`} onChange={changeHandler} onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleKeyPress(e)
                }
              }} className='inputsel' value={value} />
  
              {appliedSearch && (
                <p className='applied' style={{ marginLeft: '10px' }}>
                  "{appliedSearch}" <span><button className='butStyle' onClick={clearHandler}>x</button></span>
                </p>
              )}
              <button
                style={{
                  backgroundColor: active ? 'transparent' : 'transparent',
                  borderStyle: active ? 'solid' : 'none',
                  color: active ? 'grey' : 'black',
                  margin: '10px',
                  padding: '4px',
                  fontWeight: 'bold',
                  fontFamily: 'sans-serif'
                }}
                onClick={active ? clearHandler : vcpuHandler}
              >
                {active ? (
                  <span>
                    Top Running VMs <span style={{ color: 'black' }}>X</span>
                  </span>) : (
                  'Top Running VMs'
                )}
              </button>
  
              {active && (
                <select value={filtered} onChange={optionHandler} className='dropDown'>
                  <option>Recent activities</option>
                  <option>No activity</option>
                </select>
              )}
            </div>
          </div>
          <br />
          <div className="ag-theme-quartz" style={{ height: 570 }}>
            <AgGridReact rowData={filteredData} columnDefs={columns} pagination={pagination} sortingOrder={['asc', 'desc']}
              paginationPageSize={paginationPageSize}
              paginationPageSizeSelector={paginationPageSizeSelector}
              enableRangeSelection={true}
              copyHeadersToClipboard={true}
              enableCellTextSelection={true}
            />
          </div>
        </Grid>
        <Grid item xs={3} style={{ marginTop: '120px' }}>
      <Paper>
        <Typography
          variant="h6"
          align="center"
          style={{ fontWeight: 'bold', fontFamily: 'sans-serif', paddingTop: '15px' }}
        >
          Top Running VMs by Last Activity
        </Typography>
        <select
          onChange={(e) => {
            console.log(e.target.value, 'Selected Option'); // Logs when user changes selection
            setSelection(e.target.value);
          }}
          style={{
            backgroundColor: 'transparent',
            margin: '10px',
            fontFamily: 'serif',
            marginLeft: '23px',
            fontWeight: 'bold',
          }}
          value={selection} // Ensure the select element reflects the current state
        >
          <option value="Total Usage">Total Usage</option>
          <option value="VCPU Avg">VCPU Avg</option>
          <option value="VCPU Peak">VCPU Peak</option>
          <option value="VMEM Avg">VMEM Avg</option>
          <option value="VMEM Peak">VMEM Peak</option>
        </select>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={res}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {res.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
      </Grid>
    </div>
  )};

export default Tables



























