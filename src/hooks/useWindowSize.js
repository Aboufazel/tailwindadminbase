"use client";
import { useState, useEffect } from 'react';
import {  isDesktop } from 'react-device-detect';
export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState([
        (typeof window !== 'undefined')?window.innerWidth:0,
        (typeof window !== 'undefined')?window.innerHeight:0,
    ]);
    useEffect(() => {
        setWindowSize([window.innerWidth, window.innerHeight]);

        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, []);
    const handleIsMobile=()=>{
        if(windowSize[0]===0)
            return !isDesktop;

        return windowSize[0]<=1000;
    }

    return {
        width:windowSize[0],
        height:windowSize[1],
        isTabletOrMobile:handleIsMobile()
    }
}