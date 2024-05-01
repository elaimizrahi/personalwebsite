import React from 'react'
import { useMediaQuery } from 'react-responsive'
import App from './App'
import Mobile from './Mobile'
import { isMobile } from 'react-device-detect';


const Route = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
    const isBigScreen = useMediaQuery({ minWidth: 1824 });
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
    const isPortrait = useMediaQuery({ orientation: 'portrait' });
    const isRetina = useMediaQuery({ minResolution: '2dppx' });

    return (
        <>
            {(!isTabletOrMobile) ?
                <App />
                : <Mobile/>
            }
            
        </>
    );
};


export default Route