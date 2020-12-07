import { useEffect, useState} from 'react';

const Route = ({path, children}) => {
    useEffect(() => {
        const onLocationChange = () =>{
            console.log('Location Chnage');
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    },[]);
    return window.location.pathname === path ? children: null;
};



export default Route;