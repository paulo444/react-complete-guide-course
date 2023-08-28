import { useState, useEffect } from 'react';

function useCounter(direction = 0){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let interval;
        if(direction == 1){
            interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
        }else if(direction == -1){
            interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);   
        }
        return () => clearInterval(interval);
    }, [direction]);

    return counter;
}

export default useCounter;