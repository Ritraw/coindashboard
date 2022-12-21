import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import './Header.css'

export default function MobileDrawer() {
    const [flag, setFlag] = useState(false);


    return (
        <div className='drawer-wrapper'>
            <div>
                <React.Fragment>
                    <MenuRoundedIcon className='link' onClick={() => setFlag(true)} />
                    <Drawer anchor={"right"} open={flag}
                        onClose={() => setFlag(false)}
                    >
                        <div className='mobile-drawer'>
                            <a href='/'>
                                <p className='link'>Home</p>
                            </a>
                            <a href='/'>
                                <p className='link'>Compare</p>
                            </a>
                            <a href='/'>
                                <p className='link'>WatchList</p>
                            </a>
                            <a href='/'>
                                <p className='link'>Dashboard</p>
                            </a>

                        </div>
                    </Drawer>
                </React.Fragment>
            </div>
        </div>
    );
}