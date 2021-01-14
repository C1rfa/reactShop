/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export const Timer = props => {
    const [endDate, ] = React.useState(new Date(props.endDate).getTime());
    const [currentDate, setCurrentDate] = React.useState(new Date().getTime());
    const [title, ] = React.useState(props.title);

    const secondsRef = React.useRef('00');
    const minutesRef = React.useRef('00');
    const hoursRef = React.useRef('00');

    const intervalRef = React.useRef(null);

    const getRemainigTime = () => {
        const timeRemaining = (endDate - currentDate) / 1000;
       
        hoursRef.current = Math.floor(timeRemaining / 3600);
        minutesRef.current = Math.floor((timeRemaining / 60) % 60);
        secondsRef.current = Math.floor(timeRemaining % 60);

        if(hoursRef.current >= 0) {
            hoursRef.current = (hoursRef.current / 10) < 1 ? `0${hoursRef.current}` : hoursRef.current;
            minutesRef.current = (minutesRef.current / 10) < 1 ? `0${minutesRef.current}` : minutesRef.current;  
            secondsRef.current = (secondsRef.current / 10) < 1 ? `0${secondsRef.current}` : secondsRef.current;    
        } else {
            hoursRef.current = '00';
            minutesRef.current = '00';
            secondsRef.current = '00';
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    getRemainigTime();

    React.useEffect(() => {
        if(currentDate < endDate) {
            intervalRef.current = setInterval(() => {
                setCurrentDate(new Date().getTime());
            }, 1000);
        }
    }, []);

    React.useEffect(() => {
        getRemainigTime();
    }, [currentDate])

    React.useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [endDate]);

    return(
        <div className="container">
            <div className="row text-center mt-5 mb-2">
              <h2 className="text-uppercase"> {props.lang === 'en' ? "till end of " : props.lang === 'ru' ? "Сегодняшние " : ""} { title }</h2>
            </div>
            <div className="row justify-content-center border rounded-pill border-danger border-4 fw-bold fs-1" id="countdown">
                { hoursRef.current } : { minutesRef.current } : { secondsRef.current }
            </div>
        </div>
    );
};