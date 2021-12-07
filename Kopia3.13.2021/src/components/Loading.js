import React from 'react';
import 'css/Loading.css';

export default function Loading({ size = 30 }) {
   return (
      <div className='boxLoader'>
         <div className='loader'>
            <div
               style={{
                  margin: `0 ${size / 2}px`,
                  width: `${size}px`,
                  height: `${size}px`,
               }}
            ></div>
            <div
               style={{
                  margin: `0 ${size / 2}px`,
                  width: `${size}px`,
                  height: `${size}px`,
               }}
            ></div>
            <div
               style={{
                  margin: `0 ${size / 2}px`,
                  width: `${size}px`,
                  height: `${size}px`,
               }}
            ></div>
         </div>
      </div>
   );
}
