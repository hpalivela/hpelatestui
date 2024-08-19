// import React from 'react'
// import StorageIcon from '@mui/icons-material/Storage';
// import { FaHeartCircleCheck } from "react-icons/fa6";
// import { FaHeartCircleXmark } from "react-icons/fa6";
// import { MdOutlineVideoSettings } from "react-icons/md";
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import './SystemMonitors.css';


// const SystemMonitors = () => {

//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handlePopoverOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handlePopoverClose = () => {
//         setAnchorEl(null);
//     };

//     const open = Boolean(anchorEl);
//     return (
//         <center>
//             <div className='d-flex'>
//                 <div className='array1'>
//                     <h4>Systems</h4>
//                     <div>
//                         <h6>HARDWARE</h6>
//                         <StorageIcon style={{ fontSize: '32px' }} />
//                         <h6>76</h6>
//                         <h6>Arrays</h6>
//                         {/* <h1><span style={{ color: 'green' }}>45</span> <span style={{ fontSize: '18px' }}>vs </span><span style={{ color: 'red' }}>66</span></h1> */}
//                     </div>
//                 </div>
//                 <div className='Array'>
//                     <div className='d-flex '>
//                         <div style={{ width: 'calc(30vh - 30px)' }}>
//                             <Typography
//                                 aria-owns={open ? 'mouse-over-popover' : undefined}
//                                 aria-haspopup="true"
//                                 onMouseEnter={handlePopoverOpen}
//                                 onMouseLeave={handlePopoverClose}
//                             >
//                                 <FaHeartCircleCheck className='greenHeart' />
//                             </Typography>
//                             <Popover
//                                 id="mouse-over-popover"
//                                 sx={{
//                                     pointerEvents: 'none',
//                                 }}
//                                 open={open}
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'left',
//                                 }}
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 onClose={handlePopoverClose}
//                                 disableRestoreFocus
//                             >
//                                 <Typography sx={{ p: 1 }}>Lorem ipsum dolor
//                                 </Typography>
//                             </Popover>                        <h6>HEART BEAT</h6>
//                             <p style={{ fontWeight: 'bold' }}>45</p>
//                         </div>
//                         <div style={{ width: 'calc(100% - 30px)' }}>
//                             <Typography
//                                 aria-owns={open ? 'mouse-over-popover' : undefined}
//                                 aria-haspopup="true"
//                                 onMouseEnter={handlePopoverOpen}
//                                 onMouseLeave={handlePopoverClose}
//                             >
//                                 <FaHeartCircleXmark className='redHeart' />
//                             </Typography>
//                             <Popover
//                                 id="mouse-over-popover"
//                                 sx={{
//                                     pointerEvents: 'none',
//                                 }}
//                                 open={open}
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'left',
//                                 }}
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 onClose={handlePopoverClose}
//                                 disableRestoreFocus
//                             >
//                                 <Typography sx={{ p: 1 }}>Lorem ipsum dolor2
//                                 </Typography>
//                             </Popover>
//                             <h6>HEART BEAT</h6>
//                             <p style={{ fontWeight: 'bold' }}>66</p>
//                         </div>
//                     </div>
//                     <div className='d-flex'>
//                         <div style={{ width: 'calc(100% - 110px)' }}>
//                             <Typography
//                                 aria-owns={open ? 'mouse-over-popover' : undefined}
//                                 aria-haspopup="true"
//                                 onMouseEnter={handlePopoverOpen}
//                                 onMouseLeave={handlePopoverClose}
//                             >
//                                 <MdOutlineVideoSettings style={{ fontSize: '32px', color: 'lightgreen' }} />
//                             </Typography>
//                             <Popover
//                                 id="mouse-over-popover"
//                                 sx={{
//                                     pointerEvents: 'none',
//                                 }}
//                                 open={open}
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'left',
//                                 }}
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 onClose={handlePopoverClose}
//                                 disableRestoreFocus
//                             >
//                                 <Typography sx={{ p: 1 }}>Lorem ipsum dolor3
//                                 </Typography>
//                             </Popover>
//                             <p style={{ fontWeight: 'bold' }}>41</p>
//                         </div>
//                         <div style={{ width: 'calc(100% - 70px)' }}>
//                             <Typography
//                                 aria-owns={open ? 'mouse-over-popover' : undefined}
//                                 aria-haspopup="true"
//                                 onMouseEnter={handlePopoverOpen}
//                                 onMouseLeave={handlePopoverClose}
//                             >
//                                 <MdOutlineVideoSettings style={{ fontSize: '32px', color: 'red' }} />
//                             </Typography>
//                             <Popover
//                                 id="mouse-over-popover"
//                                 sx={{
//                                     pointerEvents: 'none',
//                                 }}
//                                 open={open}
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'left',
//                                 }}
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 onClose={handlePopoverClose}
//                                 disableRestoreFocus
//                             >
//                                 <Typography sx={{ p: 1 }}>Lorem ipsum dolor4
//                                 </Typography>
//                             </Popover>
//                             <p style={{ fontWeight: 'bold' }}>70</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </center>
//     )
// }

// export default SystemMonitors;




import React from 'react';
import StorageIcon from '@mui/icons-material/Storage';
import { FaHeartCircleCheck, FaHeartCircleXmark } from "react-icons/fa6";
import { MdOutlineVideoSettings } from "react-icons/md";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import './SystemMonitors.css';

const SystemMonitors = () => {
    // const [anchorElHardware, setAnchorElHardware] = React.useState(null);
    const [anchorElHeartbeatGreen, setAnchorElHeartbeatGreen] = React.useState(null);
    const [anchorElHeartbeatRed, setAnchorElHeartbeatRed] = React.useState(null);
    const [anchorElHeartbeatorange, setAnchorElHeartbeatorange] = React.useState(null);
    const [anchorElVideoSettingsGreen, setAnchorElVideoSettingsGreen] = React.useState(null);
    const [anchorElVideoSettingsRed, setAnchorElVideoSettingsRed] = React.useState(null);
    // const [anchorElVideoSettingsorange, setAnchorElVideoSettingsorange] = React.useState(null);


    const handlePopoverOpen = (setter) => (event) => {
        setter(event.currentTarget);
    };

    const handlePopoverClose = (setter) => () => {
        setter(null);
    };

    // const openHardware = Boolean(anchorElHardware);
    const openHeartbeatGreen = Boolean(anchorElHeartbeatGreen);
    const openHeartbeatRed = Boolean(anchorElHeartbeatRed);
    const openHeartbeatorange = Boolean(anchorElHeartbeatorange);
    const openVideoSettingsGreen = Boolean(anchorElVideoSettingsGreen);
    const openVideoSettingsRed = Boolean(anchorElVideoSettingsRed);
    // const openVideoSettingsorange=Boolean(anchorElVideoSettingsorange)

    return (
        <center>
            <div className='d-flex' style={{justifyContent:'space-around'}}>
                <div className='array1'>
                    <h4>Systems</h4>
                    <div>
                        <h6>HARDWARE</h6>
                        <StorageIcon style={{ fontSize: '32px' }} />
                        <h6>75</h6>
                        <h6>Arrays</h6>
                    </div>
                </div>
                <div className='Array'>
                    <div className='d-flex '>
                        <div style={{ width: 'calc(100% - 180px)' }}>
                            <Typography
                                aria-owns={openHeartbeatRed ? 'mouse-over-popover-red' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen(setAnchorElHeartbeatRed)}
                                onMouseLeave={handlePopoverClose(setAnchorElHeartbeatRed)}
                            >
                                <FaHeartCircleXmark className='redHeart' />
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
                            <h6 style={{fontSize:'11px'}}>HEART BEAT</h6>
                            <p style={{ fontWeight: 'bold' }}>30</p>
                        </div>
                        <div style={{ width: 'calc(100% - 30px)' }}>
                            <Typography
                                aria-owns={openHeartbeatorange ? 'mouse-over-popover-orange' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen(setAnchorElHeartbeatorange)}
                                onMouseLeave={handlePopoverClose(setAnchorElHeartbeatorange)}
                            >
                                <FaHeartCircleXmark className='orangeHeart' />
                            </Typography>
                            <Popover
                                id="mouse-over-popover-orange"
                                sx={{ pointerEvents: 'none' }}
                                open={openHeartbeatorange}
                                anchorEl={anchorElHeartbeatorange}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handlePopoverClose(setAnchorElHeartbeatorange)}
                                disableRestoreFocus
                            >
                                {/* <Typography sx={{ p: 1 }}>Lorem ipsum dolor2</Typography> */}
                                <Typography sx={{ p: 1, maxWidth: 200, maxHeight: 200, overflow: 'auto' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula turpis sit amet ante tincidunt, nec suscipit nunc auctor. 
                                    {/* Curabitur vehicula massa sed felis dictum, at fermentum mi sagittis. */}
                                </Typography>
                            </Popover>
                            <h6 style={{fontSize:'11px'}}>HEART BEAT</h6>
                            <p style={{ fontWeight: 'bold' }}>22</p>
                        </div>
                        <div style={{ width: 'calc(30vh - 30px)' }}>
                            <Typography
                                aria-owns={openHeartbeatGreen ? 'mouse-over-popover-green' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen(setAnchorElHeartbeatGreen)}
                                onMouseLeave={handlePopoverClose(setAnchorElHeartbeatGreen)}
                            >
                                <FaHeartCircleCheck className='greenHeart' />
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
                            <h6 style={{fontSize:'11px'}}>HEART BEAT</h6>
                            <p style={{ fontWeight: 'bold' }}>23</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div style={{ width: 'calc(100% - 180px)' }}>
                            <Typography
                                aria-owns={openVideoSettingsRed ? 'mouse-over-popover-vsred' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen(setAnchorElVideoSettingsRed)}
                                onMouseLeave={handlePopoverClose(setAnchorElVideoSettingsRed)}
                            >
                                <MdOutlineVideoSettings style={{ fontSize: '36px', color: 'red' }} />
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
                            <h6 style={{fontSize:'11px'}}>CALL HOME</h6>
                            <p style={{ fontWeight: 'bold' }}>8</p>
                        </div>
                        <div style={{ width: 'calc(100% - 30px)' }}>
                            <Typography
                                aria-owns={openHeartbeatorange ? 'mouse-over-popover-orange' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen(setAnchorElHeartbeatorange)}
                                onMouseLeave={handlePopoverClose(setAnchorElHeartbeatorange)}
                            >
                                {/* <FaHeartCircleXmark className='orangeHeart' /> */}
                                <MdOutlineVideoSettings style={{ fontSize: '36px', color: 'orange' }} />
                            </Typography>
                            <Popover
                                id="mouse-over-popover-orange"
                                sx={{ pointerEvents: 'none' }}
                                open={openHeartbeatorange}
                                anchorEl={anchorElHeartbeatorange}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handlePopoverClose(setAnchorElHeartbeatorange)}
                                disableRestoreFocus
                            >
                                {/* <Typography sx={{ p: 1 }}>Lorem ipsum dolor2</Typography> */}
                                <Typography sx={{ p: 1, maxWidth: 200, maxHeight: 200, overflow: 'auto' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula turpis sit amet ante tincidunt, nec suscipit nunc auctor. 
                                    {/* Curabitur vehicula massa sed felis dictum, at fermentum mi sagittis. */}
                                </Typography>
                            </Popover>
                            <h6 style={{fontSize:'11px'}}>CALL HOME</h6>

                            <p style={{ fontWeight: 'bold' }}>37</p>
                        </div> 
                        <div style={{ width: 'calc(100% - 110px)' }}>
                            <Typography
                                aria-owns={openVideoSettingsGreen ? 'mouse-over-popover-vsgreen' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen(setAnchorElVideoSettingsGreen)}
                                onMouseLeave={handlePopoverClose(setAnchorElVideoSettingsGreen)}
                            >
                                <MdOutlineVideoSettings style={{ fontSize: '36px', color: 'lightgreen' }} />
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
                            <h6 style={{fontSize:'11px'}}>CALL HOME</h6>
                            <p style={{ fontWeight: 'bold' }}>30</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </center>
    );
}

export default SystemMonitors;


