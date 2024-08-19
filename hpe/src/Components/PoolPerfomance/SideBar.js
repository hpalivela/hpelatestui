import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { PieChart } from '@mui/x-charts/PieChart';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './SideBar.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const data = [
    { id: 0, value: 10, label: 'series A', color: '#36454F' },
    { id: 1, value: 15, label: 'series B', color: 'grey' },
    { id: 2, value: 20, label: 'series C', color: '#D3D3D3' },
];

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <div style={{ width: open ? '400px' : '0px', position: 'relative' }} className='vertical2'>
            <div style={{ position: 'absolute', top: '10%', left: '-9%', transform: 'translateY(-50%)' }}>
                <PlayArrowIcon onClick={toggle} style={{ fontSize: '35px', cursor: 'pointer' }} />
            </div>
            {open && (
                <div style={{ padding: '10px' }}>
                    {/* <div style={{position:'relative',left:'20%'}}> */}
                    <div style={{ position: 'relative' }}>
                        <h5>Recommended Actions</h5>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Past Day">
                                <div style={{ fontWeight: '500', fontFamily: 'revert-layer' }}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <h5>Analysis Period</h5>
                                            <h5>02/07/2024 03/07/2024</h5>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <h4>Diagnosis By Score</h4>
                                    <PieChart
                                        series={[
                                            {
                                                data,
                                                highlightScope: { faded: 'global', highlighted: 'item' },
                                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                            },
                                        ]}
                                        height={200}
                                    />
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Past Week">
                                <div style={{ fontWeight: '500', fontFamily: 'revert-layer' }}>
                                <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <h5>Analysis Period</h5>
                                            <h5>27/06/2024 03/07/2024</h5>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <h4>Diagnosis By Score</h4>
                                    <PieChart
                                        series={[
                                            {
                                                data,
                                                highlightScope: { faded: 'global', highlighted: 'item' },
                                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                            },
                                        ]}
                                        height={200}
                                    />
                                        </AccordionDetails>
                                    </Accordion>
                                    {/* <h5>Analysis Period</h5>
                                    <p>27/06/2024 to 03/07/2024</p>
                                    <h4>Diagnosis By Score</h4>
                                    <PieChart
                                        series={[
                                            {
                                                data,
                                                highlightScope: { faded: 'global', highlighted: 'item' },
                                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                            },
                                        ]}
                                        height={200}
                                    /> */}
                                </div>
                            </Tab>

                        </Tabs>
                    </div>
                </div>
            )}
            {/* <div className='vertical2' style={{position:'relative',top:'50%',left:'17%'}}></div> */}
            {/* <div style={{ position: 'absolute', top: '50%', left: '-9%', transform: 'translateY(-50%)' }}>
                <PlayArrowIcon onClick={toggle} style={{ fontSize: '35px', cursor: 'pointer' }} />
            </div> */}
            {/* <div className='vertical2' style={{position:'relative',top:'50%',left:'17%'}}></div> */}
        </div>
    );
}

export default SideBar
