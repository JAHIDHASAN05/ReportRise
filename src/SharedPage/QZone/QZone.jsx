import React from 'react';
import QZone1 from '../../assets/qZone1.png'
import QZone2 from '../../assets/qZone2.png'
import QZone3 from '../../assets/qZone3.png'

const QZone = () => {
    return (
       <div className='bg-secondary p-2 mt-5'>
             <h3>Q-Zone</h3>
        <div className='bg-secondary d-flex justify-center flex-column-reverse'>

            <img src={QZone1} alt="" />
            <img src={QZone2} alt="" />
            <img src={QZone3} alt="" />
        </div>
       </div>
    );
};

export default QZone;