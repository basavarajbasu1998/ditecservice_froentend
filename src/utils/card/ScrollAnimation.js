// import React from 'react';
// import { useScrollTrigger, Slide } from '@mui/material';

// const ScrollAnimation = ({ children, timeout = 30000 }) => {
//     const trigger = useScrollTrigger({
//         disableHysteresis: true,
//         threshold: 100,
//     });

//     return (
//         <Slide direction="up" in={trigger} timeout={timeout}>
//             <div>{children}</div>
//         </Slide>
//     );
// };

// export default ScrollAnimation;


import React, { useState } from 'react';
import { Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children, direction = 'up', timeout = 200 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0, // Adjust this value based on your requirement
    });

    const [triggered, setTriggered] = useState(false);

    if (inView && !triggered) {
        setTimeout(() => {
            setTriggered(true);
        }, timeout);
    }

    return (
        <div ref={ref}>
            <Slide direction={direction} in={triggered} timeout={timeout}>
                <div>{children}</div>
            </Slide>
        </div>
    );
};

export default ScrollAnimation;

