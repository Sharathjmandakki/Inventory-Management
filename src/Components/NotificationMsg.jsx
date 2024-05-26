
import React, { useState, useEffect } from 'react';

export default function NotificationMsg() {
    const message = 'Welcome back, ' + window.localStorage.getItem('email') + ' !'
    const [isVisible, setIsVisible] = useState(true);
    const [timer, setTimer] = useState(5); // Initial timer value is set to 5 seconds

    useEffect(() => {
        if (isVisible) {
            const timeout = setTimeout(() => {
                setIsVisible(false);
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [isVisible]);

    useEffect(() => {
        const interval = setInterval(() => {
          setTimer((timer) => timer - 1); // Decrement the timer by 1 second
        }, 1000); // Update the timer every second
    
        // Clear the interval when the component unmounts or when the timer reaches 0
        return () => clearInterval(interval);
      }, []);

    return (
        (isVisible) ? <div id="toast-top-right" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-green-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-green-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
            <div class="text-lg font-normal">{message}</div>
            {/* <div className="progress-bar">
                <div className="progress" style={{ width: `${(timer / 5) * 100}%` }}></div>
            </div> */}
        </div> : <></>
    );
};
