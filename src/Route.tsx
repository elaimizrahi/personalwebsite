import { useMediaQuery } from 'react-responsive'
import App from './App'
import Mobile from './Mobile'


const Route = () => {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1000 });

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